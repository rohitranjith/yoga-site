import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material"
import Banner from "../../components/Banner"
import BannerImg from '../../assets/yoga-4.png'
import headingImg from '../../assets/icon-heading.png'
import howitwrkzImg from '../../assets/yoga-20.png'
import whatwedoImg from '../../assets/yoga-8.png'
import featureOne from '../../assets/yoga-7.png'
import featureTwo from '../../assets/yoga-25.png'
import featureThree from '../../assets/yoga-23.png'
import featureFour from '../../assets/yoga-8.png'
import ServiceOne from '../../assets/yoga-img.png'
import ServiceTwo from '../../assets/yoga-img-1.png'
import ServiceThree from '../../assets/yoga-img-2.png'
import blogOne from '../../assets/yoga-4.png'
import blogTwo from '../../assets/yoga-25.png'
import blogThree from '../../assets/yoga-11.png'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Footer from "../footer/Footer"
import Testimonial from "./Testimonial"
import Team from "./Team"
import About from "./About"

const Home = () => {

    return (
        <Box>

            <Banner />

            <Box sx={{ backgroundImage: `url(${BannerImg})`, backgroundRepeat: 'no-repeat', height: 'calc(100vh - 86px)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 15%)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ p: 1.5, maxWidth: 650, marginLeft: 'auto' }}>
                    <Typography sx={{ color: 'text.default', fontSize: { xs: 30, sm: 40, md: 56 }, fontStyle: 'italic', lineHeight: { xs: '34px', sm: '46px', md: '74px' } }}>Breathe deeply, move mindfully, and awaken your true self</Typography>
                </Box>
            </Box>

            <About />

            <Box sx={{ backgroundColor: 'background.bglight', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', gap: 1, alignItems: 'center', display: { xs: 'block', md: 'flex' } }}>
                        <Box>
                            <Box sx={{
                                position: 'relative', color: 'text.main', pl: 3.3,
                                '&::before': {
                                    content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                }
                            }}>
                                <Typography sx={{ color: "text.main" }}>Services</Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' }, maxWidth: { xs: 1, md: 500 } }}>Comprehensive yoga and meditation services</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: { xs: 2, md: 0 }, textAlign: 'right' }}>
                            <Button className="sample" color="secondary" size="large" endIcon={<ArrowForwardOutlinedIcon />}>View All Services</Button>
                        </Box>
                    </Stack>
                    <Box sx={{ mt: 8 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Paper sx={{ p: { xs: 2, md: 3.5 }, borderRadius: 1.5, backgroundColor: 'background.default', boxShadow: 'none' }}>
                                        <Stack sx={{ flexDirection: 'row', gap: 1, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                            <Box sx={{ maxWidth: 70 }}>
                                                <Box component={'img'} src={ServiceOne} sx={{ width: 1, height: 1 }} />
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Box>
                                                    <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '20px', md: '26px' }, maxLines: 1 }}>Stress Relief Sessions</Typography>
                                                </Box>
                                                <Box sx={{ mt: 1.5 }}>
                                                    <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '22px', maxLines: 2 }}>Learn foundational poses and techniques yoga journey.</Typography>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Paper sx={{ p: { xs: 2, md: 3.5 }, borderRadius: 1.5, backgroundColor: 'background.default', boxShadow: 'none' }}>
                                        <Stack sx={{ flexDirection: 'row', gap: 1, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                            <Box sx={{ maxWidth: 70 }}>
                                                <Box component={'img'} src={ServiceThree} sx={{ width: 1, height: 1 }} />
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Box>
                                                    <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '20px', md: '26px' }, maxLines: 1 }}>Mindful Meditation</Typography>
                                                </Box>
                                                <Box sx={{ mt: 1.5 }}>
                                                    <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '22px', maxLines: 2 }}>Learn foundational poses and techniques yoga journey.</Typography>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Paper sx={{ p: { xs: 2, md: 3.5 }, borderRadius: 1.5, backgroundColor: 'background.default', boxShadow: 'none' }}>
                                        <Stack sx={{ flexDirection: 'row', gap: 1, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                            <Box sx={{ maxWidth: 70 }}>
                                                <Box component={'img'} src={ServiceTwo} sx={{ width: 1, height: 1 }} />
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Box>
                                                    <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '20px', md: '26px' }, maxLines: 1 }}>Mental Clarity Meditation</Typography>
                                                </Box>
                                                <Box sx={{ mt: 1.5 }}>
                                                    <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '22px', maxLines: 2 }}>Learn foundational poses and techniques yoga journey.</Typography>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Paper>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: 'background.bgdark', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6.5}>
                            <Box>
                                <Box sx={{
                                    position: 'relative', color: 'text.main', pl: 3.3,
                                    '&::before': {
                                        content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                    }
                                }}>
                                    <Typography sx={{ color: "text.main" }}>How It Works</Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' } }}>Discover our yoga and meditation process</Typography>
                                </Box>
                                <Box sx={{ mt: 4, borderTop: '1px solid #4156491A' }}>
                                    <Box sx={{ pt: 4 }}>
                                        <Stack sx={{ flexDirection: 'row', gap: 2, }}>
                                            <Box>
                                                <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 36 }, lineHeight: { xs: '20px', md: '40px' }, maxLines: 1 }}>01</Typography>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '20px', md: '26px' }, maxLines: 1 }}>Choose Your Yoga Practice</Typography>
                                                </Box>
                                                <Box sx={{ mt: .6 }}>
                                                    <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '22px', maxLines: 2 }}>Foster a sense of belonging with our supportive community your journey, exchange experiences.</Typography>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box sx={{ pt: 4 }}>
                                        <Stack sx={{ flexDirection: 'row', gap: 2, }}>
                                            <Box>
                                                <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 36 }, lineHeight: { xs: '20px', md: '40px' }, maxLines: 1 }}>02</Typography>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '20px', md: '26px' }, maxLines: 1 }}>Schedule Your Yoga Session</Typography>
                                                </Box>
                                                <Box sx={{ mt: .6 }}>
                                                    <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '22px', maxLines: 2 }}>Foster a sense of belonging with our supportive community your journey, exchange experiences.</Typography>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box sx={{ pt: 4 }}>
                                        <Stack sx={{ flexDirection: 'row', gap: 2, }}>
                                            <Box>
                                                <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 36 }, lineHeight: { xs: '20px', md: '40px' }, maxLines: 1 }}>03</Typography>
                                            </Box>
                                            <Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '20px', md: '26px' }, maxLines: 1 }}>Practice Mindfulness Daily</Typography>
                                                </Box>
                                                <Box sx={{ mt: .6 }}>
                                                    <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '22px', maxLines: 2 }}>Foster a sense of belonging with our supportive community your journey, exchange experiences.</Typography>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5.5}>
                            <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 1, backgroundColor: 'background.default' }}>
                                <Box sx={{
                                    height: { xs: 350, md: 550 }, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${howitwrkzImg})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
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
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ backgroundImage: 'linear-gradient(180deg, #26505e 82%, #FFFFFF00 18%)', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Box sx={{
                                    position: 'relative', color: 'text.main', pl: 3.3,
                                    '&::before': {
                                        content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'background.default', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                    }
                                }}>
                                    <Typography sx={{ color: "text.default" }}>What We Do</Typography>
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Typography component={'h2'} sx={{ color: 'text.default', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' } }}>Guiding your journey through yoga & meditation</Typography>
                                </Box>
                                <Box sx={{ mt: 3.5 }}>
                                    <Typography sx={{ color: 'text.default', fontSize: 16, lineHeight: '28px' }}>We provide expert driving instruction, hands-on training, and personalized guidance to help learners of all levels develop safe, responsible, confident driving skills for life.</Typography>
                                </Box>
                                <Box sx={{ mt: 4.5 }}>
                                    <Box sx={{ backgroundColor: 'background.default', py: { xs: 1.5, md: 3 }, px: { xs: 2, md: 4 }, borderRadius: 2, boxShadow: '0px 20px 50px 0px rgba(0, 0, 0, 0.050980392156862744)' }}>
                                        <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', borderBottom: '1px solid #ededed', pt: 2, pb: 3 }}>
                                            <Box sx={{ height: 26 }}>
                                                <CheckCircleIcon sx={{ color: 'primary.dark', fontSize: 26 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '20px' }}>Our Mission Is To Empower Drivers With The Skills.</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', borderBottom: '1px solid #ededed', py: 3 }}>
                                            <Box sx={{ height: 26 }}>
                                                <CheckCircleIcon sx={{ color: 'primary.dark', fontSize: 26 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '20px' }}>Personalized Driving Lessons.</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', borderBottom: '1px solid #ededed', py: 3 }}>
                                            <Box sx={{ height: 26 }}>
                                                <CheckCircleIcon sx={{ color: 'primary.dark', fontSize: 26 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '20px' }}>Certified Professional Instructors.</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', pt: 3, pb: 2 }}>
                                            <Box sx={{ height: 26 }}>
                                                <CheckCircleIcon sx={{ color: 'primary.dark', fontSize: 26 }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '20px' }}>Mock Driving Tests & Evaluations.</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack sx={{ justifyContent: 'space-between' }}>
                                <Box>
                                    <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 1, backgroundColor: 'background.default', }}>
                                        <Box sx={{
                                            height: { xs: 350, md: 500 }, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${whatwedoImg})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
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
                                <Box sx={{ pt: { xs: 2, md: 18, lg: 8 } }}>
                                    <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                        <Box>
                                            <Typography sx={{ color: 'text.primary', fontSize: { xs: 16, md: 18 }, lineHeight: { xs: '20px', md: '24px' } }}>Start Your Journey To Safe, Confident Driving</Typography>
                                        </Box>
                                        <Box>
                                            <Button color="secondary" size="large" endIcon={<ArrowForwardOutlinedIcon />}>Contact Us</Button>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Stack>
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
                                        <Typography sx={{ color: "text.main" }}>Our Features</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' }, maxWidth: 500 }}>Unlock wellness through unique yoga features</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '28px' }}>We provide expert driving instruction, hands-on training, and personalized guidance to help learners of all levels develop safe, responsible, confident driving skills for life.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ mt: { xs: 5, md: 8 } }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ p: 1, backgroundColor: 'background.default', borderRadius: 1.5 }}>
                                    <Box sx={{ backgroundImage: `url(${featureOne})`, backgroundRepeat: 'no-repeat', height: { xs: 300, md: 635 }, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 40%)", display: 'flex', flexDirection: 'column', justifyContent: 'end', borderRadius: 1.5 }}>
                                        <Box sx={{ p: 2 }}>
                                            <Box>
                                                <Typography sx={{ color: 'text.default', fontSize: { xs: 24, md: 30 }, lineHeight: { xs: '30px', md: '36px' } }}>Ashtanga Yoga</Typography>
                                            </Box>
                                            <Box sx={{ mt: .6 }}>
                                                <Typography sx={{ color: 'text.default', fontSize: { xs: 18, md: 22 }, lineHeight: { xs: '24px', md: '28px' } }}>Healing Retreats And Workshops.</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Box sx={{ p: 1, backgroundColor: 'background.default', borderRadius: 1.5 }}>
                                        <Box sx={{ backgroundImage: `url(${featureTwo})`, backgroundRepeat: 'no-repeat', height: 300, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 35%)", display: 'flex', flexDirection: 'column', justifyContent: 'end', borderRadius: 1.5 }}>
                                            <Box sx={{ p: 2 }}>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: { xs: 20, md: 26 }, lineHeight: { xs: '26px', md: '30px' } }}>Ashtanga Yoga</Typography>
                                                </Box>
                                                <Box sx={{ mt: .6 }}>
                                                    <Typography sx={{ color: 'text.default', fontSize: { xs: 16, md: 20 }, lineHeight: { xs: '20px', md: '24px' } }}>Community Support And Yoga Encouragement.</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Stack sx={{ flexDirection: 'row', gap: 2, mt: 2, flexWrap: { xs: 'wrap', md: 'initial' } }}>
                                        <Box sx={{ p: 1, backgroundColor: 'background.default', borderRadius: 1.5, flexGrow: 1 }}>
                                            <Box sx={{ backgroundImage: `url(${featureThree})`, backgroundRepeat: 'no-repeat', height: 300, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 35%)", display: 'flex', flexDirection: 'column', justifyContent: 'end', borderRadius: 1.5 }}>
                                                <Box sx={{ p: 2 }}>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.default', fontSize: { xs: 20, md: 24 }, lineHeight: { xs: '26px', md: '30px' } }}>Ashtanga </Typography>
                                                    </Box>
                                                    <Box sx={{ mt: .6 }}>
                                                        <Typography sx={{ color: 'text.default', fontSize: { xs: 16, md: 18 }, lineHeight: { xs: '20px', md: '22px' } }}>Guided Meditation Sessions.</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ p: 1, backgroundColor: 'background.default', borderRadius: 1.5, flexGrow: 1 }}>
                                            <Box sx={{ backgroundImage: `url(${featureFour})`, backgroundRepeat: 'no-repeat', height: 300, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 35%)", display: 'flex', flexDirection: 'column', justifyContent: 'end', borderRadius: 1.5 }}>
                                                <Box sx={{ p: 2 }}>
                                                    <Box>
                                                        <Typography sx={{ color: 'text.default', fontSize: { xs: 20, md: 24 }, lineHeight: { xs: '26px', md: '30px' } }}>Ashtanga </Typography>
                                                    </Box>
                                                    <Box sx={{ mt: .6 }}>
                                                        <Typography sx={{ color: 'text.default', fontSize: { xs: 16, md: 18 }, lineHeight: { xs: '20px', md: '22px' } }}>Stress-Relief Programs.</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: 'background.primary', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            position: 'relative', color: 'text.default', pl: 3.3, width: 80, mx: 'auto',
                            '&::before': {
                                content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                            }
                        }}>
                            <Typography sx={{ color: "text.default" }}>Pricing Plan</Typography>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Typography component={'h2'} sx={{ color: 'text.default', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' }, mx: 'auto', maxWidth: 550 }}>Affordable plans for every wellness journey</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Box sx={{ p: 3, borderRadius: 1.5, backgroundColor: 'background.glass' }}>
                                        <Box>
                                            <Typography sx={{ color: 'text.default', fontSize: { xs: 18, md: 20 }, lineHeight: { xs: '26px', md: '28px' } }}>Single Class Rate</Typography>
                                            <Typography sx={{ mt: 1.5, fontWeight: 400, color: 'text.default', fontSize: { xs: 14, md: 16 }, lineHeight: { xs: '20px', md: '22px' } }}>Unlimited access to all classes & meditation</Typography>
                                            <Typography sx={{ mt: 3, color: 'text.default', fontSize: { xs: 18, md: 26 }, lineHeight: { xs: '26px', md: '34px' } }}>$ 29 /month</Typography>
                                        </Box>
                                        <Box sx={{ p: 2, borderRadius: 1.5, backgroundColor: 'background.glass', mt: 3.5 }}>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center' }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Unlimited Class Access</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Workshops and Special Events</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Guided Meditation Sessions</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Access to Online Classes</Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Box sx={{ mt: 4 }}>
                                            <Button color="secondary" size="large" fullWidth endIcon={<ArrowForwardOutlinedIcon />}>Get Started</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Box sx={{ p: 3, borderRadius: 1.5, backgroundColor: 'background.main' }}>
                                        <Box>
                                            <Typography sx={{ color: 'text.default', fontSize: { xs: 18, md: 20 }, lineHeight: { xs: '26px', md: '28px' } }}>Single Class Rate</Typography>
                                            <Typography sx={{ mt: 1.5, fontWeight: 400, color: 'text.default', fontSize: { xs: 14, md: 16 }, lineHeight: { xs: '20px', md: '22px' } }}>Unlimited access to all classes & meditation</Typography>
                                            <Typography sx={{ mt: 3, color: 'text.default', fontSize: { xs: 18, md: 26 }, lineHeight: { xs: '26px', md: '34px' } }}>$ 59 /month</Typography>
                                        </Box>
                                        <Box sx={{ p: 2, borderRadius: 1.5, backgroundColor: 'background.glass', mt: 3.5 }}>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center' }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Unlimited Class Access</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Workshops and Special Events</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Guided Meditation Sessions</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Access to Online Classes</Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Box sx={{ mt: 4 }}>
                                            <Button color="secondary" size="large" sx={{ backgroundColor: 'background.default', color: 'text.main' }} fullWidth endIcon={<ArrowForwardOutlinedIcon />}>Get Started</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Box sx={{ p: 3, borderRadius: 1.5, backgroundColor: 'background.glass' }}>
                                        <Box>
                                            <Typography sx={{ color: 'text.default', fontSize: { xs: 18, md: 20 }, lineHeight: { xs: '26px', md: '28px' } }}>Single Class Rate</Typography>
                                            <Typography sx={{ mt: 1.5, fontWeight: 400, color: 'text.default', fontSize: { xs: 14, md: 16 }, lineHeight: { xs: '20px', md: '22px' } }}>Unlimited access to all classes & meditation</Typography>
                                            <Typography sx={{ mt: 3, color: 'text.default', fontSize: { xs: 18, md: 26 }, lineHeight: { xs: '26px', md: '34px' } }}>$ 69 /month</Typography>
                                        </Box>
                                        <Box sx={{ p: 2, borderRadius: 1.5, backgroundColor: 'background.glass', mt: 3.5 }}>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center' }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Unlimited Class Access</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Workshops and Special Events</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Guided Meditation Sessions</Typography>
                                                </Box>
                                            </Stack>
                                            <Stack sx={{ flexDirection: 'row', gap: 1.5, alignItems: 'center', mt: 2 }}>
                                                <Box sx={{ height: 22 }}>
                                                    <CheckCircleIcon sx={{ color: 'text.default', fontSize: 22 }} />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: 'text.default', fontSize: 15, lineHeight: '20px' }}>Access to Online Classes</Typography>
                                                </Box>
                                            </Stack>
                                        </Box>
                                        <Box sx={{ mt: 4 }}>
                                            <Button color="secondary" size="large" fullWidth endIcon={<ArrowForwardOutlinedIcon />}>Get Started</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: 'background.bgdark', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, alignItems: 'center', display: { xs: 'block', md: 'flex' } }}>
                        <Box>
                            <Box sx={{
                                position: 'relative', color: 'text.main', pl: 3.3,
                                '&::before': {
                                    content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                }
                            }}>
                                <Typography sx={{ color: "text.main" }}>Our Latest Blog</Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' }, maxWidth: { xs: 1, md: 500 } }}>Explore our latest yoga and meditation insights</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: { xs: 2, md: 0 }, textAlign: 'right' }}>
                            <Button className="sample" color="secondary" size="large" endIcon={<ArrowForwardOutlinedIcon />}>View All Post</Button>
                        </Box>
                    </Stack>
                    <Box sx={{ mt: { xs: 5, md: 8 } }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 2, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}>
                                        <Box>
                                            <Box sx={{
                                                height: 225, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${blogOne})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                                '&::before': {
                                                    content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                                },
                                                '&:hover::before': {
                                                    width: '100%',
                                                },
                                            }}
                                            />
                                            <Box sx={{ mt: 1.5 }}>
                                                <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 20 }, lineHeight: { xs: '26px', md: '28px' }, fontWeight: 600 }}> How Meditation Improves Your Emotional Well-Being</Typography>
                                            </Box>
                                            <Box sx={{ mt: 1.5 }}>
                                                <Button color="secondary" size="large" variant="text" endIcon={<ArrowForwardOutlinedIcon />}>View All Post</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 2, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}>
                                        <Box>
                                            <Box sx={{
                                                height: 225, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${blogTwo})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                                '&::before': {
                                                    content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                                },
                                                '&:hover::before': {
                                                    width: '100%',
                                                },
                                            }}
                                            />
                                            <Box sx={{ mt: 1.5 }}>
                                                <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 20 }, lineHeight: { xs: '26px', md: '28px' }, fontWeight: 600 }}> Building a Consistent Yoga and Meditation Practice</Typography>
                                            </Box>
                                            <Box sx={{ mt: 1.5 }}>
                                                <Button color="secondary" size="large" variant="text" endIcon={<ArrowForwardOutlinedIcon />}>View All Post</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <Box sx={{ overflow: 'hidden', borderRadius: 1.5, p: 2, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}>
                                        <Box>
                                            <Box sx={{
                                                height: 225, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${blogThree})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                                '&::before': {
                                                    content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                                },
                                                '&:hover::before': {
                                                    width: '100%',
                                                },
                                            }}
                                            />
                                            <Box sx={{ mt: 1.5 }}>
                                                <Typography sx={{ color: 'text.primary', fontSize: { xs: 18, md: 20 }, lineHeight: { xs: '26px', md: '28px' }, fontWeight: 600 }}> Yoga and Meditation: A Holistic Approach to Health</Typography>
                                            </Box>
                                            <Box sx={{ mt: 1.5 }}>
                                                <Button color="secondary" size="large" variant="text" endIcon={<ArrowForwardOutlinedIcon />}>View All Post</Button>
                                            </Box>
                                        </Box>
                                    </Box>
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

export default Home
