import './App.css';
import axios from "axios";
import React, { useEffect, useState} from 'react';

const baseURL = "http://localhost:3001/places/all";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(baseURL);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2>Doing stuff with data</h2>
        {data.map(item => (<><span>{item.name}</span><br/></>))}
      </div>
    )}
    </div>
  )
}
