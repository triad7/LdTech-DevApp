const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Replace this connection string with your MongoDB Atlas connection string
const atlasConnectionString = 'mongodb+srv://sambit98530:i7a4SpuOIHUFu3JQ@cluster0.mgn65lz.mongodb.net/LDTech-DevUser?retryWrites=true&w=majority';

mongoose.connect(atlasConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
