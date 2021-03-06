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
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {capitalFirstLetter, equalsIgnoreCase} from "./utils/Strings";
import {useKeycloak} from '@react-keycloak/web'
import Products from './components/Products/Products'
import Blog from './components/Blog/Blog'
import Pricing from './components/Pricing/Pricing'
import ProductDetail from "./components/Products/ProductDetail";

function App() {

    const {keycloak} = useKeycloak();
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
        <BrowserRouter>

            <AppBar position="static" sx={{
                background: 'linear-gradient(45deg, #0c6ff5 30%, #83b8eb 90%)',
                border: 0
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/*<Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}> LOGO </Typography>*/}
                        <img style={{width: '40px', height: 'auto'}} src={logo} className="App-logo" alt="logo"/>

                        {/*mobile menus*/}
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"
                                        aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon/>
                            </IconButton>
                            <Menu id="menu-appbar" anchorEl={anchorElNav}
                                  anchorOrigin={{vertical: 'bottom', horizontal: 'left',}} keepMounted
                                  transformOrigin={{vertical: 'top', horizontal: 'left',}} open={Boolean(anchorElNav)}
                                  onClose={handleCloseNavMenu} sx={{display: {xs: 'block', md: 'none'},}}>
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu} component={Link}
                                              to={`/${equalsIgnoreCase(page, 'Home') ? '' : page}`}>
                                        <Typography textAlign="center">{capitalFirstLetter(page)}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography variant="h6" noWrap component="div"
                                    sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}> LOGO </Typography>

                        {/*web menus*/}
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button component={Link} to={`/${equalsIgnoreCase(page, 'Home') ? '' : page}`}
                                        key={page} sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block'
                                }}>{capitalFirstLetter(page)}</Button>
                            ))}
                        </Box>
                        <Box sx={{flexGrow: 0}}>
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

                                    <MenuItem key={'preferred_username'} disabled={true}>
                                        <Typography
                                            textAlign="center">Hi!, {keycloak.tokenParsed.preferred_username} </Typography></MenuItem>
                                    {settings.map((setting) => {
                                            if (equalsIgnoreCase(setting, 'Logout')) {
                                                return (<MenuItem key={setting} onClick={() => keycloak.logout()}>
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
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Routes>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/products/detail/:barcode" element={<ProductDetail/>}/>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/pricing" element={<Pricing/>}></Route>
                <Route exact path="/" element={<div> HOME</div>}>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
