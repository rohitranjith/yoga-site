import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material"
import headingImg from '../../assets/icon-heading.png'
import aboutImg from '../../assets/yoga-26.png'
import clientOne from '../../assets/yoga-11.png'
import clientTwo from '../../assets/yoga-22.png'
import clientThree from '../../assets/yoga-25.png'
import StarIcon from '@mui/icons-material/Star';

const Testimonial = () => {
    return (
        <Box sx={{ backgroundColor: 'background.bgdark', py: { xs: 5, md: 10 } }}>
            <Container maxWidth='lg'>
                <Grid container spacing={{ xs: 2, md: 4 }}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box sx={{
                                display: { xs: 'none', md: 'block' },
                                height: { xs: 350, md: 418 }, overflow: 'hidden', position: 'relative', borderRadius: 1.5, backgroundImage: `url(${aboutImg})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.4s',
                                '&::before': {
                                    content: '""', position: 'absolute', height: '100%', width: 0, left: 0, right: 0, margin: 'auto', opacity: 0.9, backgroundColor: 'hsla(0, 0%, 100%, 0.3)', zIndex: 1, transition: 'all 0.4s', overflow: 'hidden',
                                },
                                '&:hover::before': {
                                    width: '100%',
                                },
                            }} />
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                <Box sx={{
                                    position: 'relative', color: 'text.main', pl: 3.3,
                                    '&::before': {
                                        content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                    }
                                }}>
                                    <Typography sx={{ color: "text.main" }}>Testimonials</Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' } }}>Real stories transformation and growth</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Box sx={{ overflow: 'hidden', borderRadius: 4, p: 3, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}>
                                    <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <Box>
                                            <Avatar src={clientThree} sx={{ width: 60, height: 60 }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 20, lineHeight: '26px', }}>Arlene McCoy</Typography>
                                            <Typography sx={{ fontSize: 16, lineHeight: '22px', color: 'text.muted' }}>Yoga Instructor</Typography>
                                        </Box>
                                    </Stack>
                                    <Box sx={{ mt: 2.5 }}>
                                        <Typography sx={{ fontSize: 16, lineHeight: '26px', color: 'text.muted' }}>“Joining this yoga and meditation program was life-changing. I feel more balanced, focused, and at peace than ever before The instructors are knowledgeable, patient, and truly inspiring.”</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Stack sx={{ flexDirection: 'row', gap: .5 }}>
                                            {
                                                [...Array(5)].map((index) => (
                                                    <StarIcon sx={{ color: 'text.main' }} key={index} />
                                                ))
                                            }
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Box sx={{
                                    position: 'relative', color: 'text.main', pl: 3.3,
                                    '&::before': {
                                        content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                    }
                                }}>
                                    <Typography sx={{ color: "text.main" }}>Testimonials</Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' } }}>Real stories transformation and growth</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ mt: { xs: 0, md: 4 } }}>
                                <Box sx={{ overflow: 'hidden', borderRadius: 4, p: 3, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}>
                                    <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <Box>
                                            <Avatar src={clientOne} sx={{ width: 60, height: 60 }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 20, lineHeight: '26px', }}>Sarah Miller</Typography>
                                            <Typography sx={{ fontSize: 16, lineHeight: '22px', color: 'text.muted' }}>Founder & Lead Yoga Instructor</Typography>
                                        </Box>
                                    </Stack>
                                    <Box sx={{ mt: 2.5 }}>
                                        <Typography sx={{ fontSize: 16, lineHeight: '26px', color: 'text.muted' }}>“Joining this yoga and meditation program was life-changing. I feel more balanced, focused, and at peace than ever before The instructors are knowledgeable, patient, and truly inspiring.”</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Stack sx={{ flexDirection: 'row', gap: .5 }}>
                                            {
                                                [...Array(5)].map((index) => (
                                                    <StarIcon sx={{ color: 'text.main' }} key={index} />
                                                ))
                                            }
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ mt: { xs: 2, md: 3 } }}>
                                <Box sx={{ overflow: 'hidden', borderRadius: 4, p: 3, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}>
                                    <Stack sx={{ flexDirection: 'row', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                                        <Box>
                                            <Avatar src={clientTwo} sx={{ width: 60, height: 60 }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: 20, lineHeight: '26px', }}>Michael Carter</Typography>
                                            <Typography sx={{ fontSize: 16, lineHeight: '22px', color: 'text.muted' }}>Lead Yoga Instructor</Typography>
                                        </Box>
                                    </Stack>
                                    <Box sx={{ mt: 2.5 }}>
                                        <Typography sx={{ fontSize: 16, lineHeight: '26px', color: 'text.muted' }}>“Joining this yoga and meditation program was life-changing. I feel more balanced, focused, and at peace than ever before The instructors are knowledgeable, patient, and truly inspiring.”</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Stack sx={{ flexDirection: 'row', gap: .5 }}>
                                            {
                                                [...Array(5)].map((index) => (
                                                    <StarIcon sx={{ color: 'text.main' }} key={index} />
                                                ))
                                            }
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Testimonial