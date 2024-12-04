import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import logo from '../assets/judicial.png'; // Ruta corregida

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(2),
    height: '40px',
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

return (
    <AppBar position="sticky" className="bg-primary">
        <Toolbar style={{ justifyContent: 'center' }}>
            <img src={logo} alt="Logo" className={classes.logo} />
            <Typography variant="h6" color="inherit" className={classes.title}>
                Avence juridico
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
);
}

export default Header;