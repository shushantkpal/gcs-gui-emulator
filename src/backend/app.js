const express = require('express');
const gcpStorage = require('./scripts/gcpStorage')
const app = express();

app.use((req, res, next) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
})

app.get('/fetchFiles/:bucketname', async (req, res) => {
  await gcpStorage.getFileListsfromGCP(req, res);
});

app.get('/getBucketList', async (req, res) => {
  await gcpStorage.getBucketList(req, res);
});

const port = process.env.PORT || 3002
// Start the server
app.listen(port, () => {
  console.log('Node Server Is Connect to Port ');
});