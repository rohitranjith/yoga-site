import { Box, Button, Paper, Typography, Container, Divider, Grid, InputAdornment, IconButton, CircularProgress, Stack } from '@mui/material'
import { useState } from 'react'
import bgImage from '../../assets/login-2.jpg'
import Logo from '../../assets/logo.png'
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';
import { alertMsg } from '../../utils/basicUtils'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ModalBox from '../../components/ModalBox';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ImageOne from '../../assets/yoga-5.png'
import ImageTwo from '../../assets/yoga-7.png'
import ImageThree from '../../assets/yoga-26.png'
import ImageFour from '../../assets/yoga-27.png'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [isForgetPassword, setIsForgetPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const [isSignin, setIsSignin] = useState(true);
    const [sliderList, setSliderList] = useState(yogaDetails)


    const handleSignIn = async () => {
        try {
            alertMsg('Account Login Successfully', 'success')
            navigate('/dashboard')
        }

        catch (err) {
            console.error(err)
        }
    }

    const handleSignUp = async () => {
        try {
            alertMsg('Account Created Succesfully', 'success')
            setOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    const forgotPassword = async () => {
        try {
            alertMsg('Forget Password Updated', 'success')
            setIsForgetPassword(false)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <Box>
            <Box sx={{ minHeight: "100vh", maxHeight: '100vh', display: "flex", alignItems: "center", backgroundImage: 'linear-gradient(45deg, #fff3e8, #e8f9ff)' }}>
                <Container maxWidth="lg">
                    <Paper sx={{ p: 2, minHeight: { xs: 'auto', sm: '75vh' }, boxShadow: 'none', }}>
                        <Grid container spacing={3} sx={{ alignItems: "center", }}>
                            <Grid item xs={12} md={6.5} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Box>
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        spaceBetween={15}
                                        loop={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        breakpoints={{
                                            1400: {
                                                slidesPerView: 1,
                                            },
                                        }}>
                                        {
                                            sliderList.map((slider, index) => (
                                                <SwiperSlide key={index}>
                                                    <Box sx={{ backgroundImage: `url(${slider.image})`, backgroundRepeat: 'no-repeat', height: { xs: 'auto', sm: '75vh' }, backgroundSize: 'cover', position: 'relative', borderRadius: 1.5, backgroundPosition: 'center', boxShadow: "inset 0 0 0 2000px rgb(0 0 0 / 35%)", display: 'flex', flexDirection: 'column', justifyContent: 'end' }}>
                                                        <Box sx={{ p: 2 }}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: { xs: 22, sm: 28, md: 30 }, fontWeight: 700, lineHeight: '34px', color: 'text.default' }}>{slider.name}</Typography>
                                                            </Box>
                                                            <Box sx={{ mt: 1 }}>
                                                                <Typography sx={{ color: 'text.default' }}>{slider.description}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5.5}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box onClick={() => { navigate('/') }} sx={{ cursor: 'pointer' }}>
                                        <Box component={'img'} src={Logo} sx={{ maxWidth: 270 }} alt="" />
                                    </Box>
                                    <Box sx={{ mt: .5 }}>
                                        <Typography sx={{ fontSize: { xs: "1.7rem", sm: "1.6rem", }, color: 'text.title' }}>Sign In to Your Yoga Journey</Typography>
                                    </Box>
                                    <Box sx={{ mt: 1 }}>
                                        <Typography sx={{ fontSize: 15, lineHeight: '22px', color: 'grey', }}>Access personalized sessions, manage your wellness, and stay connected to your practice.</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: 3, width: { xs: '100%', md: '80%' }, mx: 'auto' }}>
                                    <Formik
                                        initialValues={{
                                            "email_or_username": "",
                                            "password": "",
                                        }}
                                        onSubmit={handleSignIn}
                                        validationSchema={
                                            Yup.object({
                                                email_or_username: Yup.string()
                                                    .required('Username/Email is required'),
                                                password: Yup.string()
                                                    .required('Password is required')
                                                    .min(6, "Must be at least 6 characters")
                                                    .max(100, "Password maximum 100 characters only Allowed"),
                                            })
                                        }>
                                        {({ isSubmitting, values }) => (
                                            <Form>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Box>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} >
                                                                <Box>
                                                                    <Field
                                                                        component={TextField}
                                                                        name="email_or_username"
                                                                        label="Email / Username"
                                                                        autoComplete="off"
                                                                        inputProps={{ maxLength: 35 }}
                                                                        fullWidth />
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Box>
                                                                    <Field
                                                                        component={TextField}
                                                                        fullWidth
                                                                        type={showPassword ? "text" : "password"}
                                                                        label="Password"
                                                                        name="password"
                                                                        value={values.password || ''}
                                                                        InputProps={{
                                                                            endAdornment: (
                                                                                <InputAdornment position="end">
                                                                                    <IconButton
                                                                                        onClick={handleClickShowPassword}
                                                                                        onMouseDown={handleMouseDownPassword}
                                                                                        edge="end"
                                                                                        sx={{ mr: .5 }}>
                                                                                        {showPassword ? (
                                                                                            <VisibilityOutlinedIcon sx={{ fontSize: 20 }} />
                                                                                        ) : (
                                                                                            <VisibilityOffOutlinedIcon sx={{ fontSize: 20 }} />
                                                                                        )}
                                                                                    </IconButton>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }} />
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        <Box sx={{ textAlign: 'right', mt: .6, cursor: 'pointer' }} onClick={() => { setIsForgetPassword(true) }}>
                                                            <Typography>Forgot Password?</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                                                        <Button type="submit" size='medium' disabled={isSubmitting} variant="contained">Join In</Button>
                                                    </Box>
                                                </Box>
                                            </Form>
                                        )}
                                    </Formik>
                                    <Box>
                                        <Divider sx={{ my: 4, color: 'text.muted' }}>Continue with</Divider>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, }}>
                                            <Box>
                                                <Button size='medium' variant='outlined' color='warning' startIcon={<GoogleIcon />}>Google</Button>
                                            </Box>
                                            <Box>
                                                <Button size='medium' variant='outlined' color='info' startIcon={<FacebookOutlinedIcon />}>Facebook</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="body1" sx={{ mt: 4, textAlign: "center", "& span": { cursor: "pointer", color: 'primary.main' }, color: 'text.title' }}>Don't have an account? <Typography onClick={() => (setOpen(true), setIsSignin(false))} sx={{ textDecoration: 'underline' }} component={'span'}>Sign up</Typography></Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
            <ModalBox
                open={open}
                title={'Sign Up'}
                closeBtn
                icon={<LoginOutlinedIcon color='primary' sx={{ fontSize: 20 }} />}
                onClose={() => setOpen(false)}
                sx={{ maxWidth: { xs: '100%', sm: "525px" }, width: '100%', borderRadius: 2, }}>
                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box onClick={() => { navigate('/') }} sx={{ cursor: 'pointer' }}>
                            <Box component={'img'} src={Logo} sx={{ maxWidth: 270 }} alt="" />
                            {/* <Box onClick={() => { navigate('/') }} component={'img'} src={Logo} sx={{ cursor: 'pointer', maxWidth: 270 }} alt="" /> */}
                        </Box>
                        {/* <Box>
                            <Typography sx={{ fontSize: { xs: "1.8rem", sm: "2rem", }, fontWeight: 600, color: 'primary.main' }}>Borcelle Technology</Typography>
                        </Box> */}
                        <Box sx={{ mt: .5 }}>
                            <Typography sx={{ fontSize: { xs: "1.7rem", sm: "1.6rem", }, color: 'text.title' }}>Join the Journey</Typography>
                        </Box>
                        <Box sx={{ mt: .5 }}>
                            <Typography sx={{ fontSize: { xs: 14, sm: 15 }, lineHeight: '22px', color: 'grey' }}>Sign up to explore exclusive sessions, effortless access, and experiences crafted for your well-being.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 4, }}>
                        <Formik
                            initialValues={{
                                "username": "",
                                "password": "",
                                "name": "",
                            }}
                            onSubmit={handleSignUp}
                            validationSchema={
                                Yup.object({
                                    username: Yup.string()
                                        .required('Name is required')
                                        .matches(/^[a-zA-Z\s]+$/, 'Name cannot contain special character and numbers')
                                        .min(3, 'Name must be at least 3 characters')
                                        .max(50, 'Name cannot exceed 50 characters'),
                                    email: Yup.string()
                                        .email('Invalid email address')
                                        .required('Email is required'),
                                    password: Yup.string()
                                        .required('Password is required')
                                        .min(6, "Must be at least 6 characters")
                                        .max(100, "Password maximum 100 characters only Allowed"),
                                })
                            }>
                            {({ isSubmitting, values }) => (
                                <Form>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Box>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} >
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            name="username"
                                                            value={values.username || ''}
                                                            label="Name"
                                                            fullWidth />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} >
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            type="email"
                                                            name="email"
                                                            value={values.email || ''}
                                                            label="Email"
                                                            fullWidth />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            fullWidth
                                                            type={showPassword ? "text" : "password"}
                                                            label="Password"
                                                            name="password"
                                                            value={values.password || ''}
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            onClick={handleClickShowPassword}
                                                                            onMouseDown={handleMouseDownPassword}
                                                                            edge="end"
                                                                            sx={{ mr: .5 }}>
                                                                            {showPassword ? (
                                                                                <VisibilityOutlinedIcon sx={{ fontSize: 20 }} />
                                                                            ) : (
                                                                                <VisibilityOffOutlinedIcon sx={{ fontSize: 20 }} />
                                                                            )}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                ),
                                                            }} />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                                                <Box>
                                                    <Button onClick={() => { setOpen(false) }} color='error' size='medium' variant="outlined">Cancel</Button>
                                                </Box>
                                                <Box>
                                                    <Button type="submit" size='medium' disabled={isSubmitting} variant="contained">Join Us</Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                        <Box>
                            <Divider sx={{ my: 4, color: 'text.muted' }}>Continue with</Divider>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, }}>
                                <Box>
                                    <Button size='medium' variant='outlined' color='warning' startIcon={<GoogleIcon />}>Google</Button>
                                </Box>
                                <Box>
                                    <Button size='medium' variant='outlined' color='info' startIcon={<FacebookOutlinedIcon />}>Facebook</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" sx={{ mt: 4, textAlign: "center", "& span": { cursor: "pointer", color: 'primary.main' }, color: 'text.title' }}>Already have an account? <Typography onClick={() => (setOpen(false), setIsSignin(true))} sx={{ textDecoration: 'underline' }} component={'span'}>Sign in</Typography></Typography>
                        </Box>
                    </Box>
                </Box>
            </ModalBox>
            <ModalBox
                open={isForgetPassword}
                title={'Forget Password'}
                closeBtn
                icon={<LockPersonIcon color='primary' sx={{ fontSize: 20 }} />}
                onClose={() => setIsForgetPassword(false)}
                sx={{ borderRadius: 2, maxWidth: { xs: '100%', sm: "500px" }, width: '100%', }}>
                <Box>
                    <Formik
                        initialValues={{
                            "email": "",
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string()
                                    .required('Email is required'),
                            })
                        }
                        onSubmit={forgotPassword}
                        enableReinitialize={true}>
                        {({ isSubmitting }) => (
                            <Form style={{ width: '100%' }}>
                                <Box sx={{ textAlign: "center", }}>
                                    <Typography sx={{ fontSize: { xs: "1.4rem", sm: "1.6rem", }, color: 'text.title' }}>Restore Your Access</Typography>
                                    <Typography sx={{ fontSize: { xs: 14, sm: 15 }, lineHeight: '22px', color: 'text.muted', mt: 1 }}>Reset your password with ease and return to your wellness journey in just a few simple steps.</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Field
                                        component={TextField}
                                        fullWidth
                                        sx={{ mt: 2.5 }}
                                        size="small"
                                        name="email"
                                        label="Email *"
                                        inputProps={{
                                            style: { backgroundColor: '#fff' }
                                        }}
                                        InputProps={{
                                            style: { backgroundColor: '#fff' },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <AccountCircleOutlinedIcon sx={{ color: "#93939396", mr: 1.5, fontSize: 20 }} />
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Stack gap={1} alignItems="center" sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Button color='error' sx={{ px: 4 }} disabled={isSubmitting} variant="outlined" onClick={() => { setIsForgetPassword(false) }}>Cancel</Button>
                                        <Button color={"primary"} disabled={isSubmitting} type="submit" sx={{ px: 4 }} variant="contained">Submit
                                            {isSubmitting && <CircularProgress sx={{ width: "20px !important", height: "20px !important", verticalAlign: "middle", ml: 1, color: "grey.500" }} />}
                                        </Button>
                                    </Stack>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </ModalBox>
        </Box>
    )
}

export default Login

const yogaDetails = [
    {
        name: 'Hatha Yoga',
        description: 'A foundational style of yoga that emphasizes physical postures and breathing techniques to promote strength, flexibility, and mindfulness.',
        image: ImageOne
    },
    {
        name: 'Vinyasa Yoga',
        description: 'A dynamic flow-based yoga that synchronizes breath with movement, helping to improve cardiovascular health and build stamina.',
        image: ImageTwo
    },
    {
        name: 'Ashtanga Yoga',
        description: 'A rigorous and structured yoga style involving a set series of poses performed in a specific order, known for building core strength and discipline.',
        image: ImageThree
    },
    {
        name: 'Yin Yoga',
        description: 'A slow-paced, meditative practice that targets deep connective tissues through long-held poses, ideal for stress relief and joint mobility.',
        image: ImageFour
    }
];
