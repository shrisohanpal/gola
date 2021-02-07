import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, Typography, Paper, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { listCategoryDetails, updateCategory, deleteCategory } from '../actions/categoryActions'
import { CATEGORY_UPDATE_RESET } from '../constants/categoryConstants'

const CategoryEditScreen = ({ match, history }) =>
{
    const categoryId = match.params.id

    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const categoryDetails = useSelector((state) => state.categoryDetails)
    const { loading, error, category } = categoryDetails

    const categoryUpdate = useSelector((state) => state.categoryUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = categoryUpdate

    const categoryDelete = useSelector((state) => state.categoryDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = categoryDelete

    useEffect(() =>
    {
        if (successUpdate) {
            dispatch({ type: CATEGORY_UPDATE_RESET })
            history.push('/admin/categorylist')
        } else {
            if (!category) {
                dispatch(listCategoryDetails(categoryId))
            } else if (categoryId !== category._id) {
                dispatch(listCategoryDetails(categoryId))
            }
            else {
                setName(category.name)
            }
        }
    }, [dispatch, history, match, categoryId, category, successUpdate])

    const submitHandler = (e) =>
    {
        e.preventDefault()
        dispatch(updateCategory({
            _id: categoryId,
            name
        })
        )
    }

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure')) {
            dispatch(deleteCategory(categoryId))
            history.push('/admin/categorylist')
        }
    }

    return (
        <Container maxWidth="sm" className="py-3">
            <Link to='/admin/categorylist' className='btn btn-light my-3'>
                Go Back
            </Link>
            <Paper>
                <form style={{ textAlign: 'center', paddingTop: 20 }} autoComplete="off" noValidate onSubmit={submitHandler}>
                    <Typography variant="h5">Edit Category</Typography>
                    <TextField style={{ margin: '2%', width: '96%' }} name="name" variant="outlined" label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                    <Button style={{ margin: '2%', width: '96%' }} variant="contained" color="primary" size="large" onClick={submitHandler} fullWidth>Submit</Button>
                    <Button style={{ margin: '2%', width: '96%' }} variant="contained" color="secondary" size="small" onClick={deleteHandler} fullWidth>Delete</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default CategoryEditScreen
