import {
    Select,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Grid,
    Button,
    Typography,
    Paper,
  } from '@mui/material';
  import React, { useEffect, useState } from 'react';
  import { createStudent, getStudentById, updateStudent } from '../api/student-api';
  import { useNavigate, useParams } from 'react-router';
  
  export default function UpdatePage() {
    const [student, setStudents] = useState({
      name: '',
      dateofbirth: '',
      gender: true,
      class: '',
      image: '',
      feedback: '',
    });
  
    const [errors, setError] = useState({
      name: '',
      dateofbirth: '',
      class: '',
      image: '',
      feedback: '',
    });
  
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
      getStudentById(id).then((data) => {
        if (data) {
          setStudents(data);
        }
      });
    }, [id]);
  
    function isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (err) {
        return false;
      }
    }
  
    const validate = () => {
      let tempError = {};
      if (student.name === '') {
        tempError.name = 'Name is required!';
      } else if (student.name.length < 2) {
        tempError.name = 'Name must be at least 2 characters!';
      }
  
      if (student.dateofbirth === '') {
        tempError.dateofbirth = 'Date Of Birth is required!';
      }
  
      if (student.class === '') {
        tempError.class = 'Class is required!';
      }
  
      if (student.image === '') {
        tempError.image = 'Image is required!';
      } else if (!isValidUrl(student.image)) {
        tempError.image = 'URL should be valid!';
      }
  
      setError(tempError);
      return Object.values(tempError).every((x) => x === '');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validate()) return;
  
      updateStudent(id, student).then(() => {
        alert('Update Success!');
        navigate('/dashboard');
      });
    };
  
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: 4 }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: '100%',
            maxWidth: 600,
            borderRadius: 3,
            backgroundColor: '#fff',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ marginBottom: 3, fontWeight: 'bold', color: '#3f51b5' }}
          >
            Update Student
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ marginBottom: 3, color: '#757575' }}
          >
            Editing details for student ID: {id}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  type="text"
                  placeholder="Name"
                  value={student.name}
                  onChange={(e) =>
                    setStudents({ ...student, name: e.target.value })
                  }
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date Of Birth"
                  value={student.dateofbirth}
                  onChange={(e) =>
                    setStudents({ ...student, dateofbirth: e.target.value })
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={Boolean(errors.dateofbirth)}
                  helperText={errors.dateofbirth}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    value={student.gender ? 'male' : 'female'}
                    onChange={(e) =>
                      setStudents({ ...student, gender: e.target.value === 'male' })
                    }
                    label="Gender"
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Class"
                  type="text"
                  placeholder="Class"
                  value={student.class}
                  onChange={(e) =>
                    setStudents({ ...student, class: e.target.value })
                  }
                  error={Boolean(errors.class)}
                  helperText={errors.class}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Image URL"
                  type="text"
                  placeholder="Image URL"
                  value={student.image}
                  onChange={(e) =>
                    setStudents({ ...student, image: e.target.value })
                  }
                  error={Boolean(errors.image)}
                  helperText={errors.image}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Feedback"
                  type="text"
                  placeholder="Feedback"
                  value={student.feedback}
                  onChange={(e) =>
                    setStudents({ ...student, feedback: e.target.value })
                  }
                  error={Boolean(errors.feedback)}
                  helperText={errors.feedback}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: 3,
                padding: 1.5,
                backgroundColor: '#3f51b5',
                ':hover': { backgroundColor: '#303f9f' },
              }}
            >
              Update
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
  