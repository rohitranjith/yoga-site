import { Box, Container, Drawer, IconButton, Typography } from "@mui/material"
import Logo from '../assets/logo.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Banner = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const navItems = [
        { label: 'Home', path: '/', icon: HomeOutlinedIcon },
        { label: 'About Us', path: '/about-us', icon: PersonOutlineOutlinedIcon },
        { label: 'Services', path: '/services', icon: SettingsOutlinedIcon },
        { label: 'Contact Us', path: '/contact', icon: PermContactCalendarOutlinedIcon },
        { label: 'Account', path: '/accounts/signin', icon: LockOutlinedIcon },
    ];

    return (
        <Box>
            <Box sx={{ backgroundColor: 'background.bgdark', py: 1.5, borderRadius: 3.2, position: 'relative', overflow: 'hidden' }}>
                <Container maxWidth='lg'>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
                            <Box>
                                <Box component={'img'} src={Logo} sx={{ maxWidth: 50 }} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 20, lineHeight: '20px', color: 'text.primary', fontWeight: 600 }}>Imperious</Typography>
                                <Typography sx={{ fontSize: 14, lineHeight: '16px', color: 'text.primary', mt: .2 }}>Yoga Studio</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
                            {
                                navItems.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    const color = isActive ? 'text.main' : 'text.primary';
                                    const Icon = item.icon;
                                    return (
                                        <Box key={item.path}
                                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: .4, cursor: 'pointer' }} onClick={() => navigate(item.path)}>
                                            <Icon sx={{ color }} />
                                            <Typography sx={{ color, lineHeight: 'normal', fontWeight: 600, fontSize: 16, }}>{item.label}</Typography>
                                        </Box>
                                    );
                                })
                            }
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton size="small" onClick={() => { setOpen(true) }}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>

                        <Drawer
                            anchor="right"
                            open={open}
                            onClose={() => { setOpen(false) }}
                            PaperProps={{
                                sx: { boxShadow: 'none', borderRadius: "0px", width: 280, display: { xs: 'block', md: 'none' } }
                            }}>
                            <Box sx={{ backgroundColor: 'background.sidebar', overflow: "hidden", height: '100vh', p: 4 }}>
                                {
                                    navItems.map((item) => {
                                        const isActive = location.pathname === item.path;
                                        const color = isActive ? 'text.main' : 'text.default';
                                        const Icon = item.icon;
                                        return (
                                            <Box key={item.path}
                                                sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', my: 3 }} onClick={() => navigate(item.path)}>
                                                <Icon sx={{ color }} />
                                                <Typography sx={{ color, lineHeight: 'normal', fontWeight: 600, fontSize: 16, }}>{item.label}</Typography>
                                            </Box>
                                        );
                                    })
                                }
                            </Box>
                        </Drawer>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Banner
