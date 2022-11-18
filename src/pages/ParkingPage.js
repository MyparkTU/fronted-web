import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Park from '../components/Park/index';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function BasicGrid() {
    return (

        <Box sx={{ flexGrow: 1, position: 'relative', }} className="home">
            <Button variant="contained" color="warning" sx={{marginY:1}}>เพิ่มสถานที่จอดรถใหม่</Button>
            <Park />
        </Box >

    );
}