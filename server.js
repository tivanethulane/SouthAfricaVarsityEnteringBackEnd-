const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from the backend API!');
});

// You can add more routes or middleware as needed
// For example: app.use('/api', yourApiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
