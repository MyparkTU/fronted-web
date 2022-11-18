import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
    createData('ลานจอดรถวิศวกรรมศาสตร์', "ลานจอดรถสาธารณะ", "พร้อมใช้งาน", "5", "ลบ"),
];

export default function CustomizedTables() {
    const [value, setValue] = React.useState(2);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>สถานที่จอดรถ</StyledTableCell>
                        <StyledTableCell align="right">ประเภท</StyledTableCell>
                        <StyledTableCell align="right">สถานะ</StyledTableCell>
                        <StyledTableCell align="right">รีวิว</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">
                            <Rating name="read-only" value={value} readOnly />
                            </StyledTableCell>
                            <StyledTableCell align="right"><Button  size="small" variant="outlined" color="error">ลบ </Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}