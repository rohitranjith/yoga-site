import { Avatar, Box, Grid, Paper, Typography, IconButton } from "@mui/material"
import { useLocation } from "react-router-dom"
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

const CoachInfo = () => {

    const location = useLocation()
    const { data } = location.state || {}
    console.log("🚀 ~ CoachInfo ~ data:", data)

    return (
        <Box>
            <Paper className="scroll-bar" sx={{ p: 4, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5, height: 'calc(100vh - 102px)', overflow: 'auto' }}>
                <Box>
                    <Paper sx={{ p: 3, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 2, position: 'relative' }}>
                        <Box sx={{ position: 'relative', "&::before": { content: "''", position: 'absolute', left: 0, top: 0, backgroundColor: 'background.primary', width: 6, height: 1, borderRadius: 7 } }}>
                            <Typography sx={{ fontSize: 22, color: "text.title", pl: 2 }}>Coach Details</Typography>
                        </Box>
                        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                            <Box>
                                <Avatar src={data.image} sx={{ width: 115, height: 115 }} />
                            </Box>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: 25, color: "text.title" }}>{data.name}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', mt: 2 }}>
                                    <Box>
                                        <Typography sx={{ color: 'text.muted' }}>Category</Typography>
                                        <Typography sx={{ color: 'text.title', fontSize: 16 }}>{data.category}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: 'text.muted' }}>Phone Number</Typography>
                                        <Typography sx={{ color: 'text.title', fontSize: 16 }}>{data.mobile}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: 'text.muted' }}>Email Address</Typography>
                                        <Typography sx={{ color: 'text.title', fontSize: 16 }}>{data.email}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 5 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={3}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <GroupAddOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>{data.totalUsers}</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Total Users</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <SouthOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>{data.checkIn}</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Check In Time</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <NorthOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>{data.checkOut}</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Check Out Time</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={3}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <AccessTimeOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>{data.session}</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Session Timing</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Paper sx={{ p: 3, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 2, position: 'relative' }}>
                        <Box sx={{ position: 'relative', "&::before": { content: "''", position: 'absolute', left: 0, top: 0, backgroundColor: 'background.primary', width: 6, height: 1, borderRadius: 7 } }}>
                            <Typography sx={{ fontSize: 22, color: "text.title", pl: 2 }}>Coach Information</Typography>
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <GradeOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>{data.rating} & {data.experience} Experience</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Rating & Experience</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <MonetizationOnOutlinedIcon sx={{ fontSize: 26 }} />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>${data.pricePerSession}</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Price Per Session</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <ShareOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>Instagram, Twitter, Whatsapp</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Social Media</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <PlaceOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>{data.location}</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Location</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <MilitaryTechOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>{data.awards}</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Awards</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Box>
                                        <Box sx={{ p: 2.5, border: '1px solid #f1f1f1', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <IconButton sx={{ backgroundColor: '#fff8f1', color: '#CE9E6E', width: 50, height: 50 }}>
                                                <AccountCircleOutlinedIcon />
                                            </IconButton>
                                            <Box>
                                                <Typography sx={{ color: 'text.title', fontSize: 16, lineHeight: '20px' }}>{data.bio}</Typography>
                                                <Typography sx={{ color: 'text.muted' }}>Bio</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Box>
            </Paper>
        </Box>
    )
}

export default CoachInfo