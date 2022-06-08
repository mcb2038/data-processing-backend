rm -rf data/processed/*
cd scripts

echo "1. Creating new JSON."
node parse.js

# 3. Test the files in data/processed
echo "2. Testing."
node test.js

# 4. Run server
echo "3. Now Running new server.
- See API at http://localhost:3000/api/reports
- Control-c to end this process.
- Command-t for new Terminal tab."
node server.js