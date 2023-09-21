import React from 'react'
import { useState} from 'react';
import axios from 'axios';

    const Logfiles = () => {
    const [data, setData] = useState([])
    
    const GrafanaApi = 'http://localhost:5000/api/grafana';

    const fetchGrafana = async () => {
        try{
            const response = await axios.get(GrafanaApi);
            console.log(response)
            setData(response.data);
        }   catch(error){
            console.log('Error Fetching Api:', error);
        }
    };
      



  return (
    <>
    <div>Logfiles</div>
    <button onClick={fetchGrafana}>GET</button>
    <h1>DATA :</h1>
    <ul>
        {data.map((data) => (
            <li>
                {data.values}
            </li>
        ))}
        </ul>     
    </>
  )
}

export default Logfiles;