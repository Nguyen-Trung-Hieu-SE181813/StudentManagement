import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { getAllStudents, deleteStudent } from '../api/student-api';
import { useNavigate } from 'react-router';

function DashboardPage() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const getAPI = () => {
    getAllStudents().then((data) => {
      if (data) {
        // Sort students by name
        data.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
        setStudents(data);
      }
    });
  };

  useEffect(() => {
    getAPI();
  }, []);

  const handleDelete = (id) => {
    deleteStudent(id).then(() => getAPI());
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#3f51b5', marginBottom: 4 }}
      >
        Dashboard
      </Typography>
      <Box sx={{ textAlign: 'right', marginBottom: 3 }}>
        <Button
          onClick={() => navigate('/dashboard/create')}
          variant="contained"
          color= "primary"
          sx={{ fontWeight: 'bold' }}
        >
          Create Student
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="student table">
          <TableHead sx={{ backgroundColor: '#3f51b5' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }} align="center">
                Image
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }} align="center">
                Name
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }} align="center">
                Date of Birth
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }} align="center">
                Gender
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }} align="center">
                Class
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' },
                  '&:hover': { backgroundColor: '#eaeaea' },
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell align="center">
                  <img
                    src={row?.image}
                    alt="Avatar"
                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                  />
                </TableCell>
                <TableCell align="center">{row?.name}</TableCell>
                <TableCell align="center">{row?.dateofbirth}</TableCell>
                <TableCell align="center">{row?.gender ? 'Male' : 'Female'}</TableCell>
                <TableCell align="center">{row?.class}</TableCell>
                <TableCell align="center">
                  <Button
                    size="small"
                    variant="outlined"
                    color="info"
                    sx={{ marginRight: 1 }}
                    onClick={() => navigate(`update/${row?.id}`)}
                  >
                    Update
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(row?.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DashboardPage;
