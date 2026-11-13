const path = require('node:path');
const express = require('express');

const distDir = path.join(__dirname, 'dist', 'sample-template-green', 'browser');
const port = process.env.PORT || 8080;

const app = express();
app.disable('x-powered-by');

app.use(express.static(distDir));

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
