import { Box, Button, Paper, Typography, Container, Grid } from '@mui/material'
import PageNotFound from '../../assets/page-not-found.svg'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {

    const navigate = useNavigate();

    return (
        <Box>
            <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", }}>
                <Container maxWidth="xl">
                    <Paper sx={{ py: 2, px: { xs: 2, sm: 4, md: 8 }, borderRadius: 4, boxShadow: 'none', border: '1px solid #f1f1f1' }}>
                        <Grid container spacing={2} sx={{ alignItems: "center", flexDirection: { xs: "column-reverse", md: 'row' } }}>
                            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                                <Box sx={{ cursor: 'pointer' }} onClick={() => { navigate(-1) }}>
                                    <Box component={'img'} src={Logo} sx={{ width: { xs: "65%", sm: "40%", md: '48%' }, objectFit: 'contain', transition: '.5s' }} alt="" />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: "1.5rem", sm: '2.5rem', md: "3rem", fontWeight: 400, color: "text.muted" } }}>Oops...</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: { xs: "1.7rem", sm: "2.7rem", md: "3.5rem" }, fontWeight: 600, color: 'text.title' }}>Page Not Found</Typography>
                                </Box>
                                <Box sx={{ mt: 1.4 }}>
                                    <Typography sx={{ fontSize: { xs: 14, sm: 15 }, color: "text.muted", fontWeight: 400 }}>Oops! The page you’re looking for doesn’t exist. It may have been moved, deleted, or the URL could be incorrect. Please check the URL, or go back to our homepage.</Typography>
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Button sx={{ fontSize: "18px", padding: "4px 30px", }} onClick={() => { navigate(-1) }}>Go home</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box component={'img'} src={PageNotFound} alt="" sx={{ width: '100%', height: '100%' }} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </Box>

    )
}

export default Notfound