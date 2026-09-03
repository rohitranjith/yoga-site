import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material"
import footerLogo from '../../assets/footer-logo.svg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';


const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'background.primary', pt: { xs: 5, md: 10 }, pb: 6 }}>
            <Container maxWidth='lg'>
                <Box>
                    <Grid container spacing={{ xs: 3, md: 4, lg: 6 }}>
                        <Grid item xs={12} md={7}>
                            <Box>
                                <Box>
                                    <Box component={'img'} src={footerLogo} />
                                </Box>
                                <Box sx={{ mt: 3, maxWidth: 550 }}>
                                    <Typography sx={{ color: 'text.default', fontSize: 18, fontWeight: 400 }}>We believe wellness is a way of life through mindful yoga practice, breathwork, and guided meditation, we create space for healing, growth, and inner peace.</Typography>
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
                                        <Box>
                                            <Typography sx={{ border: '1px solid #FFFFFF1A', px: 2, py: .5, borderRadius: 1, color: '#fff', transition: '.4s', fontSize: 18, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>(256) 123 - 4568</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ border: '1px solid #FFFFFF1A', px: 2, py: .5, borderRadius: 1, color: '#fff', transition: '.4s', fontSize: 18, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>impreiousyoga@info.com</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.5}>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: 22, color: 'text.default', }}>Services</Typography>
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Box>
                                        <Typography sx={{ mb: 2, color: '#fff', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>Mindful Practices</Typography>
                                        <Typography sx={{ mb: 2, color: '#fff', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>Restorative Yoga</Typography>
                                        <Typography sx={{ mb: 2, color: '#fff', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>Wellness Journeys</Typography>
                                        <Typography sx={{ color: '#fff', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>Restorative Sessions</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.5}>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: 22, color: 'text.default', }}>Contact</Typography>
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Box>
                                        <Typography sx={{ mb: 2, color: '#fff', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>(0) - 0761-852-398</Typography>
                                        <Typography sx={{ mb: 2, color: '#fff', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>impreiousyoga@info.com</Typography>
                                        <Typography sx={{ mb: 2, color: '#fff', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>123 High Street LN1 1AB</Typography>
                                        <Typography sx={{ color: '#fff', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>United Kingdom</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ borderTop: '1px solid #ffffff1a', mt: 6, pt: 5 }}>
                        <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <Typography sx={{ fontSize: 26, color: 'text.default', }}>Follow on:</Typography>
                            </Box>
                            <Box>
                                <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
                                    <IconButton sx={{ transition: '.4s', border: '1px solid #fff', color: 'text.default', backgroundColor: 'transparent', '&:hover': { borderColor: 'text.main', color: 'text.main' } }}>
                                        <FacebookOutlinedIcon />
                                    </IconButton>
                                    <IconButton sx={{ transition: '.4s', border: '1px solid #fff', color: 'text.default', backgroundColor: 'transparent', '&:hover': { borderColor: 'text.main', color: 'text.main' } }}>
                                        <InstagramIcon />
                                    </IconButton>
                                    <IconButton sx={{ transition: '.4s', border: '1px solid #fff', color: 'text.default', backgroundColor: 'transparent', '&:hover': { borderColor: 'text.main', color: 'text.main' } }}>
                                        <EmailOutlinedIcon />
                                    </IconButton>
                                    <IconButton sx={{ transition: '.4s', border: '1px solid #fff', color: 'text.default', backgroundColor: 'transparent', '&:hover': { borderColor: 'text.main', color: 'text.main' } }}>
                                        <LinkedInIcon />
                                    </IconButton>
                                    <IconButton sx={{ transition: '.4s', border: '1px solid #fff', color: 'text.default', backgroundColor: 'transparent', '&:hover': { borderColor: 'text.main', color: 'text.main' } }}>
                                        <XIcon />
                                    </IconButton>
                                    <IconButton sx={{ transition: '.4s', border: '1px solid #fff', color: 'text.default', backgroundColor: 'transparent', '&:hover': { borderColor: 'text.main', color: 'text.main' } }}>
                                        <WhatsAppIcon />
                                    </IconButton>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ borderTop: '1px solid #ffffff1a', mt: 6, pt: 5 }}>
                        <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box>
                                <Typography sx={{ fontSize: 16, color: 'text.default' }}>Copyright © 2025 All Rights Reserved.</Typography>
                            </Box>
                            <Box>
                                <Stack sx={{ flexDirection: 'row', gap: 1, flexWrap: 'wrap', justifyContent: 'end' }}>
                                    <Box>
                                        <Typography sx={{ color: 'text.default', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>Privacy Policy</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: 'text.default', fontSize: 16 }}>-</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: 'text.default', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>Term’s & Condition</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: 'text.default', fontSize: 16 }}>-</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: 'text.default', transition: '.4s', fontSize: 16, '&:hover': { borderColor: 'text.main', color: 'text.main' }, cursor: 'pointer' }}>Help</Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer