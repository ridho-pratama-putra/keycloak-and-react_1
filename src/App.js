import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
    BrowserRouter
    , Link
} from "react-router-dom";
import {capitalFirstLetter, equalsIgnoreCase} from "./utils/Strings";
import { useKeycloak } from '@react-keycloak/web'

function App() {

    const { keycloak } = useKeycloak();
    const pages = ['home', 'products', 'pricing', 'blog'];
    const settings = ['profile', 'account', 'dashboard', 'logout'];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            background: 'linear-gradient(45deg, #0c6ff5 30%, #83b8eb 90%)',
            border: 0
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}> LOGO </Typography>*/}
                    <img style={{width: '40px', height: 'auto'}} src={logo} className="App-logo" alt="logo"/>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
                                    aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon/>
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorElNav}
                              anchorOrigin={{vertical: 'bottom', horizontal: 'left',}} keepMounted
                              transformOrigin={{vertical: 'top', horizontal: 'left',}} open={Boolean(anchorElNav)}
                              onClose={handleCloseNavMenu} sx={{display: {xs: 'block', md: 'none'},}}>
                            <BrowserRouter>
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu} component={Link}
                                              to={`/${equalsIgnoreCase(page, 'Home') ? '' : page}`}>
                                        <Typography textAlign="center">{capitalFirstLetter(page)}</Typography>
                                    </MenuItem>
                                ))}
                            </BrowserRouter>
                        </Menu>
                    </Box>
                    <Typography variant="h6" noWrap component="div"
                                sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}> LOGO </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <BrowserRouter>
                            {pages.map((page) => (
                                <Button component={Link} to={`/${equalsIgnoreCase(page, 'Home') ? '' : page}`}
                                        key={page} sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block'
                                }}>{capitalFirstLetter(page)}</Button>
                            ))}
                        </BrowserRouter>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <BrowserRouter>
                            {keycloak && keycloak.authenticated &&
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/image path.jpg"/>
                                    </IconButton>
                                </Tooltip>
                                <Menu sx={{mt: '45px'}} id="menu-appbar" anchorEl={anchorElUser}
                                      anchorOrigin={{vertical: 'top', horizontal: 'right',}} keepMounted
                                      transformOrigin={{vertical: 'top', horizontal: 'right',}}
                                      open={Boolean(anchorElUser)}
                                      onClose={handleCloseUserMenu}>
                                    {settings.map((setting) => {
                                            if (equalsIgnoreCase(setting, 'Logout')) {
                                                return (<MenuItem key={setting} onClick={handleCloseNavMenu}>
                                                    <Typography
                                                        textAlign="center">{capitalFirstLetter(setting)}</Typography>
                                                </MenuItem>)
                                            }
                                            return (<MenuItem key={setting} component={Link}
                                                              to={`/${setting}`}>
                                                <Typography textAlign="center">{capitalFirstLetter(setting)}</Typography>
                                            </MenuItem>)
                                        }
                                    )}
                                </Menu>
                            </>}
                            {keycloak && !keycloak.authenticated &&
                            <MenuItem key={'login'} onClick={() => keycloak.login()}>
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem>}
                        </BrowserRouter>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default App;
