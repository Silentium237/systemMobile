import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#0092FF",
        color: theme.palette.common.white,
        fontWeight: 700,
        fontSize: 16
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontWeight: 500,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: "#0092FF",
    // },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: 'Разработка одностраничного сайта (Landing page)',
                customerId: 'от 1 недели',
                amount: 'от 1200.00',
            },
            {
                date: 'Разработка интернет-магазина (E-Commerce)',
                customerId: 'от 1 до 3 месяцев',
                amount: 'от 2500.00',
            },
            {
                date: 'Разработка баннеров',
                customerId: 'от 3 дней',
                amount: 'от 70.00',
            },
            {
                date: 'Разработка многостраничного сайта (сервис) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus orci sit am',
                customerId: 'от 3 недель',
                amount: 'от 2500.00',
            },
        ],
    };
}

function Row(props) {
    const { row, index } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }} style={index % 2 ? {backgroundColor: "#EFF7FD"}: {backgroundColor: "#FDFFFF"}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right" style={{color: "#125E97"}}>{row.fat}</StyledTableCell>
                <StyledTableCell />
                <StyledTableCell />
            </StyledTableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row" style={{width: "55%", fontWeight: 400, fontSize: 16}}>
                                                <img src="../dot.png" style={{paddingRight: 10}}/>
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell  align="left" style={{width: "25%", fontWeight: 400, fontSize: 16}}>{historyRow.customerId}</TableCell>
                                            <TableCell align="left" style={{width: "20%", fontWeight: 400, fontSize: 16, color: "#125E97"}}>{historyRow.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('Разработка мобильных приложений', 'от 3 недель', 'от 1500.00' ),
    createData('Разработка пользовательского ПО', 'от 3 недель', 'от 1400.00' ),
    createData('Расширение IT-команды', 'от 3 недель', 'от 1700.00' ),
    createData('UI/UX дизайн', 'от 3 недель', 'от 1900.00' ),
    createData('Системный и бизнес-анализ', 'от 3 недель', 'от 1900.00'  ),
    createData('Управление IT-проектами', 'от 3 недель', 'от 2000.00'  ),
    createData('Разработка Веб-приложений', 'от 2 недель', 'от 2500.00'  ),
    createData('Разработка мобильных приложений', 'от 3 недель', 'от 1500.00' ),
    createData('Разработка пользовательского ПО', 'от 3 недель', 'от 1400.00' ),
    createData('Расширение IT-команды', 'от 3 недель', 'от 1700.00' ),
    createData('UI/UX дизайн', 'от 3 недель', 'от 1900.00' ),
    createData('Системный и бизнес-анализ', 'от 3 недель', 'от 1900.00'  ),
    createData('Управление IT-проектами', 'от 3 недель', 'от 2000.00'  ),
    createData('Разработка Веб-приложений', 'от 2 недель', 'от 2500.00'  ),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell />
                        <StyledTableCell>УСЛУГА</StyledTableCell>
                        <StyledTableCell align="right">СРОК РЕАЛИЗАЦИИ</StyledTableCell>
                        <StyledTableCell align="right">СУММА (бел.руб)</StyledTableCell>
                        <StyledTableCell />
                        <StyledTableCell />
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <Row key={row.name} row={row} index={index} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}