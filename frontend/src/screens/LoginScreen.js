import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, TextField, Typography, Container } from '@material-ui/core';
import Icon from './icon';

import { GoogleLogin } from 'react-google-login';

const LoginScreen = () =>
{
    const submitHandler = () =>
    {
        console.log('Submited!')
    }

    const clear = () =>
    {
        console.group('Clear ')
    }

    return (
        <Container maxWidth="sm" style={{ marginTop: 100 }}>
            <Paper>
                <form style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }} autoComplete="off" noValidate onSubmit={submitHandler}>
                    <Typography variant="h5">Login</Typography>
                    <TextField style={{ margin: '2%', width: '96%' }} name="email" variant="outlined" label="Email" fullWidth />
                    <TextField style={{ margin: '2%', width: '96%' }} name="password" variant="outlined" label="Password" fullWidth />
                    <Button style={{ margin: '2%', width: '96%' }} variant="contained" color="primary" size="large" onClick={clear} fullWidth>Submit</Button>
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
