import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Setting from "../../Constant/SVG/Setting";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PPT from "../../Constant/SVG/PPT";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Name of the file",
    "First Last Name",
    "6 days ago",
    <MoreHorizIcon />
  ),
  createData(
    "Name of the file",
    "First Last Name",
    "6 days ago",
    <MoreHorizIcon />
  ),
];

export default function UserList() {
  const styleCss = {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Name</b>
            </TableCell>
            <TableCell>
              <b>Owner</b>
            </TableCell>
            <TableCell>
              <b>Last Opened</b>
            </TableCell>
            <TableCell>{<Setting />}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                <div style={styleCss}>
                  <PPT />
                  <b>{row.name}</b>
                </div>
              </TableCell>
              <TableCell width={200}>
                <div style={styleCss}>
                  <img
                    style={{ width: "15%", borderRadius: "50%" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgJIeZuWv-rCQcWc_QD17YMWNjYVcOWWq7A&usqp=CAU"
                  />
                  <b>{row.calories}</b>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <b>{row.fat}</b>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <b>{row.carbs}</b>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
