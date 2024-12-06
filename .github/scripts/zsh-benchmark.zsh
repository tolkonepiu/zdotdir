#!/bin/zsh
set -e

BENCHMARK_RESULT="${BENCHMARK_RESULT:-/dev/stdout}"

# Start message
echo "Starting Zsh benchmark..."

# Ensure zsh-bench is installed
if ! command -v zsh-bench &>/dev/null; then
    echo "Error: zsh-bench is not installed." >&2
    exit 1
fi

# Run zsh-bench and process results
echo "Running zsh-bench..."
zsh-bench |
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
