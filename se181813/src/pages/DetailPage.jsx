import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentCard from '../components/StudentCard';
import { getStudentById } from '../api/student-api';
import { Typography, Box, Paper, CircularProgress } from '@mui/material';

export default function DetailPage() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudentById(id).then((data) => {
      if (data) {
        console.log("Student data:", data); // Kiểm tra dữ liệu
        setStudent(data);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <Paper
        sx={{
          padding: 4,
          maxWidth: 600,
          width: '100%',
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#ffffff',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#3f51b5' }}
        >
          Student Details
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <img
            src={student?.image}
            alt="Student Avatar"
            style={{
              width: 150, // Set a fixed width for the image
              height: 200, // Adjust the height for ID card style
              objectFit: 'cover', // Ensure the image covers the area and maintains aspect ratio
              borderRadius: 4, // Rounded corners to make it look like a photo
              marginBottom: 16,
              border: '2px solid #ccc', // Add a border around the image to make it stand out
            }}
          />
          {/* Student Info */}
          <Typography variant="h6" gutterBottom>
            ID: {student?.id}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Name: {student?.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Date of Birth: {student?.dateofbirth}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Gender: {student?.gender ? 'Male' : 'Female'}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Class: {student?.class}
          </Typography>
        </Box>
        {/* Feedback */}
        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Feedback
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {student?.feedback || 'No feedback provided.'}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
