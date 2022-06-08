# Data Processing Backend README

This repository represents the backend work for our data reports.
You can run all of the code at once by running the command
`sh run-pipeline.js` from the directory root.

Requirements: bash shell, Node.js v8.11.0

## Data Processing

The `parse.js` script takes CSV files from the `data/raw` folder and
 converts their data to JSON files.

The `test.js` script makes sure the data processing occurred correctly.

## Server/API

The `server.js` script instantiates an HTTP server with an
`/api/reports` endpoint.
