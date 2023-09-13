
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
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



// Github api started here
// Enable CORS for your React app's origin
app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
);


app.get('/authorize', (req, res) => {
  // Redirect the user to GitHub for authorization.
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=787dea0261fc8914ebd0&scope=user`;
  res.redirect(redirectUrl);
});



app.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: '787dea0261fc8914ebd0',
        client_secret: '820a5a5736b0672e7861f0d05b4e0aa4d2d30cdb',
        code: code,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const accessToken = response.data.access_token;

    // Send the access token as JSON
    res.json({
      status: 'success',
      access_token: accessToken,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Authorization failed. Please try again.' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});