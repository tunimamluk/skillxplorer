const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (like signup.html and CSS)
app.use(express.static(path.join(__dirname)));

// Handle form submission
app.post('/save-data', (req, res) => {
  const data = req.body;

  // Ensure the folder "register_data" exists
  const folderPath = path.join(__dirname, 'register_data');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  // Create or append data to the file
  const filePath = path.join(folderPath, 'user_data.json');
  const existingData = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : [];

  // Add new data with a timestamp
  const newData = {
    ...data,
    timestamp: new Date().toISOString(),
  };
  existingData.push(newData);

  // Save updated data back to the file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
  console.log(`Data saved to: ${filePath}`);

  res.send({ message: 'Data saved successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
