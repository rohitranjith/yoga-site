import { Box, keyframes, Backdrop, Typography, Paper } from "@mui/material"

const loaderAnimation = keyframes`
0% {transform: rotate(0deg);}
100% {transform: rotate(360deg);}
`
const styles = {
    "loader": {
        display: 'inline-block',
        borderRadius: '50%',
        borderTop: '4px solid',
        borderRightColor: 'primary.mian',
        borderTopColor: 'primary.main',
        borderRight: '4px solid transparent',
        boxSizing: 'border-box',
        animation: `${loaderAnimation} 1s linear infinite`,
        '&::after': {
            content: '""',
            boxSizing: 'border-box',
            position: 'absolute',
            left: 0,
            top: 0,
            margin: '1px',
            borderRadius: '50%',
            borderLeft: '4px solid',
            borderColor: '#CE9E6E',
            borderBottom: '4px solid transparent',
            animation: `${loaderAnimation}  0.5s linear infinite reverse`,
        },
    },
}


const Preloader = ({ preload = false, height = 'calc(100vh - 105px)', loadingText, sx }) => {

    return (
        <>
            {
                preload ?
                    <Backdrop
                        sx={{ backgroundColor: '#ffffff87', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={true}
                    >
                        <Box sx={{
                            ...styles.loader,
                            ...sx,
                            '& , &:after': {
                                width: "55px",
                                height: "55px",
                            }

                        }}></Box>
                    </Backdrop>
                    :
                    <Paper sx={{ boxShadow: 'none', border: '1px solid #f1f1f1', height: height, width: '100%', display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', ...sx }}>
                        <Box sx={{
                            ...styles.loader,
                            '& , &:after': {
                                width: "50px",
                                height: "50px",
                            }
                        }}></Box>
                        {
                            loadingText &&
                            <Typography>{loadingText}</Typography>
                        }
                    </Paper >
            }
        </>

    )
}

export default Preloader
