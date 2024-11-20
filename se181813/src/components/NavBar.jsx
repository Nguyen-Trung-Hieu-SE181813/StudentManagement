import { AppBar, Toolbar, Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5', boxShadow: 2 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2, marginLeft: 'auto', marginRight: 'auto' }}>
          <Button
            onClick={() => navigate('/')}
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': { backgroundColor: '#fff', color: '#3f51b5' },
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => navigate('/dashboard')}
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': { backgroundColor: '#fff', color: '#3f51b5' },
            }}
          >
            Dashboard
          </Button>
          <Button
            onClick={() => navigate('/contact')}
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': { backgroundColor: '#fff', color: '#3f51b5' },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
