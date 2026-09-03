import { Box, List, Stack, Typography, ListItemButton, ListItemIcon, ListItemText, Button, Collapse, Menu, MenuItem } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import dashboardIcon from '../assets/dashboard.png'
import coachIcon from '../assets/coach.png'
import profileIcon from '../assets/profile.png'
import usersIcon from '../assets/users.png'
import Logo from '../assets/logo.svg'
import useSignout from '../hooks/use-signout';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const menuItems = [
    {
        "id": 1,
        "menu_name": "Dashboard",
        "menu_alias_name": "Dashboard",
        "menu_link": "/dashboard",
        "menu_icon": dashboardIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 2,
        "menu_name": "Coach",
        "menu_alias_name": "Coach",
        "menu_link": "/coach/list",
        "menu_icon": coachIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 3,
        "menu_name": "Users",
        "menu_alias_name": "Users",
        "menu_link": "/users",
        "menu_icon": usersIcon,
        "is_active": true,
        "sub_menu": []
    },
    {
        "id": 4,
        "menu_name": "Profile",
        "menu_alias_name": "Profile",
        "menu_link": "/profile",
        "menu_icon": profileIcon,
        "is_active": true,
        "sub_menu": []
    },
]

const linkStyles = {
    backgroundImage: "linear-gradient(90deg, #fff3e6 0.07%, rgb(255, 255, 255) 99.91%)",
    "&:hover": { backgroundImage: "linear-gradient(90deg, #fff3e6 0.07%, rgb(255, 255, 255) 99.91%)" },
    color: "text.title",
    "& .MuiListItemText-primary": {
        color: "primary.main",
        fontWeight: 700
    },
    "& .MuiListItemIcon-root .nav-icon": {
        backgroundColor: 'primary.main'
    },
    "& .MuiListItemIcon-root p": {
        color: "primary.main",
        fontWeight: 600
    }
}

const childLinkStyles = {
    position: 'relative',
    '&:before': {
        position: 'absolute',
        content: '""',
        height: 'calc(100% - 20px)',
        left: 35,
        top: 0,
        borderRight: '1px dashed',
        zIndex: 1,
        borderColor: "#c3c3c3"
    },
    "& .MuiListItemText-primary": {
        color: "text.secondary"
    },
    ".MuiListItemButton-root": {
        position: "relative",
        "&:before": {
            content: "''",
            position: "absolute",
            width: "15px",
            left: 13,
            borderTop: '1px dashed',
            borderColor: "#c3c3c3"
        }
    },
    "& .active > .MuiListItemButton-root .MuiListItemText-primary": {
        color: "primary.main",
        fontWeight: 600
    },
    "& .active > .MuiListItemButton-root:before": {
        borderColor: "primary.main"
    }
}

