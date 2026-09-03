import { Alert, Avatar, Box, Button, Grid, IconButton, InputAdornment, Paper, Stack, Typography } from "@mui/material"
import PersonalDetails from "./PersonalDetails"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Field, Form, Formik } from "formik";
import { TextField } from 'formik-mui'
import * as Yup from 'yup';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from "react";
import { alertMsg } from "../../utils/basicUtils";

const Profile = () => {

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  return (
    <Box>
      <Paper className="scroll-bar" sx={{ p: { xs: 1.5, sm: 3 }, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5, height: 'calc(100vh - 102px)', overflow: 'auto' }}>
        <Box>
          <Typography sx={{ fontSize: 24, color: 'text.title', lineHeight: '30px' }}>Profile</Typography>
          <Typography sx={{ fontSize: 14, color: 'text.muted' }}>View all your profile details here.</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3.5}>
                <Box>
                  <Paper sx={{ p: { xs: 1.5, sm: 2.5 }, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box>
                        <Typography sx={{ fontSize: { xs: 18, sm: 22 }, color: 'text.title' }}>Neha Kapoor</Typography>
                        <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>kapoor@gmail.com</Typography>
                      </Box>
                      <Box sx={{ mt: 3 }}>
                        <Box sx={{ width: { xs: 225, sm: 260 }, height: { xs: 225, sm: 260 }, mx: 'auto', backgroundColor: '#f1f1f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" sx={{ width: { xs: 210, sm: 260 }, height: { xs: 210, sm: 260 }, mx: 'auto' }} />
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 3.4 }}>
                      <Stack sx={{ flexDirection: 'row', gap: { xs: 1, sm: 2 }, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                          <FacebookOutlinedIcon />
                        </IconButton>
                        <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                          <InstagramIcon />
                        </IconButton>
                        <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                          <WhatsAppIcon />
                        </IconButton>
                        <IconButton size="small" color="secondary" sx={{ border: '1px solid', '&:hover': { color: 'primary.main' }, transition: '.4s' }}>
                          <EmailOutlinedIcon />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} md={8.5}>
                <Box>
                  <Paper sx={{ p: { xs: 1.5, sm: 2.5 }, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5 }}>
                    <Box>
                      <Typography sx={{ fontSize: { xs: 16, sm: 18 }, color: 'text.title' }}>Bio & Other details</Typography>
                    </Box>
                    <Box sx={{ mt: { xs: 2, sm: 2.2 } }}>
                      <PersonalDetails />
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box>
            <Paper sx={{ p: { xs: 1.5, sm: 2.5 }, boxShadow: 'none', border: '1px solid #f1f1f1', borderRadius: 1.5 }}>
              <Box>
                <Typography sx={{ fontSize: { xs: 16, sm: 18 }, color: 'text.title' }}>Change Password</Typography>
              </Box>
              <Box>
                <Box sx={{ mt: 1.5, width: { xs: 1, md: '75%', lg: "50%" } }}>
                  <Alert severity="warning" sx={{ boxShadow: 0 }}>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</Alert>
                </Box>
                <Box sx={{ mt: 1 }}>
                  <Formik
                    initialValues={{
                      "old_password": "",
                      "new_password": "",
                      "confirm_password": "",
                    }}
                    validationSchema={
                      Yup.object({
                        old_password: Yup.string()
                          .required('Current password is required'),
                        new_password: Yup.string()
                          .required("New password is required")
                          .min(8, "Must be at least 8 characters")
                          .max(100, "New password cannot exceed 100 characters"),
                        confirm_password: Yup.string()
                          .required("Confirm password is required")
                          .oneOf([Yup.ref('new_password'), null], "Passwords doesn't match"),
                      })
                    }
                    enableReinitialize={true}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      try {
                        // const response = await axios.post(`accounts/update_password/`, {
                        //     "id": user.id,
                        //     "old_password": values.old_password,
                        //     "new_password": values.new_password,
                        // })
                        console.log(values)
                        alertMsg('Password Updated Successfully', "success")
                        resetForm()                       
                      }
                      catch (err) {
                        console.error(err)
                      }
                      // console.log(values)
                      setSubmitting(false)
                    }}>
                    {({ isSubmitting, values }) => (
                      <Form>
                        <Grid container spacing={{ xs: 1, sm: 2 }}>
                          <Grid item xs={12} md={4}>
                            <Box>
                              <Field
                                component={TextField}
                                margin="dense"
                                fullWidth
                                size="small"
                                name="old_password"
                                label="Current Password *"
                                type={showCurrentPassword ? "text" : "password"}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton onClick={() => { setShowCurrentPassword(prev => !prev) }} onMouseDown={handleMouseDownPassword} edge="end" size="small" sx={{ mr: .5 }}>
                                        {showCurrentPassword ? (
                                          <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                        ) : (
                                          <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box>
                              <Field
                                component={TextField}
                                margin="dense"
                                fullWidth
                                size="small"
                                name="new_password"
                                label="New Password *"
                                sx={{ ".MuiFormHelperText-root": { mt: 1.3 } }}
                                type={showNewPassword ? "text" : "password"}
                                InputProps={{
                                  // style: { backgroundColor: '#efefefe6' },
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={() => { setShowNewPassword(prev => !prev) }}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="small"
                                        sx={{ mr: .5 }}
                                      >
                                        {showNewPassword ? (
                                          <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                        ) : (
                                          <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box>
                              <Field
                                component={TextField}
                                margin="dense"
                                fullWidth
                                size="small"
                                name="confirm_password"
                                label="Confirm New Password *"
                                type={showConfirmPassword ? "text" : "password"}
                                InputProps={{
                                  // style: { backgroundColor: '#efefefe6' },
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={() => { setShowConfirmPassword(prev => !prev) }}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="small"
                                        sx={{ mr: .5 }}
                                      >
                                        {showConfirmPassword ? (
                                          <VisibilityOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                        ) : (
                                          <VisibilityOffOutlinedIcon sx={{ color: " #93939396", fontSize: 20 }} />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Box sx={{ mt: 1.5, textAlign: 'right' }}>
                          <Button disabled={isSubmitting} variant="contained" type='submit' color="primary">Update Password</Button>
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Profile