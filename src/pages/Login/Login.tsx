import { useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    Avatar,
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
    Theme,
    Button,
} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { LoadingButton } from '@mui/lab'
import Logo from '../../components/Logo'
import { getProfileAccess, logIn, setSession } from '../../Services/authService'
import { userContext } from '../../context/UserContext'
import ToastAlert from '../../components/Alert'

const Login = (): ReactNode => {
    const { user, setUser } = useContext(userContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    // eslint-disable-next-line consistent-return
    const loginHandler = async (values, formik): Promise<any> => {
        try {
            const response = await logIn(values.name, values.password)
            if (response) {
                if (response.Member) {
                    setSession(JSON.stringify(response.Member))
                    setUser(response)
                    setError(null)
                }
                if (response.message) {
                    // setUser(null)
                    setError(response.message)
                    setSession(null)
                }
            }
        } catch (err) {
            setError('Network Error')
            console.log('Error', err)
        }
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Mininum 3 characters ')
                .max(255)
                .required('UserName is required'),
            password: Yup.string()
                .min(6, 'Password is too short - should be 6 chars minimum.')
                .required('Password is required'),
        }),
        onSubmit: loginHandler,
    })

    return (
        <>
            <Helmet>
                <title>Member Directory</title>
            </Helmet>

            <Grid
                container
                component="main"
                alignItems="center"
                justifyItems="center"
                justifyContent="center"
                textAlign="center"
                sx={{
                    height: '100vh',
                    p: (theme: Theme) => theme.spacing(2),
                }}
            >
                <Grid item xs={12} sm={6} md={5} lg={3}>
                    {error && <ToastAlert error={error} />}
                    <Logo />
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            error={!!formik.errors.name}
                            helperText={formik.errors.name}
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="User Name"
                            onChange={(event) => {
                                formik.values.name = event.target.value
                                setError(null)
                            }}
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            error={!!formik.errors.password}
                            helperText={formik.errors.password}
                            margin="normal"
                            required
                            fullWidth
                            onChange={(event) => {
                                formik.values.password = event.target.value
                                setError(null)
                            }}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <LoadingButton
                            sx={{
                                '&.MuiButtonBase-root:hover': {
                                    backgroundColor: '#86A1C7',
                                    color: '#FFFFFF',
                                },
                                mt: 3,
                                mb: 2,
                            }}
                            loadingPosition="end"
                            type="submit"
                            size="large"
                            variant="contained"
                            loading={formik.isSubmitting}
                            disabled={formik.isSubmitting}
                            fullWidth
                        >
                            {formik.isSubmitting
                                ? 'Attempting Sign In'
                                : 'Sign In'}
                        </LoadingButton>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login
