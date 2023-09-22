
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





//Create api for sonarqube
// Function to convert UTC date and time to IST
function convertToIST(utcDate) {
  const date = new Date(utcDate);
  const istOffset = 330 * 60 * 1000; // IST offset in milliseconds (5 hours and 30 minutes)
  const istDate = new Date(date.getTime() + istOffset);
  
  const year = istDate.getUTCFullYear();
  const month = (istDate.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
  const day = istDate.getUTCDate().toString().padStart(2, '0');
  const hours = istDate.getUTCHours().toString().padStart(2, '0');
  const minutes = istDate.getUTCMinutes().toString().padStart(2, '0');
  const seconds = istDate.getUTCSeconds().toString().padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Define route to fetch SonarQube projects
app.get('/api/projects', async (req, res) => {
  const projectUrl = 'http://13.234.23.179:9000/api/projects/search';
  const username = 'admin';
  const password = 'sonar';

  try {
    const response = await axios.get(projectUrl, {
      auth: {
        username,
        password,
      },
    });

    // Extract relevant information from the response
    const projects = response.data.components || [];

    // Modify each project's lastAnalysis date and time to IST
    projects.forEach((project) => {
      project.lastAnalysis = convertToIST(project.lastAnalysisDate);
      
    });

    res.json(projects || []);
  } catch (error) {
    console.log('Error while fetching projects from Sonar:', error);
    res.status(404).json({ error: 'An error occurred while fetching projects' });
  }
});


// Define route to fetch issues as per project
app.get('/api/issues', async (req, res) => {
  const sonarQubeApiUrl = 'http://13.234.23.179:9000/api/issues/search';
  const username = 'admin';
  const password = 'sonar';

  try {
    const response = await axios.get(sonarQubeApiUrl, {
      auth: {
        username,
        password,
      },
    });

    // Extract relevant information from the response
    const issues = response.data.issues.map((issue) => ({
      effort: issue.effort,
      date: convertToIST(issue.creationDate),
      message: issue.message,
      author: issue.author,
    }));

    res.json(issues || []);
  } catch (error) {
    console.error('Error fetching issues:', error);
    res.status(500).json({ error: 'An error occurred while fetching issues' });
  }
});
 
  // grafana api initialized
  const grafanaApi = 'http://13.234.23.179:3100/loki/api/v1/query_range?query={job="varlogs"}';
  app.get('/api/grafana', async(req, res) => {
    const username = 'admin';
    const password = 'grafana'
    try{
      const response = await axios.get(grafanaApi,{
       auth: {
        username,
        password
       } 
      });
      //send your data to frontend
      
      res.json(response.data);
    }catch(error){
      console.error('Error Fetching Grafana:', error);
      res.status(500).json({error: 'An error occured while fetching Grafana'});
    }
  })



//App running on port 
app.listen(PORT, (err)=>{
  if(err){
    console.log("Error while connecting to Server");
  }else{
    console.log("App is running on port:", PORT);
  }
})