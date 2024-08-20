import * as fs from "fs";

interface CsvRow {
  [key: string]: string | number; // Represents a row in the CSV file
}

async function getColumnsFromCsv(filePath: string, columnNames: string[]): Promise<CsvRow[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }

      const lines: string[] = data.split("\n"); // Split the file into lines
      const headers: string[] = lines[0]?.split(",").map((header: string) => header.trim()); // Get headers from the first line
      const results: CsvRow[] = [];

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
          const values = line.split(","); // Split each line into values
          const filteredRow: CsvRow = {};

          // Map the specified column names to their corresponding values
          for (const column of columnNames) {
            const index = headers.indexOf(column);
            if (index !== -1) {
              filteredRow[column] = values[index].trim(); // Add the value to the filtered row
            }
          }

          results.push(filteredRow); // Add the filtered row to the results
        }
      }

      resolve(results); // Resolve the promise with the results
    });
  });
}

// Example usage
(async () => {
  const filePath = "csvData.csv"; // CSV file path
  const columnsToFetch = ["id", "first-name", "email", "city", "country", "ip_address"]; // Desired column names

  try {
    const csvData = await getColumnsFromCsv(filePath, columnsToFetch);
    console.log("csvData:", csvData);
  } catch (error) {
    console.error("Error reading CSV file:", error);
  }
})();
