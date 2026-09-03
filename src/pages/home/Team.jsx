import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material"
import headingImg from '../../assets/icon-heading.png'
import teamOne from '../../assets/yoga-24.png'
import teamTwo from '../../assets/yoga-13.png'
import teamThree from '../../assets/yoga-22.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Team = () => {
    return (
        <Box sx={{ backgroundColor: 'background.bglight', py: { xs: 5, md: 10 } }}>
            <Container maxWidth='lg'>
                <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{
                        position: 'relative', color: 'text.main', pl: 3.3, width: 70, mx: 'auto',
                        '&::before': {
                            content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                        }
                    }}>
                        <Typography sx={{ color: "text.main" }}>Our Team</Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' }, mx: 'auto', maxWidth: 550 }}>Meet our experienced yoga and meditation experts</Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: { xs: 5, md: 8 } }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                                <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 1, backgroundColor: 'background.default' }}>
                                    <Box sx={{
                                        height: { xs: 325, md: 375 }, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${teamOne})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                        '&::before': {
                                            content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                        },
                                        '&:hover::before': {
                                            width: '100%',
                                        },
                                    }}
                                    />
                                    <Box sx={{ px: 1, py: 1.5 }}>
                                        <Box>
                                            <Typography sx={{ color: 'text.primary', fontSize: { xs: 20, md: 22 }, lineHeight: { xs: '28px', md: '30px' }, fontWeight: 600 }}> Ellyse Perry</Typography>
                                        </Box>
                                        <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', flexWrap: 'wrap', mt: 1.5 }}>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <FacebookOutlinedIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <InstagramIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <LinkedInIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <WhatsAppIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <EmailOutlinedIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                                <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 1, backgroundColor: 'background.default' }}>
                                    <Box sx={{
                                        height: { xs: 325, md: 375 }, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${teamTwo})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                        '&::before': {
                                            content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                        },
                                        '&:hover::before': {
                                            width: '100%',
                                        },
                                    }}
                                    />
                                    <Box sx={{ px: 1, py: 1.5 }}>
                                        <Box>
                                            <Typography sx={{ color: 'text.primary', fontSize: { xs: 20, md: 22 }, lineHeight: { xs: '28px', md: '30px' }, fontWeight: 600 }}>Annette Black</Typography>
                                        </Box>
                                        <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', flexWrap: 'wrap', mt: 1.5 }}>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <FacebookOutlinedIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <InstagramIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <LinkedInIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <WhatsAppIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <EmailOutlinedIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                                <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 1, backgroundColor: 'background.default' }}>
                                    <Box sx={{
                                        height: { xs: 325, md: 375 }, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${teamThree})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                        '&::before': {
                                            content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                        },
                                        '&:hover::before': {
                                            width: '100%',
                                        },
                                    }}
                                    />
                                    <Box sx={{ px: 1, py: 1.5 }}>
                                        <Box>
                                            <Typography sx={{ color: 'text.primary', fontSize: { xs: 20, md: 22 }, lineHeight: { xs: '28px', md: '30px' }, fontWeight: 600 }}>Robert Fox</Typography>
                                        </Box>
                                        <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', flexWrap: 'wrap', mt: 1.5 }}>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <FacebookOutlinedIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <InstagramIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <LinkedInIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <WhatsAppIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                            <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                <EmailOutlinedIcon sx={{ fontSize: 22 }} />
                                            </IconButton>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Team