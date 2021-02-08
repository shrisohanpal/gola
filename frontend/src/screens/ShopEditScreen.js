import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Form } from 'react-bootstrap'
import { Container, Button, Typography, Paper, TextField, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { listCategorys } from '../actions/categoryActions'

import { updateShop, listShopDetails, deleteShop } from '../actions/shopActions'
import { SHOP_UPDATE_RESET, SHOP_DELETE_RESET } from '../constants/shopConstants'

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
    const [image, setImage] = useState('/uploads/default.png')
    const [category, setCategory] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
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

    const shopDelete = useSelector((state) => state.shopDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = shopDelete

    const classes = useStyles()

    const uploadFileHandler = async (e) =>
    {
        const file = e.target.files[0]
        console.log(file)
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = (e) =>
    {
        e.preventDefault()
        dispatch(
            updateShop({
                _id: shopId,
                name,
                image,
                category,
                address,
                description,
            })
        )
    }

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure')) {
            dispatch(deleteShop(id))
        }
    }


    useEffect(() =>
    {
        if (successUpdate || successDelete) {
            dispatch({ type: SHOP_UPDATE_RESET })
            dispatch({ type: 'SHOP_DELETE_RESET' })
            history.push('/')
        } else {
            if (!shop) {
                dispatch(listShopDetails(shopId))
            } else {
                setName(shop.name)
                setImage(shop.image)
                setCategory(shop.category)
                setAddress(shop.address)
                setDescription(shop.description)
            }
        }

        dispatch(listCategorys)
    }, [dispatch, history, shopId, shop, successUpdate])

    return (
        <Container maxWidth="sm" style={{ marginTop: 100 }}>
            <Paper>
                <form style={{ textAlign: 'center', paddingTop: 20 }} autoComplete="off" noValidate onSubmit={submitHandler}>
                    <Typography variant="h5">Edit Shop</Typography>
                    <div>
                        <img className={classes.textField} src={image} />
                    </div>
                    <input type="file"
                        onChange={uploadFileHandler}
                    ></input>
                    <TextField className={classes.textField} name="shopName" variant="outlined" label="Shop Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
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
                    <TextField className={classes.textField} name="address" variant="outlined" label="Address" fullWidth multiline rows={3} value={address} onChange={(e) => setAddress(e.target.value)} />
                    <TextField className={classes.textField} name="description" variant="outlined" label="Description" fullWidth multiline rows={5} value={description} onChange={(e) => setDescription(e.target.value)} />
                    <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button className={classes.button} variant="contained" color="secondary" size="small" onClick={() => deleteHandler(shopId)} fullWidth>Remove Shop</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default ShopEditScreen
