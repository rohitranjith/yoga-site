import { Avatar, Box, Chip, Grid, IconButton, Paper, Skeleton, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Preloader from "../../components/Preloader";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Users = () => {

    const [userList, setUserList] = useState([])
    const [loader, setLoder] = useState(false)

    useEffect(() => {
        setLoder(true)
        const timer = setTimeout(() => {
            setUserList(userDetails);
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

    return (
        <Box>
            <Paper className="scroll-bar" sx={{ p: 3, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5, height: 'calc(100vh - 102px)', overflow: 'auto' }}>
                {
                    loader ?
                        <Box>
                            <Preloader sx={{ height: "calc(100vh - 155px)" }} />
                        </Box>
                        :
                        <>
                            <Box>
                                <Grid container spacing={2}>
                                    {
                                        userList.map((user, index) => (
                                            <Grid key={index} item xs={12} lg={3}>
                                                <Box>
                                                    <Paper sx={{ boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5, position: 'relative' }}>
                                                        <Box sx={{ p: .5, height: 130, position: 'relative' }}>
                                                            <Box component={'img'} src={user.backgroundImage} sx={{ width: 1, height: 1, objectFit: 'cover', borderRadius: '4px 4px 0px 0px' }} />
                                                            <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                                                                <Chip size="small" label={user.membershipType} sx={{ backgroundColor: user.membershipType === "Premium" ? "warning.main" : "success.main", color: 'text.default', "& span": { fontSize: 12, fontWeight: 600, letterSpacing: .4 }, height: 20 }} />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ px: 2, py: 3, }}>
                                                            <Box sx={{ position: 'relative', width: 82, height: 82, mx: 'auto', mt: -8, backgroundColor: 'background.default', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                <AvatarWithSkeleton src={user.profilePicture} status={user.status} />
                                                            </Box>
                                                            <Box sx={{ mt: 1.5, textAlign: 'center' }}>
                                                                <Typography sx={{ fontSize: 17, fontWeight: 600 }}>{user.name}</Typography>
                                                                <Typography sx={{ color: 'text.muted' }}>{user.email}</Typography>
                                                            </Box>
                                                            <Stack sx={{ mt: 1.5, flexDirection: 'row', gap: 1.2, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                                                                <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                                    <FacebookOutlinedIcon sx={{ fontSize: 20 }} />
                                                                </IconButton>
                                                                <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                                    <InstagramIcon sx={{ fontSize: 20 }} />
                                                                </IconButton>
                                                                <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                                    <LinkedInIcon sx={{ fontSize: 20 }} />
                                                                </IconButton>
                                                                <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                                    <WhatsAppIcon sx={{ fontSize: 20 }} />
                                                                </IconButton>
                                                                <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                                                                    <EmailOutlinedIcon sx={{ fontSize: 20 }} />
                                                                </IconButton>
                                                            </Stack>
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
            </Paper>
        </Box>
    )
}

export default Users

const userDetails = [
    {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "aarav@gmail.com",
        "phone": "+91-9876543210",
        "preferredYogaStyle": "Hatha Yoga",
        "profilePicture": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        "status": "Online",
        "backgroundImage": "https://images.pexels.com/photos/7130494/pexels-photo-7130494.jpeg",
        "membershipType": "Premium"
    },
    {
        "id": 2,
        "name": "Priya Verma",
        "email": "verma@gmail.com",
        "phone": "+91-9823456789",
        "preferredYogaStyle": "Ashtanga Yoga",
        "profilePicture": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        "status": "Online",
        "backgroundImage": "https://images.pexels.com/photos/1304550/pexels-photo-1304550.jpeg",
        "membershipType": "Free"
    },
    {
        "id": 3,
        "name": "Rohit Mehta",
        "email": "rohit@gmail.com",
        "phone": "+91-9812345678",
        "preferredYogaStyle": "Vinyasa Yoga",
        "profilePicture": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        "status": "Offline",
        "backgroundImage": "https://images.pexels.com/photos/7130493/pexels-photo-7130493.jpeg",
        "membershipType": "Premium"
    },
    {
        "id": 4,
        "name": "Neha Kapoor",
        "email": "kapoor@gmail.com",
        "phone": "+91-9876012345",
        "preferredYogaStyle": "Kundalini Yoga",
        "profilePicture": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "status": "Online",
        "backgroundImage": "https://images.pexels.com/photos/7130490/pexels-photo-7130490.jpeg",
        "membershipType": "Free"
    },
    {
        "id": 5,
        "name": "Vikram Singh",
        "email": "vikram@gmail.com",
        "phone": "+91-9876549876",
        "preferredYogaStyle": "Iyengar Yoga",
        "profilePicture": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        "status": "Offline",
        "backgroundImage": "https://images.pexels.com/photos/7130502/pexels-photo-7130502.jpeg",
        "membershipType": "Premium"
    },
    {
        "id": 6,
        "name": "Sneha Reddy",
        "email": "reddy@gmail.com",
        "phone": "+91-9812456789",
        "preferredYogaStyle": "Restorative Yoga",
        "profilePicture": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        "status": "Online",
        "backgroundImage": "https://images.pexels.com/photos/7130491/pexels-photo-7130491.jpeg",
        "membershipType": "Free"
    },
    {
        "id": 7,
        "name": "Ankit Patel",
        "email": "ankit@gmail.com",
        "phone": "+91-9834567890",
        "preferredYogaStyle": "Power Yoga",
        "profilePicture": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "status": "Offline",
        "backgroundImage": "https://images.pexels.com/photos/7130503/pexels-photo-7130503.jpeg",
        "membershipType": "Premium"
    },       
    {
        "id": 8,
        "name": "Shreya Banerjee",
        "email": "banerjee@gmail.com",
        "phone": "+91-9856789012",
        "preferredYogaStyle": "Yin Yoga",
        "profilePicture": "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg",
        "status": "Offline",
        "backgroundImage": "https://images.pexels.com/photos/6985255/pexels-photo-6985255.jpeg",
        "membershipType": "Free"
    }
]







