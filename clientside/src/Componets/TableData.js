import React, { useEffect } from "react";
import LoadingOverlay from 'react-loading-overlay';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useDispatch, useSelector } from "react-redux";
import { getAllSavedData } from "../action/savenote";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableData = () => {
  const classes = useStyles();

  const allSaveddata = useSelector((state) => state.AllSaveddata);
  const { loading, success, notes } = allSaveddata;

//   console.log(notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSavedData());
  }, [getAllSavedData]);

  return (
    <LoadingOverlay
  active={loading}
  spinner
  text='Loading your content...'
  >
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Notes</StyledTableCell>
            <StyledTableCell align="right">Dates</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes &&
            notes.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.notes}
                </StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </LoadingOverlay>
  );
};

export default TableData;
