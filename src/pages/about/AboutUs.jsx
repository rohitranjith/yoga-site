import { Box, Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material"
import Banner from "../../components/Banner"
import BannerImg from '../../assets/yoga-13.png'
import Team from "../home/Team"
import Testimonial from "../home/Testimonial"
import Footer from "../footer/Footer"
import About from "../home/About"
import headingImg from '../../assets/icon-heading.png'
import { useState } from "react"
import aboutOne from '../../assets/yoga-7.png'
import aboutTwo from '../../assets/yoga-8.png'
import whyChoose from '../../assets/yoga-19.png'
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import { useNavigate } from "react-router-dom"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const AboutUs = () => {

    const [approachList, selApproachList] = useState(ourApproach)
    const navigate = useNavigate()

    return (
        <Box>
            <Banner />

            <Box sx={{ backgroundImage: `url(${BannerImg})`, backgroundRepeat: 'no-repeat', height: { xs: 350, sm: 575 }, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 25%)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Container maxWidth='lg'>
                    <Typography sx={{ color: 'text.default', fontSize: { xs: 34, sm: 44, md: 60 }, lineHeight: { xs: '34px', sm: '46px', md: '68px' } }}>About Us</Typography>
                    <Typography sx={{ color: 'text.default', fontSize: { xs: 18, sm: 20 }, mt: 1.2, fontStyle: 'italic', lineHeight: { xs: '24px', sm: '26px' } }}>Home / Services </Typography>
                </Container>
            </Box>

            <About />

            <Box sx={{ backgroundColor: 'background.bglight', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Box sx={{
                                    position: 'relative', color: 'text.main', pl: 3.3,
                                    '&::before': {
                                        content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                    }
                                }}>
                                    <Typography sx={{ color: "text.main" }}>Our Approach</Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' }, maxWidth: { xs: 1, md: 500 } }}>Transforming lives through mindful practices</Typography>
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Box sx={{ overflow: 'hidden', borderRadius: 4, p: 4.5, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}>
                                        {
                                            approachList.map((approach, index) => (
                                                <Box key={index} sx={{ "&:not(:last-of-type)": { borderBottom: '1px solid #ededed', pb: 4 }, "&:not(:first-of-type)": { pt: 3, }, }}>
                                                    <Box>
                                                        <Typography sx={{ fontSize: 24, lineHeight: '26px', color: 'text.primary' }}>{approach.title}</Typography>
                                                    </Box>
                                                    <Box sx={{ mt: 2 }}>
                                                        <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '20px', fontWeight: 400 }}>{approach.description}</Typography>
                                                    </Box>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <Box>
                                    <Box sx={{
                                        display: { xs: 'none', sm: 'block' },
                                        width: { xs: 350, md: 400 }, height: { xs: 350, md: 650 }, overflow: 'hidden', position: 'relative', borderRadius: 500, backgroundImage: `url(${aboutOne})`, backgroundSize: 'cover', backgroundPosition: 'center'
                                    }}
                                    />
                                </Box>
                                <Box sx={{ backgroundColor: 'background.bglight', p: { xs: 0, sm: 1 }, position: { xs: 'initial', sm: 'absolute' }, bottom: 0, right: 0, width: { xs: "100%", sm: 325 }, height: { xs: 350, md: 450 }, borderRadius: 100, }}>
                                    <Box sx={{
                                        width: 1, height: 1, overflow: 'hidden', position: 'relative', borderRadius: 100, backgroundImage: `url(${aboutTwo})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                        '&::before': {
                                            content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                        },
                                        '&:hover::before': {
                                            width: '100%',
                                        },
                                    }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: 'background.bgdark', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Box>
                        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Box sx={{
                                        position: 'relative', color: 'text.main', pl: 3.3,
                                        '&::before': {
                                            content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                        }
                                    }}>
                                        <Typography sx={{ color: "text.main" }}>Why Choose Us</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' }, maxWidth: 500 }}>Experience excellence in yoga and meditation</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '28px' }}>Join us to experience expert-guided yoga and meditation practices designed to enhance your physical health, mental clarity, and overall well-being.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ mt: { xs: 5, md: 8 } }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Box sx={{ backgroundImage: `url(${whyChoose})`, backgroundRepeat: 'no-repeat', height: 328, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 1.5 }} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Box sx={{ borderRadius: 3, p: { xs: 2, sm: 3 }, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)', position: 'relative', '&:before': { content: "''", bottom: 0, left: 0, width: 1, height: 0, backgroundColor: 'background.main', position: 'absolute', transition: '.4s', borderRadius: 3 }, '&:hover:before': { height: 1 }, "&:hover p,&:hover button.view": { color: 'text.default' } }}>
                                        <Box>
                                            <IconButton sx={{ backgroundColor: 'text.default', color: "text.main", width: 60, height: 60, borderRadius: 30, border: '1px solid', borderColor: 'text.main', "&:hover": { backgroundColor: 'text.default' } }} >
                                                <SelfImprovementOutlinedIcon sx={{ fontSize: 35 }} />
                                            </IconButton>
                                        </Box>
                                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                                            <Box sx={{ mt: 3 }}>
                                                <Typography sx={{ fontWeight: 500, color: 'text.primary', fontSize: { xs: 20, md: 22 }, lineHeight: { xs: '28px', md: '30px' } }}>Yoga For Balance</Typography>
                                            </Box>
                                            <Box sx={{ mt: 1.5 }}>
                                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '24px' }}>Achieve harmony of body and spirit through gent practices designed to enhance physical stability, mental clarity.</Typography>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Button className="view" color="secondary" size="large" variant="text" endIcon={<ArrowForwardOutlinedIcon />} onClick={() => { navigate("/contact") }}>View All Post</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Box sx={{ borderRadius: 3, p: { xs: 2, sm: 3 }, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)', position: 'relative', '&:before': { content: "''", bottom: 0, left: 0, width: 1, height: 0, backgroundColor: 'background.main', position: 'absolute', transition: '.4s', borderRadius: 3 }, '&:hover:before': { height: 1 }, "&:hover p,&:hover button.view": { color: 'text.default' } }}>
                                        <Box>
                                            <IconButton sx={{ backgroundColor: 'text.default', color: "text.main", width: 60, height: 60, borderRadius: 30, border: '1px solid', borderColor: 'text.main', "&:hover": { backgroundColor: 'text.default' } }} >
                                                <SelfImprovementOutlinedIcon sx={{ fontSize: 35 }} />
                                            </IconButton>
                                        </Box>
                                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                                            <Box sx={{ mt: 3 }}>
                                                <Typography sx={{ fontWeight: 500, color: 'text.primary', fontSize: { xs: 20, md: 22 }, lineHeight: { xs: '28px', md: '30px' } }}>Yoga Workshops</Typography>
                                            </Box>
                                            <Box sx={{ mt: 1.5 }}>
                                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '24px' }}>Achieve harmony of body and spirit through gent practices designed to enhance physical stability, mental clarity.</Typography>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Button className="view" color="secondary" size="large" variant="text" endIcon={<ArrowForwardOutlinedIcon />} onClick={() => { navigate("/contact") }}>View All Post</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: '1px solid #ededed', mt: { xs: 5, md: 8 }, pt: { xs: 5, md: 8 } }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Stack sx={{ flexDirection: "row", alignItems: 'center', gap: 1 }}>
                                        <Box sx={{ height: 50 }}>
                                            <WorkspacePremiumOutlinedIcon sx={{ fontSize: 50, color: 'text.main' }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 30, color: 'text.primary', lineHeight: '38px', fontWeight: 600 }}>25+</Typography>
                                            <Typography sx={{ fontSize: 16, color: 'text.muted', lineHeight: '22px' }}>Years of Experience</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Stack sx={{ flexDirection: "row", alignItems: 'center', gap: 1 }}>
                                        <Box sx={{ height: 50 }}>
                                            <GroupsOutlinedIcon sx={{ fontSize: 50, color: 'text.main' }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 30, color: 'text.primary', lineHeight: '38px', fontWeight: 600 }}>150 K+</Typography>
                                            <Typography sx={{ fontSize: 16, color: 'text.muted', lineHeight: '22px' }}>Satisfied Clients</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Stack sx={{ flexDirection: "row", alignItems: 'center', gap: 1 }}>
                                        <Box sx={{ height: 45 }}>
                                            <PublicOutlinedIcon sx={{ fontSize: 45, color: 'text.main' }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 30, color: 'text.primary', lineHeight: '38px', fontWeight: 600 }}>30+</Typography>
                                            <Typography sx={{ fontSize: 16, color: 'text.muted', lineHeight: '22px' }}>Countries Reached</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Box>
                                    <Stack sx={{ flexDirection: "row", alignItems: 'center', gap: 1 }}>
                                        <Box sx={{ height: 50 }}>
                                            <SelfImprovementOutlinedIcon sx={{ fontSize: 50, color: 'text.main' }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 30, color: 'text.primary', lineHeight: '38px', fontWeight: 600 }}>2 K +</Typography>
                                            <Typography sx={{ fontSize: 16, color: 'text.muted', lineHeight: '22px' }}>Classes Conducted</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Team />

            <Testimonial />

            <Footer />

        </Box>
    )
}

export default AboutUs

const ourApproach = [
    {
        title: 'Our Mission',
        description: 'To promote holistic well-being by guiding individuals on journey of self-discovery inner peace throug yoga, meditation.'
    },
    {
        title: 'Our Vision',
        description: 'To promote holistic well-being by guiding individuals on journey of self-discovery inner peace throug yoga, meditation.'
    },
    {
        title: 'Our Goals',
        description: 'To promote holistic well-being by guiding individuals on journey of self-discovery inner peace throug yoga, meditation.'
    },
]