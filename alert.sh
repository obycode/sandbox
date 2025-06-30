#!/bin/bash

# Check if PID is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <PID>"
    exit 1
fi

PID=$1
LOW_COUNT=0  # Counter for low CPU usage intervals
INTERVAL=0.5  # Check interval in seconds
THRESHOLD=90  # CPU usage threshold

while kill -0 "$PID" 2>/dev/null; do
    # Get CPU usage of the process
    CPU_USAGE=$(ps -p "$PID" -o %cpu= | awk '{print int($1)}')

    if [ "$CPU_USAGE" -lt "$THRESHOLD" ]; then
        ((LOW_COUNT++))
    else
        LOW_COUNT=0  # Reset counter if CPU goes above threshold
    fi

    # If the process has stayed below threshold for 1 second (2 cycles)
    if [ "$LOW_COUNT" -ge 2 ]; then
        say "It's done"
        exit 0
    fi

    sleep "$INTERVAL"
done

say "Process $PID is no longer running"
