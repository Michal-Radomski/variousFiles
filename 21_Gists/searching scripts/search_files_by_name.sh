#!/bin/bash

# Function to search for files by name - based on .pdf printer
# Run: bash search_files_by_name.sh . file
search_files_by_name() {
  local directory_path="$1"
  local search_word="$2"

  # Check if the provided path is a directory
  if [ ! -d "$directory_path" ]; then
    echo "The path '$directory_path' is not a valid directory."
    return
  fi

  # List to store files that contain the word in their name
  local matching_files=()

  # Get the list of files in the specified directory
  local files=("$directory_path"/*)

  # Check each file in the directory
  for file in "${files[@]}"; do
    # Check if the file is a regular file (not a directory)
    if [ -f "$file" ]; then
      # Check if the word is in the filename - CASE INSENSETIVE
      if [[ "$(basename "$file" | tr '[:upper:]' '[:lower:]')" == *"$(echo "$search_word" | tr '[:upper:]' '[:lower:]')"* ]]; then
        matching_files+=("$file")
      fi
    fi
  done

  # Print the list of matching files
  for file in "${matching_files[@]}"; do
    echo "$file"
  done
}

# Main function to handle command line arguments
main() {
  # Check if the correct number of arguments is provided
  if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <path> <word>"
    exit 1
  fi

  # Get the arguments
  local directory_path="$1"
  local search_word="$2"

  # Search for files by name
  search_files_by_name "$directory_path" "$search_word"
}

# Execute the main function
main "$@"
