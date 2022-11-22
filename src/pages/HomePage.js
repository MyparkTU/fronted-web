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
import LineGraph from '../components/LineGraph';
import BarGraph from '../components/Bargraph';
export default function BasicGrid() {

    return (
        <Box sx={{ flexGrow: 1,marginTop:10 }} className="home">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <Card sx={{ minWidth: 100 }} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                ผู้ใช้งานใหม่
                            </Typography>

                            <Typography variant="h4">
                                100
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2} >
                    <Card sx={{ minWidth: 100 }} container justifyContent="center">
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                จำนวนรีวิว
                            </Typography>

                            <Typography variant="h4">
                                2
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card sx={{ minWidth: 100 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                สถานที่จอดทั้งหมด
                            </Typography>

                            <Typography variant="h4">
                                14
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card sx={{ minWidth: 100 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                รายงานปัญหา
                            </Typography>

                            <Typography variant="h4">
                                2
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card sx={{ minWidth: 100 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                ปัญหาที่ได้รับการแก้ไข
                            </Typography>

                            <Typography variant="h4">
                                1
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card sx={{ minWidth: 100 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                อุปกรณ์พร้อมใช้งาน
                            </Typography>

                            <Typography variant="h4">
                                100
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} marginTop={1}>
                    <Card sx={{ minWidth: 100 }}>
                    <Card sx={{ minWidth: 100 , height:500,paddingTop:5,paddingLeft:3}} >
                        <BarGraph/>
                    </Card>
                    </Card>
                </Grid>
                <Grid item xs={6} marginTop={1}>
                    <Card sx={{ minWidth: 100 , height:500,paddingTop:5,paddingLeft:3}} >
                        <LineGraph/>
                    </Card>
                </Grid>
            </Grid>
        </Box >

    );
}