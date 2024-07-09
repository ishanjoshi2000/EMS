import React ,{useState}from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Divider, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const Navbar=()=>{
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };
        return(
            <>
            <AppBar position="static" sx={{ backgroundColor: '#2196f3' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <div>
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/EmployeeManagement">
                            <ListItemIcon>
                                <ManageAccountsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Employee Management" />
                        </ListItem>
                        </List>
                </div>
            </Drawer>
        </>
        )
}
export default Navbar;