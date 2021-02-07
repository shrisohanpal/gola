import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography, Container, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from './icon';
import Message from '../components/Message'
import { register } from '../actions/userActions'
import { GoogleLogin } from 'react-google-login';

const useStyles = makeStyles({
    textField: {
        margin: '2%',
        width: '96%',
    },
});

const RegisterScreen = ({ location, history }) =>
{
    const classes = useStyles();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() =>
    {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) =>
    {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: 100 }}>
            <Paper>
                <Typography variant="h5" className="py-2">Register</Typography>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <CircularProgress />}
                <form style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }} autoComplete="off" noValidate onSubmit={submitHandler}>
                    <TextField className={classes.textField} name="name" variant="outlined" label="Name" type="text" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField className={classes.textField} name="email" variant="outlined" label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField className={classes.textField} name="password" variant="outlined" label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                    <TextField className={classes.textField} name="confirmPassword" variant="outlined" label="Confirm Password" type="password" fullWidth value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Button style={{ margin: '2%', width: '96%' }} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <GoogleLogin
                        clientId=""
                        render={(renderProps) => (
                            <Button style={{ margin: '2%', width: '96%' }} color="primary" fullWidth startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        //  onSuccess={googleSuccess}
                        //  onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                    <a href="/login"><h6 style={{ margin: 10 }}>Have a account ? Login Now</h6></a>
                </form>
            </Paper>
        </Container>
    )
}

export default RegisterScreen
