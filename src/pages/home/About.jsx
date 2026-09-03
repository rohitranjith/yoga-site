import { Box, Button, Container, Grid, Typography } from "@mui/material"
import headingImg from '../../assets/icon-heading.png'
import aboutImg from '../../assets/yoga-26.png'
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const About = () => {
    return (
        <Box sx={{ backgroundColor: 'background.bgdark', py: { xs: 5, md: 10 } }}>
            <Container maxWidth='lg'>
                <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={5.5}>
                        <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 1, backgroundColor: 'background.default' }}>
                            <Box sx={{
                                height: { xs: 350, md: 550 }, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${aboutImg})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                '&::before': {
                                    content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                },
                                '&:hover::before': {
                                    width: '100%',
                                },
                            }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6.5}>
                        <Box>
                            <Box sx={{
                                position: 'relative', color: 'text.main', pl: 3.3,
                                '&::before': {
                                    content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                }
                            }}>
                                <Typography sx={{ color: "text.main" }}>About Us</Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' } }}>Nurturing growth, healing, and inner strength</Typography>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '25px' }}>We are committed to eco-friendly farming practices that nurture the soil, conserve resources, and produce healthy, organic food for a better.</Typography>
                            </Box>
                            <Box sx={{ mt: 3.5 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: { xs: 'wrap', sm: 'initial', md: 'wrap', lg: 'initial' } }}>
                                    <Box sx={{ backgroundColor: 'background.primary', px: { xs: 1.5, sm: 1.8 }, py: { xs: 1.5, md: 2.5 }, borderRadius: 1.5, flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
                                            <TableRestaurantOutlinedIcon sx={{ color: 'text.main', fontSize: { xs: 32, md: 45 } }} />
                                            <Typography sx={{ color: 'text.default', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '20px', md: '26px' } }}>Guided Meditation Sessions</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ backgroundColor: 'background.primary', px: { xs: 1.5, sm: 1.8 }, py: { xs: 1.5, md: 2.5 }, borderRadius: 1.5, flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
                                            <TableRowsOutlinedIcon sx={{ color: 'text.main', fontSize: { xs: 32, md: 45 } }} />
                                            <Typography sx={{ color: 'text.default', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '20px', md: '26px' } }}>Sustainable Farming Practices</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 3.5 }}>
                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '25px' }}>Sustainable farming embraces eco-friendly practices that nurture the land, conserve natural resources, and promote biodiversity by using organic methods.</Typography>
                            </Box>
                            <Box sx={{ mt: 3.5 }}>
                                <Button size="large" endIcon={<ArrowForwardOutlinedIcon />}>More About Us</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About