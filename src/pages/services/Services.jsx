import { Box, Button, Chip, Container, Grid, IconButton, Stack, Typography } from "@mui/material"
import Banner from "../../components/Banner"
import BannerImg from '../../assets/yoga-13.png'
import Footer from "../footer/Footer"
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { useState } from "react";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useNavigate } from "react-router-dom";
import Testimonial from "../home/Testimonial";
import Team from "../home/Team";

const servicesLst = [
    {
        id: 1,
        title: "Mindful Practices",
        icon: TableRowsOutlinedIcon,
        description: "Engage in mindful practices that foster inner peace, reduce stress, and enhance focus Our sessions guide you to connect.",
    },
    {
        id: 2,
        title: "Meditation Sessions",
        icon: ScatterPlotOutlinedIcon,
        description: "Receive personalized nutrition guidance to create balanced, sustainable eating habits that support your health.",
    },
    {
        id: 3,
        title: "Restorative Sessions",
        icon: WorkspacesOutlinedIcon,
        description: "Engage in mindful practices that foster inner peace, reduce stress, and enhance focus Our sessions guide you to connect.",
    },
    {
        id: 4,
        title: "Wellness Journeys",
        icon: WidgetsOutlinedIcon,
        description: "Receive personalized nutrition guidance to create balanced, sustainable eating habits that support your health.",
    },
    {
        id: 5,
        title: "Restorative Yoga",
        icon: PublicOutlinedIcon,
        description: "Engage in mindful practices that foster inner peace, reduce stress, and enhance focus Our sessions guide you to connect.",
    },
    {
        id: 6,
        title: "Personalized Yoga Sessions",
        icon: Inventory2OutlinedIcon,
        description: "Receive personalized nutrition guidance to create balanced, sustainable eating habits that support your health.",
    },
];

const Services = () => {

    const [serviceList, setServiceList] = useState(servicesLst)
    const navigate = useNavigate()

    return (
        <Box>
            <Banner />

            <Box sx={{ backgroundImage: `url(${BannerImg})`, backgroundRepeat: 'no-repeat', height: { xs: 350, sm: 575 }, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 25%)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Container maxWidth='lg'>
                    <Typography sx={{ color: 'text.default', fontSize: { xs: 34, sm: 44, md: 60 }, lineHeight: { xs: '34px', sm: '46px', md: '68px' } }}>Services</Typography>
                    <Typography sx={{ color: 'text.default', fontSize: { xs: 18, sm: 20 }, mt: 1.2, fontStyle: 'italic', lineHeight: { xs: '24px', sm: '26px' } }}>Home / Services </Typography>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: 'background.bgdark', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Box>
                        <Grid container spacing={2}>
                            {
                                serviceList.map((service, index) => {
                                    const IconComponent = service.icon;
                                    return (
                                        <Grid key={index} item xs={12} sm={6} lg={4}>
                                            <Box>
                                                <Box sx={{ borderRadius: 3, p: { xs: 2, sm: 4 }, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)', position: 'relative', '&:before': { content: "''", bottom: 0, left: 0, width: 1, height: 0, backgroundColor: 'background.main', position: 'absolute', transition: '.4s', borderRadius: 3 }, '&:hover:before': { height: 1 }, "&:hover p,&:hover button.view": { color: 'text.default' } }}>
                                                    <Box>
                                                        <IconButton sx={{ backgroundColor: 'text.default', color: "text.main", width: 60, height: 60, borderRadius: 30, border: '1px solid', borderColor: 'text.main', "&:hover": { backgroundColor: 'text.default' } }} >
                                                            <IconComponent sx={{ fontSize: 35 }} />
                                                        </IconButton>
                                                    </Box>
                                                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                                                        <Box sx={{ mt: 3 }}>
                                                            <Typography sx={{ fontWeight: 500, color: 'text.primary', fontSize: { xs: 20, md: 22 }, lineHeight: { xs: '28px', md: '30px' } }}>{service.title}</Typography>
                                                        </Box>
                                                        <Box sx={{ mt: 1.5 }}>
                                                            <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '24px' }}>{service.description}</Typography>
                                                        </Box>
                                                        <Box sx={{ mt: 2 }}>
                                                            <Button className="view" color="secondary" size="large" variant="text" endIcon={<ArrowForwardOutlinedIcon />} onClick={() => { navigate("/contact") }}>View All Post</Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                    <Box sx={{ mt: 8 }}>
                        <Stack sx={{ flexDirection: 'row', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <Chip label="Free" color="secondary" sx={{ color: 'text.default', fontWeight: 600, fontSize: 15, letterSpacing: .3 }} />
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '24px' }}>Let’s make something great work together.
                                    <Typography component={'span'} sx={{ pl: .5, color: 'text.main', fontSize: 18, lineHeight: '26px', fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }} onClick={() => { navigate("/contact") }}>Get Free Quote</Typography>
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>

            <Team />

            <Testimonial />

            <Footer />

        </Box>
    )
}

export default Services