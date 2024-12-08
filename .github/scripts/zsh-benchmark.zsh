#!/bin/zsh
set -e

ZSH_BENCH_REPO="https://github.com/romkatv/zsh-bench"
ZSH_BENCH_DIR="${ZSH_BENCH_DIR:-${RUNNER_TEMP:-${TMPDIR:-/tmp}}/zsh-bench}"
BENCHMARK_RESULT="${BENCHMARK_RESULT:-/dev/stdout}"

# Ensure git is installed
if ! command -v git &>/dev/null; then
    echo "Error: git is not installed." >&2
    exit 1
fi

# Setup cleanup to remove temporary files, excluding benchmark result
cleanup() {
    echo "Cleaning up temporary files..."
    rm -rf "$ZSH_BENCH_DIR"
}
trap cleanup EXIT

# Start message
echo "Starting Zsh benchmark..."
echo "Temporary directory for zsh-bench: $ZSH_BENCH_DIR"

# Clone zsh-bench repository if it doesn't exist
if [ ! -d "$ZSH_BENCH_DIR" ]; then
    echo "Cloning zsh-bench repository from $ZSH_BENCH_REPO..."
    git clone "$ZSH_BENCH_REPO" "$ZSH_BENCH_DIR" &>/dev/null || {
        echo "Error: Failed to clone $ZSH_BENCH_REPO" >&2
        exit 1
    }
    echo "Repository cloned successfully."
else
    echo "zsh-bench repository already exists in $ZSH_BENCH_DIR. Skipping clone."
fi

"$ZSH_BENCH_DIR/zsh-bench"

# Run zsh-bench and process results
echo "Running zsh-bench..."
"$ZSH_BENCH_DIR/zsh-bench" |
    awk '
BEGIN {
    print "["   # Start the JSON array
    is_first = 1  # Flag to track the first record
}
{
    split($0, arr, "=")          # Split the line by "="
    metric_name = arr[1]         # The first part is the metric name
    metric_value = arr[2]        # The second part is the metric value

    # Split the metric name by "_" to extract the unit
    n = split(metric_name, name_parts, "_")
    unit = name_parts[n]         # The last part of the metric name is the unit

    # Filter to include only metrics with unit "ms"
    if (unit == "ms") {
        if (!is_first) {
            printf ",\n"  # Add a comma before every record except the first
        }
        is_first = 0      # Reset the first record flag
        printf "  {\n    \"name\": \"%s\",\n    \"unit\": \"%s\",\n    \"value\": %s\n  }", metric_name, unit, metric_value
    }
}
END {
    print "\n]"   # End the JSON array
}
' >"$BENCHMARK_RESULT"

echo "Benchmark completed successfully."
if [[ "$BENCHMARK_RESULT" != "/dev/stdout" ]]; then
    echo "Results saved to: $BENCHMARK_RESULT"
fi
