#!/bin/bash

file="C:\Users\Manja\devtraining\log_analysis\logfile.txt"

# Check if file exists
if [ ! -f "$file" ]; then
    echo "File not found: $file"
    exit 1
fi

# Total lines
total_lines=$(awk 'END {print NR}' "$file")

# Count log levels
info_count=$(grep -c "INFO" "$file")
warning_count=$(grep -c "WARNING" "$file")
error_count=$(grep -c "ERROR" "$file")

# Extract unique IP addresses (assuming IPs in format x.x.x.x)
unique_ips=$(grep -oE '([0-9]{1,3}\.){3}[0-9]{1,3}' "$file" | sort -u)

echo "========== LOG ANALYSIS REPORT =========="
echo "File: $file"
echo "Total Lines: $total_lines"
echo "-----------------------------------------"
echo "INFO:    $info_count"
echo "WARNING: $warning_count"
echo "ERROR:   $error_count"
echo "-----------------------------------------"
echo "Unique IP Addresses Found:"
for ip in $unique_ips; 
do
    echo "  -$ip"
done
echo "========================================="
