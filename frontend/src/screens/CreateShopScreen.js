import React from 'react'
import { Container, Button, Typography, Grow, Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const CreateShopScreen = () =>
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
                <form style={{ textAlign: 'center', paddingTop: 20 }} autoComplete="off" noValidate onSubmit={submitHandler}>
                    <Typography variant="h5">Add New Shop</Typography>
                    <TextField style={{ margin: '2%', width: '96%' }} name="owner" variant="outlined" label="Owner" fullWidth />
                    <TextField style={{ margin: '2%', width: '96%' }} name="shopName" variant="outlined" label="Shop Name" fullWidth />
                    <TextField style={{ margin: '2%', width: '96%' }} name="description" variant="outlined" label="Description" fullWidth multiline rows={5} />
                    <Button style={{ margin: '2%', width: '96%' }} variant="contained" color="primary" size="large" onClick={clear} fullWidth>Submit</Button>
                    <Button style={{ margin: '2%', width: '96%' }} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default CreateShopScreen
