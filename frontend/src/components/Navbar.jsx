import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
          <AppBar color="error">
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      EMPLOYEE
                  </Typography>
                  <Link to="/add">
                      <Button variant="contained" color="success">Add</Button>
                  </Link>&nbsp; &nbsp;
                  <Link to="/view">
                  <Button variant="contained" color="success">View</Button>
                  </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar
