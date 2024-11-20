import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../api/student-api';
import StudentCard from '../components/StudentCard';
import { Grid, Container, Typography, Box } from '@mui/material';

function HomePage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents()
      .then(data => {
        if (data) {
          // Sort students by name
          data.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
          setStudents(data);
        }
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '20px 0',
      }}
    >
      <Container sx={{ maxWidth: 'lg', backgroundColor: '#fff', borderRadius: 2, padding: 4, boxShadow: 3 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Student Directory
        </Typography>
        <Grid container spacing={3}>
          {students.length > 0 ? (
            students.map(student => (
              <Grid item xs={12} sm={6} md={4} key={student.id}>
                <StudentCard student={student} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  color: '#9e9e9e',
                  padding: '20px',
                  border: '1px dashed #ccc',
                  borderRadius: 2,
                  backgroundColor: '#f9f9f9',
                }}
              >
                No students available at the moment.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
