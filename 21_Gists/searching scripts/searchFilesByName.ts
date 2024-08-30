//* Search files by path, name and extension - based on .pdf printer
// Run: nodemon (or ts-node) searchFilesByName.ts ./ file .ts

import fs from "fs";
import path from "path";

// Function to search for files by name, path and extension
const searchFilesByName = (directoryPath: string, searchWord: string, extension: string): string[] | null => {
  if (!directoryPath || !searchWord || !extension) {
    console.log("No directoryPath or no searchWord or no extension");
    return null;
  }

  // Check if the provided path is a directory
  if (!fs.existsSync(directoryPath) || !fs.lstatSync(directoryPath).isDirectory()) {
    console.log(`The path '${directoryPath}' is not a valid directory.`);
    return null;
  }
  // console.log("fs.lstatSync(directoryPath):", fs.lstatSync(directoryPath));
  // console.log("fs.lstatSync(directoryPath).isDirectory():", fs.lstatSync(directoryPath).isDirectory());

  // Read the contents of the directory
  const files: string[] = fs.readdirSync(directoryPath, {
    encoding: "utf8",
    withFileTypes: false,
    recursive: false,
  });
  // console.log("files:", files);

  const matchingFiles: string[] = [];

  // Check each file in the directory - CASE INSENSITIVE
  files.forEach((file: any) => {
    if (file.toLowerCase().includes(searchWord.toLowerCase()) && file.toLowerCase().endsWith(extension)) {
      matchingFiles.push(path.join(directoryPath, file));
    }
  });

  //* Only for test!
  // const fileStats = matchingFiles?.map((file: string) => ({
  //   name: file,
  //   path: path.resolve(directoryPath, file),
  //   isDirectory: fs.statSync(path.resolve(directoryPath, file)).isDirectory(),
  // })) as object[];
  // console.log("fileStats:", fileStats);

  // Return the list of matching files
  return matchingFiles;
};

// Main function to handle command line arguments
(function (): void {
  // console.log("process.argv:", process.argv);

  // Check if the correct number of arguments is provided
  if (process.argv.length !== 5) {
    console.log("Usage: node searchFilesByName.ts <path> <word>");
    process.exit(1);
  }

  // Get the arguments
  const directoryPath: string = process.argv[2];
  const searchWord: string = process.argv[3];
  const extensionWord: string = process.argv[4];

  // Search for files by name
  const results = searchFilesByName(directoryPath, searchWord, extensionWord) as string[];

  // Print the results
  if (results?.length > 0) {
    console.log(`Files containing the word '${searchWord}' in their name and ending with '${extensionWord}':`);
    results.forEach((result: string, index: number) => console.log(`${index}, ${result}`));
  } else {
    console.log(`No files found containing the word '${searchWord}' ending with '${extensionWord}' in their name.`);
  }
})();
