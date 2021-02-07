import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Button, Typography, Paper, TextField, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { listCategorys } from '../actions/categoryActions'

const useStyles = makeStyles((theme) =>
({
    textField: {
        margin: '2%',
        width: '96%'
    },
    formControl: {
        margin: '2%',
        width: '96%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: '2%',
        width: '96%'
    },
}))

const ShopEditScreen = ({ match, history }) =>
{
    const shopId = match.params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const shopDetails = useSelector((state) => state.shopDetails)
    const { loading, error, shop } = shopDetails

    const categoryList = useSelector((state) => state.categoryList)
    const { loading: categoryLoading, error: categoryError, categorys } = categoryList

    const shopUpdate = useSelector((state) => state.shopUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = shopUpdate


    const classes = useStyles()

    const submitHandler = () =>
    {
        console.log('Submited!')
    }

    const clear = () =>
    {
        console.group('Clear ')
    }


    useEffect(() =>
    {
        dispatch(listCategorys)
    }, [dispatch])

    return (
        <Container maxWidth="sm" style={{ marginTop: 100 }}>
            <Paper>
                <form style={{ textAlign: 'center', paddingTop: 20 }} autoComplete="off" noValidate onSubmit={submitHandler}>
                    <Typography variant="h5">Edit Shop</Typography>
                    <TextField className={classes.textField} name="shopName" variant="outlined" label="Shop Name" fullWidth />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="category-select-outlined-label">Select Category</InputLabel>
                        <Select
                            labelId="category-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            label="Select Category"
                        >
                            {!categoryLoading && !categoryError && (
                                categorys.map((category) => (
                                    <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                                ))
                            )}
                        </Select>
                    </FormControl>
                    <TextField className={classes.textField} name="address" variant="outlined" label="Address" fullWidth multiline rows={3} />
                    <TextField className={classes.textField} name="description" variant="outlined" label="Description" fullWidth multiline rows={5} />
                    <Button className={classes.button} variant="contained" color="primary" size="large" onClick={submitHandler} fullWidth>Submit</Button>
                    <Button className={classes.button} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Remove Shop</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default ShopEditScreen
