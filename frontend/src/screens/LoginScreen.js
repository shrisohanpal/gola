import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, TextField, Typography, Container, CircularProgress } from '@material-ui/core';
import Icon from './icon';
import Message from '../components/Message'
import { login } from '../actions/userActions'

import { GoogleLogin } from 'react-google-login';

const LoginScreen = ({ location, history }) =>
{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

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
        dispatch(login(email, password))
    }

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: 100 }}>
            <Paper>
                <Typography variant="h5" className="py-2">Login</Typography>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <CircularProgress />}
                <form style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }} autoComplete="off" noValidate onSubmit={submitHandler}>
                    <TextField style={{ margin: '2%', width: '96%' }} name="email" variant="outlined" label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField style={{ margin: '2%', width: '96%' }} name="password" variant="outlined" label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button style={{ margin: '2%', width: '96%' }} variant="contained" color="primary" size="large" onClick={submitHandler} fullWidth>Submit</Button>
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
                    <a href="/register"><h6 style={{ margin: 10 }}>Don't have a account ? Register Now</h6></a>
                </form>
            </Paper>
        </Container>
    )
}

export default LoginScreen
