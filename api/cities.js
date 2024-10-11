import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Construct the path to the cities.json file
    const filePath = path.join(process.cwd(), 'data', 'cities.json');

    // Read the cities.json file
    const fileContents = readFileSync(filePath, 'utf8');

    // Parse the JSON data
    const data = JSON.parse(fileContents);

    // Send the cities data as the response
    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading cities.json:", error);
    res.status(500).json({ error: "Failed to read cities data" });
  }
}
