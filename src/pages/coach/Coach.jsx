import { Avatar, Box, Grid, IconButton, Paper, Skeleton, Typography, TextField as MuiTextField, InputAdornment, Stack, Button, Autocomplete } from "@mui/material"
import { useEffect, useState } from "react"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { useNavigate } from "react-router-dom";
import Preloader from "../../components/Preloader";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ModalBox from "../../components/ModalBox";
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import { alertMsg } from "../../utils/basicUtils";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const Coach = () => {

    const [coachList, setCoachList] = useState([])
    const navigate = useNavigate()
    const [loader, setLoder] = useState(false)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setLoder(true)
        const timer = setTimeout(() => {
            setCoachList(coachDetails);
            setLoder(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    function AvatarWithSkeleton({ src, status }) {
        const [loaded, setLoaded] = useState(false);

        return (
            <Box sx={{ position: "relative", width: 75, height: 75, mx: "auto" }}>
                {
                    !loaded && (<Skeleton variant="circular" width={75} height={75} sx={{ position: "absolute", top: 0, left: 0 }} />)
                }
                <Avatar src={src} sx={{ width: 75, height: 75, opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease", }} onLoad={() => setLoaded(true)} />
                <Box sx={{
                    height: 14, width: 14, position: "absolute", bottom: -2, right: 10, backgroundColor: "#fff", borderRadius: 50, display: "flex", alignItems: "center",
                    justifyContent: "center"
                }}>
                    <FiberManualRecordIcon sx={{ height: 14, color: status === "Online" ? "success.main" : "warning.main" }} />
                </Box>
            </Box>
        );
    }

    const handleSignUp = async (values, { resetForm }) => {
        try {
            const data = {
                "select_coach": values.select_coach.name,
                "select_session": values.select_session.name,
                "select_payment_type": values.select_payment_type.payment,
                "select_your_yoga_type": values.select_your_yoga_type.name,
                "email": values.email,
                "experience": values.experience,
            }
            console.log(data)
            alertMsg('Account Created Succesfully', 'success')
            setOpen(false)
            resetForm()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Box>
            <Box>
                <Paper sx={{ p: 3, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5, height: 'calc(100vh - 102px)' }}>
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                        <Box>
                            <MuiTextField
                                fullWidth
                                sx={{
                                    width: { xs: 260, sm: 325 },
                                    borderRadius: 1,
                                }}
                                placeholder="Search"
                                size={'small'}
                                // value={searchText}
                                // onChange={(e) => { setSearchText(e.target.value) }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='start'>
                                            <SearchIcon sx={{ color: "lightgrey" }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box>
                            <Button onClick={() => { setOpen(true) }} size='large' sx={{ letterSpacing: .4 }} startIcon={<AddIcon />}>Add your Coach</Button>
                        </Box>
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                        {
                            loader ?
                                <Box>
                                    <Preloader sx={{ height: "calc(100vh - 212px)" }} />
                                </Box>
                                :
                                <>
                                    <Box className="scroll-bar" sx={{ height: 'calc(100vh - 215px)', overflow: 'auto', pr: 1 }}>
                                        <Grid container spacing={2}>
                                            {
                                                coachList.map((coach, index) => (
                                                    <Grid key={index} item xs={12} lg={3}>
                                                        <Box>
                                                            <Paper sx={{ p: 1.5, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5, position: 'relative' }}>
                                                                <Box>
                                                                    <Box sx={{ position: 'relative', width: 75, height: 75, mx: 'auto', }}>
                                                                        <AvatarWithSkeleton src={coach.image} status={coach.status} />
                                                                        <Box sx={{ height: 14, width: 14, position: 'absolute', bottom: -2, right: 10, backgroundColor: "#fff", borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                            <FiberManualRecordIcon sx={{ height: 14, color: coach.status === "Online" ? "success.main" : 'warning.main' }} />
                                                                        </Box>
                                                                    </Box>
                                                                    <Box sx={{ mt: 1.5, textAlign: 'center' }}>
                                                                        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>{coach.name}</Typography>
                                                                        <Typography sx={{ color: 'text.muted' }}>{coach.location}</Typography>
                                                                    </Box>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                                                        <IconButton size="small" sx={{ backgroundColor: '#f1fcff', color: '#5bafd1' }}>
                                                                            <CategoryOutlinedIcon sx={{ fontSize: 22 }} />
                                                                        </IconButton>
                                                                        <Box>
                                                                            <Typography sx={{ color: 'text.title' }}>{coach.category}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                                                        <IconButton size="small" sx={{ backgroundColor: '#effbf9', color: '#51a89a' }}>
                                                                            <QueryBuilderOutlinedIcon sx={{ fontSize: 20 }} />
                                                                        </IconButton>
                                                                        <Box>
                                                                            <Typography sx={{ color: 'text.title' }}>{coach.session}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                                                        <IconButton size="small" sx={{ backgroundColor: '#fce9dd', color: '#e56829' }}>
                                                                            <GradeOutlinedIcon sx={{ fontSize: 18 }} />
                                                                        </IconButton>
                                                                        <Box>
                                                                            <Typography sx={{ color: 'text.title' }}>{coach.rating} & {coach.experience} Experience</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                                <Box onClick={() => navigate(`/coach/list/${coach.id}`, { state: { data: coach } })} sx={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#edfaff', p: "4px 10px", borderRadius: '0px 4px 0px 6px', cursor: 'pointer' }}>
                                                                    <Typography sx={{ fontSize: 12, fontWeight: 700 }}>View</Typography>
                                                                </Box>
                                                            </Paper>
                                                        </Box>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </Box>
                                </>
                        }
                    </Box>
                </Paper>
            </Box>

            <ModalBox
                open={open}
                title={'Create Your Coach'}
                closeBtn
                icon={<AssignmentIndOutlinedIcon color='primary' />}
                onClose={() => setOpen(false)}
                sx={{ maxWidth: { xs: '100%', sm: "40%" }, width: '100%', borderRadius: 2, }}>
                <Box>
                    {/* <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{ mt: .5 }}>
                            <Typography sx={{ fontSize: { xs: "1.7rem", sm: "1.6rem", }, color: 'text.title' }}>🧘‍♀️ Your Flow, Your Coach</Typography>
                        </Box>
                        <Box sx={{ mt: .5 }}>
                            <Typography sx={{ fontSize: { xs: 14, sm: 15 }, lineHeight: '22px', color: 'grey' }}>Craft a yoga experience as unique as you are. Pick the vibe, set the time, and match with a coach who gets your rhythm.</Typography>
                        </Box>
                    </Box> */}
                    <Box>
                        <Formik
                            initialValues={{
                                "select_coach": "",
                                "select_session": "",
                                "select_payment_type": "",
                                "select_your_yoga_type": "",
                                "email": "",
                                "experience": "",
                            }}
                            onSubmit={handleSignUp}
                            validationSchema={
                                Yup.object({
                                    select_coach: Yup.object()
                                        .required('Coach is required'),
                                    select_session: Yup.object()
                                        .required('Session is required'),
                                    select_payment_type: Yup.object()
                                        .required('Payment Type is required'),
                                    select_your_yoga_type: Yup.object()
                                        .required('Yoga Type is required'),
                                    email: Yup.string()
                                        .email('Invalid email address')
                                        .required('Email is required'),
                                    experience: Yup.object()
                                        .required('Experience is required'),
                                })
                            }
                        >
                            {({ isSubmitting, values, setFieldValue }) => (
                                <Form>
                                    <Box>
                                        <Box>
                                            <Grid container spacing={2.5}>
                                                <Grid item xs={12} md={6}>
                                                    <Box>
                                                        <Autocomplete
                                                            disablePortal
                                                            options={coachOption}
                                                            getOptionLabel={(option) => option.name ?? ""}
                                                            isOptionEqualToValue={(opt, val) => opt.name === val.name}
                                                            onChange={(e, value) => setFieldValue("select_coach", value)}
                                                            renderInput={(params) => (
                                                                <Field component={TextField} {...params} name="select_coach" label="Select Your Coach" />
                                                            )}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Box>
                                                        <Autocomplete
                                                            disablePortal
                                                            options={sessionOption}
                                                            getOptionLabel={(option) => option.name ?? ""}
                                                            isOptionEqualToValue={(opt, val) => opt.name === val.name}
                                                            onChange={(e, value) => setFieldValue("select_session", value)}
                                                            renderInput={(params) => (
                                                                <Field component={TextField} {...params} name="select_session" label="Select Your Session" />
                                                            )}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Box>
                                                        <Autocomplete
                                                            disablePortal
                                                            options={paymentOption}
                                                            getOptionLabel={(option) => option.payment ?? ""}
                                                            isOptionEqualToValue={(opt, val) => opt.payment === val.payment}
                                                            onChange={(e, value) => setFieldValue("select_payment_type", value)}
                                                            renderInput={(params) => (
                                                                <Field component={TextField} {...params} name="select_payment_type" label="Select Your Payment Type" />
                                                            )}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Box>
                                                        <Autocomplete
                                                            disablePortal
                                                            options={yogaTypeOption}
                                                            getOptionLabel={(option) => option.name ?? ""}
                                                            isOptionEqualToValue={(opt, val) => opt.name === val.name}
                                                            onChange={(e, value) => setFieldValue("select_your_yoga_type", value)}
                                                            renderInput={(params) => (
                                                                <Field component={TextField} {...params} name="select_your_yoga_type" label="Select Your Yoga Type" />
                                                            )}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Box>
                                                        <Field
                                                            component={TextField}
                                                            name="email"
                                                            label="Enter Your Email"
                                                            inputProps={{ maxLength: 35 }}
                                                            fullWidth
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <IconButton size="small"
                                                                            sx={{ mr: .5 }}>
                                                                            <MailOutlinedIcon sx={{ fontSize: 20 }} />
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Box>
                                                        <Autocomplete
                                                            disablePortal
                                                            options={experienceOption}
                                                            getOptionLabel={(option) => option.name ?? ""}
                                                            isOptionEqualToValue={(opt, val) => opt.name === val.name}
                                                            onChange={(e, value) => setFieldValue("experience", value)}
                                                            renderInput={(params) => (
                                                                <Field component={TextField} {...params} name="experience" label="Select Experience / Fresher" />
                                                            )}
                                                        />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 2 }}>
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
                    </Box>
                </Box>
            </ModalBox>
        </Box>
    )
}

export default Coach

const coachDetails = [
    {
        id: 1,
        name: "Aria Bennett",
        category: "Vinyasa Flow",
        image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg",
        session: "06:00 AM to 08:00 AM",
        experience: 6,
        rating: 4.8,
        pricePerSession: 22,
        location: "San Francisco, USA",
        bio: "Dynamic Vinyasa sequences to energize your mornings.",
        status: "Online",
        mobile: "+1 415-123-4567",
        email: "aria.bennett@gmail.com",
        totalUsers: 41,
        checkIn: '05.50 AM',
        checkOut: '08.30 AM',
        awards: "Wellness Leader Award 2021",
    },
    {
        id: 2,
        name: "Maya Patel",
        category: "Mindfulness & Meditation",
        image: "https://images.pexels.com/photos/4498278/pexels-photo-4498278.jpeg",
        session: "07:00 AM to 09:00 AM",
        experience: 5,
        rating: 4.9,
        pricePerSession: 18,
        location: "London, UK",
        bio: "Guides you to calm with meditation-based yoga.",
        status: "Offline",
        mobile: "+44 7700 900001",
        email: "maya.patel@gmail.com",
        totalUsers: 35,
        checkIn: '06.50 AM',
        checkOut: '09.30 AM',
        awards: "Mindfulness Coach of the Year 2020",
    },
    {
        id: 3,
        name: "Liam Carter",
        category: "Power Yoga",
        image: "https://images.pexels.com/photos/3822717/pexels-photo-3822717.jpeg",
        session: "05:30 AM to 07:00 AM",
        experience: 7,
        rating: 4.7,
        pricePerSession: 25,
        location: "New York, USA",
        bio: "High-intensity power yoga sessions for strength and stamina.",
        status: "Online",
        mobile: "+1 212-456-7890",
        email: "liam.carter@gmail.com",
        totalUsers: 46,
        checkIn: '05.15 AM',
        checkOut: '07.30 AM',
        awards: "Fitness Excellence Award 2021",
    },
    {
        id: 4,
        name: "Sophia Martinez",
        category: "Ashtanga Yoga",
        image: "https://images.pexels.com/photos/4325450/pexels-photo-4325450.jpeg",
        session: "06:30 AM to 08:30 AM",
        experience: 9,
        rating: 4.9,
        pricePerSession: 28,
        location: "Madrid, Spain",
        bio: "Traditional Ashtanga series with a modern approach.",
        status: "Offline",
        mobile: "+34 612 345 678",
        email: "sophia.martinez@gmail.com",
        totalUsers: 38,
        checkIn: '06.15 AM',
        checkOut: '09.00 AM',
        awards: "Top Instructor Award 2022",
    },
    {
        id: 5,
        name: "Ethan Williams",
        category: "Hatha Yoga",
        image: "https://images.pexels.com/photos/4324030/pexels-photo-4324030.jpeg",
        session: "07:00 AM to 08:30 AM",
        experience: 4,
        rating: 4.6,
        pricePerSession: 17,
        location: "Sydney, Australia",
        bio: "Balancing physical postures with breathing techniques.",
        status: "Online",
        mobile: "+61 412 345 678",
        email: "ethan.williams@gmail.com",
        totalUsers: 32,
        checkIn: '06.50 AM',
        checkOut: '09.00 AM',
        awards: "Emerging Yoga Talent 2021",
    },
    {
        id: 6,
        name: "Isabella Rossi",
        category: "Restorative Yoga",
        image: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg",
        session: "08:00 AM to 09:30 AM",
        experience: 8,
        rating: 4.8,
        pricePerSession: 20,
        location: "Rome, Italy",
        bio: "Gentle stretches and props to deeply relax the body.",
        status: "Online",
        mobile: "+39 345 678 9012",
        email: "isabella.rossi@gmail.com",
        totalUsers: 29,
        checkIn: '07.45 AM',
        checkOut: '10.00 AM',
        awards: "Healing Through Yoga Award 2020",
    },
    {
        id: 7,
        name: "Noah Kim",
        category: "Yin Yoga",
        image: "https://images.pexels.com/photos/4324031/pexels-photo-4324031.jpeg",
        session: "06:00 AM to 07:30 AM",
        experience: 5,
        rating: 4.7,
        pricePerSession: 19,
        location: "Seoul, South Korea",
        bio: "Slow-paced yoga poses held for longer periods.",
        status: "Offline",
        mobile: "+82 10-1234-5678",
        email: "noah.kim@gmail.com",
        totalUsers: 50,
        checkIn: '05.50 AM',
        checkOut: '08.00 AM',
        awards: "Top Yin Yoga Coach 2022",
    },
    {
        id: 8,
        name: "Emma Johnson",
        category: "Prenatal Yoga",
        image: "https://images.pexels.com/photos/4498293/pexels-photo-4498293.jpeg",
        session: "09:00 AM to 10:30 AM",
        experience: 6,
        rating: 4.8,
        pricePerSession: 21,
        location: "Toronto, Canada",
        bio: "Supporting expecting mothers with safe yoga practices.",
        status: "Online",
        mobile: "+1 416-123-4567",
        email: "emma.johnson@gmail.com",
        totalUsers: 36,
        checkIn: '08.50 AM',
        checkOut: '11.00 AM',
        awards: "Prenatal Wellness Award 2021",
    },
];


const coachOption = [
    { name: "Aarav Sharma" },
    { name: "Priya Verma" },
    { name: "Rohit Mehta" },
    { name: "Neha Kapoor" },
    { name: "Vikram Singh" },
    { name: "Sneha Reddy" },
    { name: "Ankit Patel" },
    { name: "Ritika Das" },
    { name: "Manoj Nair" },
    { name: "Shreya Banerjee" }
]

const sessionOption = [
    { name: "06:00 AM to 07:00 AM" },
    { name: "07:00 AM to 08:00 AM" },
    { name: "08:00 AM to 09:00 AM" },
    { name: "09:00 AM to 10:00 AM" },
    { name: "06:30 AM to 07:30 AM" },
    { name: "07:30 AM to 08:30 AM" },
    { name: "08:30 AM to 09:30 AM" },
    { name: "09:30 AM to 10:30 AM" },
    { name: "06:00 AM to 08:00 AM" },
    { name: "07:30 AM to 09:00 AM" },
    { name: "08:30 AM to 10:00 AM" },
]

const paymentOption = [
    { payment: "Weekly" },
    { payment: "Monthly" },
]

const experienceOption = [
    { name: "Experience" },
    { name: "Fresher" },
]

const yogaTypeOption = [
    { name: "Vinyasa Flow" },
    { name: "Mindfulness & Meditation" },
    { name: "Power Yoga" },
    { name: "Ashtanga Yoga" },
    { name: "Hatha Yoga" },
    { name: "Restorative Yoga" },
    { name: "Yin Yoga" },
    { name: "Prenatal Yoga" },
]


