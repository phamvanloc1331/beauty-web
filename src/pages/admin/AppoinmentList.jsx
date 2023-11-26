import {
  Table,
  TableHead,
  TableRow,
  Container,
  TableCell,
  TableBody,
  Typography,
  Toolbar,
  TableContainer,
  AppBar,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAppointments } from "../../api";

const AppoinmentList = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await getAppointments();
      console.log(data?.data);
      setRows(data?.data);
    };
    fetch();
  }, []);
  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "phone",
      label: "Phone",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "service",
      label: "Service",
    },
    {
      name: "note",
      label: "Note",
    },
  ];
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Container >
        <Paper sx={{ py: 4 , px:2, mt:4}}>
          <Typography variant="h4">Appointments</Typography>
          <TableContainer>
            <Table border={1}>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>

                  {columns.map(({ name, label }) => {
                    return <TableCell>{label}</TableCell>;
                  })}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, index) => {
                  console.log(row);
                  return (
                    <TableRow key={row.id}>
                      <TableCell>{index + 1}</TableCell>
                      {columns.map(({ name }) => {
                        return <TableCell>{row.attributes[name]}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
};

export default AppoinmentList;
