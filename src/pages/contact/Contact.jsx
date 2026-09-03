import { Box, Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material"
import Banner from "../../components/Banner"
import Footer from "../footer/Footer"
import BannerImg from '../../assets/yoga-13.png'
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';
import { alertMsg } from "../../utils/basicUtils";
import headingImg from '../../assets/icon-heading.png'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Contact = () => {

    const handleContactDetails = async (values, { resetForm }) => {
        try {
            console.log(values)
            alertMsg('Contact Details Saved Successfully', 'success')
            resetForm()
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <Box>
            <Banner />

            <Box sx={{ backgroundImage: `url(${BannerImg})`, backgroundRepeat: 'no-repeat', height: { xs: 350, sm: 575 }, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 25%)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Container maxWidth='lg'>
                    <Typography sx={{ color: 'text.default', fontSize: { xs: 34, sm: 44, md: 60 }, lineHeight: { xs: '34px', sm: '46px', md: '68px' } }}>Contact Us</Typography>
                    <Typography sx={{ color: 'text.default', fontSize: { xs: 18, sm: 20 }, mt: 1.2, fontStyle: 'italic', lineHeight: { xs: '24px', sm: '26px' } }}>Home / Contact Us</Typography>
                </Container>
            </Box>

            <Box sx={{ backgroundColor: 'background.bgdark', py: { xs: 5, md: 10 } }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Box>
                                    <Box sx={{
                                        position: 'relative', color: 'text.main', pl: 3.3,
                                        '&::before': {
                                            content: '""', position: 'absolute', top: -2, left: 0, width: 18, height: 22, backgroundColor: 'currentColor', WebkitMaskImage: `url(${headingImg})`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url(${headingImg})`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
                                        }
                                    }}>
                                        <Typography sx={{ color: "text.main" }}>Contact Us</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography component={'h2'} sx={{ color: 'text.primary', fontSize: { xs: 30, md: 40 }, lineHeight: { xs: '36px', md: '50px' } }}>Get in touch with us</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ color: 'text.muted', fontSize: 16, lineHeight: '25px' }}>We’re here to support your journey to better health and well-being. Reach out today to ask questions, schedule a consultation.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <Box sx={{ borderRadius: 3, p: { xs: 2, sm: 2.5 }, border: '1px solid #2323231a', '&:hover button': { backgroundColor: 'primary.main' } }}>
                                                    <Stack sx={{ flexDirection: { xs: 'row', md: 'column', lg: 'row' }, gap: 2, alignItems: { xs: 'center', md: 'initial', lg: 'center' }, flexWrap: 'wrap' }}>
                                                        <IconButton sx={{ backgroundColor: 'background.main', color: 'text.default', transition: '.4s', width: 50, height: 50 }}>
                                                            <CallIcon sx={{ fontSize: 30 }} />
                                                        </IconButton>
                                                        <Box>
                                                            <Typography sx={{ fontSize: 20, lineHeight: '28px', color: 'text.primary' }}>Contact Us</Typography>
                                                            <Typography sx={{ fontSize: 14, lineHeight: '20px', color: 'text.muted' }}>+91 761-853-398</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <Box sx={{ borderRadius: 3, p: { xs: 2, sm: 2.5 }, border: '1px solid #2323231a', '&:hover button': { backgroundColor: 'primary.main' } }}>
                                                    <Stack sx={{ flexDirection: { xs: 'row', md: 'column', lg: 'row' }, gap: 2, alignItems: { xs: 'center', md: 'initial', lg: 'center' }, flexWrap: 'wrap' }}>
                                                        <IconButton sx={{ backgroundColor: 'background.main', color: 'text.default', transition: '.4s', width: 50, height: 50 }}>
                                                            <EmailIcon sx={{ fontSize: 30 }} />
                                                        </IconButton>
                                                        <Box>
                                                            <Typography sx={{ fontSize: 20, lineHeight: '28px', color: 'text.primary' }}>Email</Typography>
                                                            <Typography sx={{ fontSize: 14, lineHeight: '20px', color: 'text.muted' }}>impreiousyoga@info.com</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <Box sx={{ borderRadius: 3, p: { xs: 2, sm: 2.5 }, border: '1px solid #2323231a', '&:hover button': { backgroundColor: 'primary.main' } }}>
                                                    <Stack sx={{ flexDirection: { xs: 'row', md: 'column', lg: 'row' }, gap: 2, alignItems: { xs: 'center', md: 'initial', lg: 'center' }, flexWrap: 'wrap' }}>
                                                        <IconButton sx={{ backgroundColor: 'background.main', color: 'text.default', transition: '.4s', width: 50, height: 50 }}>
                                                            <FmdGoodIcon sx={{ fontSize: 30 }} />
                                                        </IconButton>
                                                        <Box>
                                                            <Typography sx={{ fontSize: 20, lineHeight: '28px', color: 'text.primary' }}>Location</Typography>
                                                            <Typography sx={{ fontSize: 14, lineHeight: '20px', color: 'text.muted' }}>123 High Street 123</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <Box sx={{ borderRadius: 3, p: { xs: 2, sm: 2.5 }, border: '1px solid #2323231a', '&:hover button': { backgroundColor: 'primary.main' } }}>
                                                    <Stack sx={{ flexDirection: { xs: 'row', md: 'column', lg: 'row' }, gap: 2, alignItems: { xs: 'center', md: 'initial', lg: 'center' }, flexWrap: 'wrap' }}>
                                                        <IconButton sx={{ backgroundColor: 'background.main', color: 'text.default', transition: '.4s', width: 50, height: 50 }}>
                                                            <WatchLaterIcon sx={{ fontSize: 30 }} />
                                                        </IconButton>
                                                        <Box>
                                                            <Typography sx={{ fontSize: 20, lineHeight: '28px', color: 'text.primary' }}>Open</Typography>
                                                            <Typography sx={{ fontSize: 14, lineHeight: '20px', color: 'text.muted' }}>Mon-Sat(09 - 21:00)</Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Box sx={{ overflow: 'hidden', borderRadius: 3, px: { xs: 2, sm: 3 }, py: { xs: 2, sm: 4 }, backgroundColor: 'background.default', border: '1px solid #2323231a', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}>
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: 26, sm: 36 }, lineHeight: { xs: '30px', sm: '42px' } }}>Send us a Message</Typography>
                                    </Box>
                                    <Box sx={{ mt: { xs: 2.5, sm: 4 } }}>
                                        <Formik
                                            initialValues={{
                                                "first_name": "",
                                                "last_name": "",
                                                "email": "",
                                                "phone_number": "",
                                                "message": "",
                                            }}
                                            onSubmit={handleContactDetails}
                                            validationSchema={
                                                Yup.object({
                                                    first_name: Yup.string()
                                                        .required('First Name is required'),
                                                    last_name: Yup.string()
                                                        .required('Last Name is required'),
                                                    email: Yup.string()
                                                        .email('Invalid email address')
                                                        .required('Email is required'),
                                                    phone_number: Yup.string()
                                                        .required('Phone Number is required'),
                                                    message: Yup.string()
                                                        .required('Message is required'),
                                                })
                                            }>
                                            {({ isSubmitting }) => (
                                                <Form>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <Box>
                                                            <Grid container spacing={2}>
                                                                <Grid item xs={12} md={6}>
                                                                    <Box>
                                                                        <Field
                                                                            component={TextField}
                                                                            name="first_name"
                                                                            label="First Name"
                                                                            inputProps={{ maxLength: 35 }}
                                                                            fullWidth />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={12} md={6}>
                                                                    <Box>
                                                                        <Field
                                                                            component={TextField}
                                                                            name="last_name"
                                                                            label="Last Name"
                                                                            inputProps={{ maxLength: 35 }}
                                                                            fullWidth />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={12} md={6}>
                                                                    <Box>
                                                                        <Field
                                                                            component={TextField}
                                                                            name="email"
                                                                            label="Email"
                                                                            inputProps={{ maxLength: 35 }}
                                                                            fullWidth />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={12} md={6}>
                                                                    <Box>
                                                                        <Field
                                                                            component={TextField}
                                                                            name="phone_number"
                                                                            label="Phone Number"
                                                                            inputProps={{ maxLength: 35 }}
                                                                            fullWidth />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Box>
                                                                        <Field
                                                                            component={TextField}
                                                                            name="message"
                                                                            label="Message"
                                                                            multiline
                                                                            rows={3}
                                                                            inputProps={{ maxLength: 35 }}
                                                                            fullWidth />
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                        <Box sx={{ mt: 3 }}>
                                                            <Button type="submit" size='medium' disabled={isSubmitting} variant="contained">Book An Appointment</Button>
                                                        </Box>
                                                    </Box>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ height: 500 }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464675033186!2d-0.12209412301641283!3d51.503189711010386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1753964814593!5m2!1sen!2sin" style={{ width: "100%", height: '100%', border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>

            <Footer />
        </Box>
    )
}

export default Contact