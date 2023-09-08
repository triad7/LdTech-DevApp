
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoute = require('./src/routes/authRoutes');
const contactRoute = require('./src/routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoute);
app.use('/contact', contactRoute); 



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
