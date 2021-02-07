import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { EditOutlined, DeleteForever } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import
{
    listCategorys,
    deleteCategory,
    createCategory,
} from '../actions/categoryActions'
import { CATEGORY_CREATE_RESET } from '../constants/categoryConstants'

const CategoryListScreen = ({ history }) =>
{
    const dispatch = useDispatch()

    const categoryList = useSelector((state) => state.categoryList)
    const { loading, error, categorys } = categoryList

    const categoryDelete = useSelector((state) => state.categoryDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = categoryDelete

    const categoryCreate = useSelector((state) => state.categoryCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        category: createdCategory,
    } = categoryCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() =>
    {
        dispatch({ type: CATEGORY_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }

        if (successCreate) {
            history.push(`/admin/category/${createdCategory._id}`)
        } else {
            dispatch(listCategorys)
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdCategory,
    ])

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure')) {
            dispatch(deleteCategory(id))
        }
    }

    const createCategoryHandler = () =>
    {
        dispatch(createCategory())
    }

    return (
        <Container className="py-3">
            <Row className='align-items-center'>
                <Col>
                    <h1>Categories</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createCategoryHandler}>
                        <i className='fas fa-plus'></i> Create Category
          </Button>
                </Col>
            </Row>
            {loadingDelete && <CircularProgress />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate && <CircularProgress />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <>
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>Created At</th>
                                        <th>EDIT</th>
                                        <th>REMOVE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categorys.map((category) => (
                                        <tr key={category._id}>
                                            <td>{category._id}</td>
                                            <td>{category.name}</td>
                                            <td>{category.createdAt.replace('T', ' / ')}</td>
                                            <td>
                                                <LinkContainer to={`/admin/category/${category._id}`}>
                                                    <Button variant='primary' className='btn-sm'>
                                                        <EditOutlined />
                                                    </Button>
                                                </LinkContainer>
                                            </td>
                                            <td>
                                                <Button
                                                    variant='danger'
                                                    className='btn-sm'
                                                    onClick={() => deleteHandler(category._id)}
                                                >
                                                    <DeleteForever />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </>
                    )}
        </Container>
    )
}

export default CategoryListScreen