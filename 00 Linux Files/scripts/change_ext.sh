#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 3 ]; then
  echo "Usage: $0 extension_1 extension_2 directory_path"
  exit 1
fi

# Assign arguments to variables
ext1="$1"
ext2="$2"
dir_path="$3"

# Check if the specified directory exists
if [ ! -d "$dir_path" ]; then
  echo "Error: Directory '$dir_path' does not exist."
  exit 1
fi

# Change to the specified directory
cd "$dir_path" || exit

# Loop through files with the specified extension in the given directory
for file in *."$ext1"; do
  # Check if any files match the pattern
  if [ -e "$file" ]; then
    # Create new filename by replacing the old extension with the new one
    new_file="${file%.$ext1}.$ext2"
    # Rename the file
    mv "$file" "$new_file"
    echo "Renamed: $file -> $new_file"
  else
    echo "No files with extension .$ext1 found in '$dir_path'."
  fi
done
