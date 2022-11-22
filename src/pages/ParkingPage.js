import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Park from '../components/Park/index';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const baseURL = 'http://localhost:3001/places/all';

export default function BasicGrid() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(baseURL);
                setData(response);
                console.log(data)
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);
    return (
        <Box sx={{ flexGrow: 1, position: 'relative', }} className="home">
            <Button variant="contained" color="warning" sx={{ marginY: 1 }}>เพิ่มสถานที่จอดรถใหม่</Button>
            {loading && <div>Loading</div>}
            {!loading && (
                <Park data={data} />
            )}
        </Box >
    );

}



