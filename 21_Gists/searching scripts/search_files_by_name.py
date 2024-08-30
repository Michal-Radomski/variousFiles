# Function to search for files by name - based on .pdf printer
# Run: python3 search_files_by_name.py . file
import os
import sys

def search_files_by_name(path, word):
    # Check if the provided path is a directory
    if not os.path.isdir(path):
        print(f"The path '{path}' is not a valid directory.")
        return

    # List to store files that contain the word in their name
    matching_files = []

    # Get the list of files in the specified directory
    files = os.listdir(path)
    
    # Check each file in the directory
    for file in files:
        # Check if the word is in the filename - CASE INSENSITIVE
        if word.lower() in file.lower():
            matching_files.append(os.path.join(path, file))

    # Return the list of matching files
    return matching_files

if __name__ == "__main__":
    # Check if the correct number of arguments is provided
    if len(sys.argv) != 3:
        print("Usage: python search_files_by_name_non_recursive.py <path> <word>")
        sys.exit(1)

    # Get the arguments
    path = sys.argv[1]
    word = sys.argv[2]

    # Search for files by name
    results = search_files_by_name(path, word)

    # Print the results
    if results:
        print(f"Files containing the word '{word}' in their name:")
        for result in results:
            print(result)
    else:
        print(f"No files found containing the word '{word}' in their name.")