const ListMenu = ({ menuItem, open }) => {

    const [isViewed, setIsViewed] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (e) => {
        if (open) {
            setIsViewed(!isViewed)
            setAnchorEl(null)
        } else {
            setAnchorEl(e.currentTarget)
        }
    };

    return (

        <>
            {menuItem.sub_menu?.length ?
                <>
                    <Box id={menuItem.menu_link} className={'parent-nav'}>
                        <Box className='menu-head' sx={{ px: open ? 1.5 : 1 }}>
                            <ListItemButton onClick={(e) => { handleClick(e) }} sx={{ pt: 1.2, pb: open ? 1.2 : .8, borderRadius: '6px', mb: open ? .8 : .4, px: open ? 1.5 : .8, '&:hover': { backgroundColor: 'background.bgdark' } }}>
                                <ListItemIcon sx={{ minWidth: 0, mx: 'auto', mr: open ? 2.2 : "auto", justifyContent: 'center', flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                    <Box className="nav-icon" sx={{ height: 18, width: 18, maskImage: `url(${menuItem.menu_icon})`, maskSize: 'contain', backgroundColor: 'primary.main' }} alt="" />
                                    {!open && <Typography variant="body1" sx={{ fontSize: 10, mt: .8 }} color="#000">{menuItem.menu_alias_name}</Typography>}
                                </ListItemIcon>
                                <ListItemText primary={menuItem.menu_alias_name} sx={{ opacity: open ? 1 : 0, display: open ? "block" : "none" }} />
                                {open && <>
                                    {isViewed ? <ExpandLess /> : <ExpandMore />}
                                </>}
                            </ListItemButton>
                        </Box>
                        <Collapse in={isViewed && open} timeout="auto">
                            <List component="div" disablePadding sx={{ ...childLinkStyles, pl: 3 }} >
                                {
                                    menuItem.sub_menu.map((item, index) => (
                                        <NavLink key={index} to={`${menuItem.menu_link}${item.menu_link}`}>
                                            <ListItemButton disableRipple sx={{ pl: 4, '&:hover': { backgroundColor: 'transparent' } }}>
                                                <ListItemText primary={item.menu_alias_name} />
                                            </ListItemButton>
                                        </NavLink>
                                    ))
                                }
                            </List>
                        </Collapse>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => { setAnchorEl(null) }}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    mt: .5,
                                    bgcolor: 'background.sidebar',
                                    minWidth: 100,
                                    width: 'auto',
                                    border: '1px solid',
                                    borderColor: 'background.light',
                                    borderRadius: 1.5,
                                    "&  .active li::after": { bgcolor: "#fff" },
                                    "&  .active li p": { color: "#fff" }
                                },
                            }}>
                            {menuItem.sub_menu.map((item, index) => (
                                <NavLink key={index} style={{ textDecoration: "none" }} to={`${menuItem.menu_link}${item.menu_link}`} >
                                    <MenuItem disableRipple sx={{ pl: 3, position: "relative", "&:after": { content: "''", position: "absolute", width: 5, height: 5, borderRadius: 10, left: 8, background: '#ffffff80' }, }} onClick={() => { setAnchorEl(null) }}>
                                        <Typography variant="body1" color="text.default">{item.menu_alias_name}</Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>

                </>
                :
                <NavLink to={menuItem.menu_link} className={"parent-nav"} style={{ position: 'relative' }}>
                    <ListItemButton sx={{ minHeight: 0, py: 1.2, justifyContent: open ? 'initial' : 'center', px: 1.5, mx: open ? 1.5 : 1, mb: open ? .8 : .4, borderRadius: '6px', '&:hover': { backgroundImage: 'linear-gradient(90deg, #fff3e6 0.07%, rgb(255, 255, 255) 99.91%)' }, "&:hover .MuiListItemIcon-root .nav-icon": { backgroundColor: 'primary.main' }, "&:hover .MuiListItemText-root span": { color: 'primary.main' } }}>
                        <ListItemIcon sx={{ minWidth: 0, mx: 'auto', mr: open ? 2.2 : "auto", justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
                            <Box className="nav-icon" sx={{ height: 18, width: 18, maskImage: `url(${menuItem.menu_icon})`, maskSize: 'contain', backgroundColor: '#4a525f' }} alt="" />
                            {!open && <Typography variant="body1" sx={{ fontSize: 10, mt: .8, lineHeight: '10px', color: "text.secondary" }}>{menuItem.menu_alias_name}</Typography>}
                        </ListItemIcon>
                        <ListItemText className="sample" primary={menuItem.menu_alias_name} sx={{ opacity: open ? 1 : 0, display: open ? "block" : "none", color: '#fff' }} />
                    </ListItemButton>
                </NavLink>
            }
        </>
    )
}

const Sidebar = ({ open }) => {
    const signOut = useSignout();
    const navigate = useNavigate()

    return (
        <Box sx={{ display: { xs: "none", md: "block" }, width: { md: 80, lg: open ? 250 : 80 }, transition: '.4s', overflow: "hidden", height: '100vh', flexGrow: 1, position: "sticky", top: 0, zIndex: 100, "& *": { boxSizing: "border-box" }, backgroundColor: '#fff', borderRight: '1px solid #f5f5f5' }} >
            <Stack className={`sidebar`} sx={{ gap: 2, justifyContent: "space-between", transition: '.5s', height: '100%', boxSizing: "border-box", position: "relative" }} >
                <Box>
                    <Box sx={{ px: open ? 2 : 1, width: 1, py: 2, boxSizing: "border-box", }}>
                        <Box sx={{ textAlign: 'center' }} onClick={() => { navigate('/') }}>
                            <Box component={'img'} src={Logo} sx={{ maxWidth: 55, objectFit: 'contain', transition: '.5s' }} alt="" />
                        </Box>
                    </Box>
                    <Box sx={{ maxHeight: "calc(100vh - 310px)", overflowY: "auto", overflowX: "hidden", height: '100%', }} className="scroll-bar">
                        <List component="nav" sx={{ "& *": { transition: ".4s all ease", color: "text.secondary", fontSize: open && "15px !important", fontWeight: 600 }, width: '100%', "& .parent-nav:has(.active) .menu-head > .MuiListItemButton-root , & .parent-nav.active  > .MuiListItemButton-root": { ...linkStyles }, "& a": { textDecoration: "none" }, '& .MuiListItemText-root': { my: 0, } }}>
                            {menuItems.map((item, index) => <ListMenu open={open} menuItem={item} key={index} />)}
                        </List>
                    </Box>
                </Box>
                <Box sx={{ px: 1.5, py: open ? 2 : 1, boxSizing: "border-box" }}>
                    <Box sx={{ borderRadius: 1.5, boxShadow: '0px 0px 0px 3px #3dcdff33' }}>
                        <Box sx={{ display: "flex", flexDirection: open ? "row" : "column-reverse", gap: 1, }}>
                            <Button onClick={() => {
                                signOut()
                            }} variant="contained" color="primary" size='large' startIcon={<LogoutIcon sx={{ rotate: "180deg", ml: open ? 0 : 1 }} />} sx={{ flexGrow: 1, backgroundColor: 'primary.main', textAlign: "start", fontSize: 14, px: 1, minWidth: 0 }}>{open && "Sign Out"}</Button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Sidebar