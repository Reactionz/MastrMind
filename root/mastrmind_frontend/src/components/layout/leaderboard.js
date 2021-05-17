<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(place, points, username, userid) {
  return { place, points, username, userid };
}

const rows = [
  createData(1, 1000, 'first', 123),
  createData(2, 943, 'superproductive', 34223),
  createData(3, 856, 'itry', 3413),
  createData(4, 801, 'ptw', 54654),
  createData(5, 766, 'superfast', 96543),
  createData(6, 700, 'first', 123),
  createData(7, 690, 'superproductive', 34223),
  createData(8, 570, 'itry', 3413),
  createData(9, 430, 'ptw', 54654),
  createData(10, 125, 'superfast', 96543),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Leaderboard() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell align="center">Points</StyledTableCell>
            <StyledTableCell align="center">UserName</StyledTableCell>
            <StyledTableCell align="center">#UserId</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.place}>
              <StyledTableCell component="th" scope="row">
                {row.place}
              </StyledTableCell>
              <StyledTableCell align="center">{row.points}</StyledTableCell>
              <StyledTableCell align="center">{row.username}</StyledTableCell>
              <StyledTableCell align="center">#{row.userid}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

=======
=======
>>>>>>> d4d6bd6 (redid the leaderboard to be less cluttered and easier to insert)
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(place, points, username, userid) {
  return { place, points, username, userid };
}

const rows = [
  createData(1, 1000, 'first', 123),
  createData(2, 943, 'superproductive', 34223),
  createData(3, 856, 'itry', 3413),
  createData(4, 801, 'ptw', 54654),
  createData(5, 766, 'superfast', 96543),
  createData(6, 700, 'first', 123),
  createData(7, 690, 'superproductive', 34223),
  createData(8, 570, 'itry', 3413),
  createData(9, 430, 'ptw', 54654),
  createData(10, 125, 'superfast', 96543),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Leaderboard() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell align="center">Points</StyledTableCell>
            <StyledTableCell align="center">UserName</StyledTableCell>
            <StyledTableCell align="center">#UserId</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.place}>
              <StyledTableCell component="th" scope="row">
                {row.place}
              </StyledTableCell>
              <StyledTableCell align="center">{row.points}</StyledTableCell>
              <StyledTableCell align="center">{row.username}</StyledTableCell>
              <StyledTableCell align="center">#{row.userid}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
>>>>>>> d4d6bd6 (redid the leaderboard to be less cluttered and easier to insert)
