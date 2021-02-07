import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { EditOutlined, DeleteForever } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import
{
    listUsers,
    deleteUser
} from '../actions/userActions'
//import { USER_CREATE_RESET } from '../constants/userConstants'

const UserListScreen = ({ history, match }) =>
{
    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const userDelete = useSelector((state) => state.userDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = userDelete

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() =>
    {
        //  dispatch({ type: USER_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }
        dispatch(listUsers())

    }, [
        dispatch,
        history,
        userInfo,
        successDelete
    ])

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure')) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <Container className="py-3">
            <Row className='align-items-center'>
                <Col>
                    <h1>Users</h1>
                </Col>
            </Row>
            {loadingDelete && <CircularProgress />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
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
                                    {users.map((user) => (
                                        <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.createdAt.replace('T', ' / ')}</td>
                                            <td>
                                                <LinkContainer to={`/admin/user/${user._id}`}>
                                                    <Button variant='primary' className='btn-sm'>
                                                        <EditOutlined />
                                                    </Button>
                                                </LinkContainer>
                                            </td>
                                            <td>
                                                <Button
                                                    variant='danger'
                                                    className='btn-sm'
                                                    onClick={() => deleteHandler(user._id)}
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

export default UserListScreen