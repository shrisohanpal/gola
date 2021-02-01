import axios from 'axios'

import
{
    SHOP_LIST_REQUEST,
    SHOP_LIST_SUCCESS,
    SHOP_LIST_FAIL,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,
    SHOP_DELETE_REQUEST,
    SHOP_DELETE_SUCCESS,
    SHOP_DELETE_FAIL,
    SHOP_CREATE_RESET,
    SHOP_CREATE_FAIL,
    SHOP_CREATE_SUCCESS,
    SHOP_CREATE_REQUEST,
    SHOP_UPDATE_REQUEST,
    SHOP_UPDATE_SUCCESS,
    SHOP_UPDATE_FAIL,
    SHOP_UPDATE_RESET
} from '../constants/shopConstants'
//import { logout } from './userActions'



export const listShops = async (dispatch) =>
{
    try {
        dispatch({ type: SHOP_LIST_REQUEST })

        const { data } = await axios.get(
            '/api/shops'
        )

        dispatch({
            type: SHOP_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SHOP_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

/*
export const listProductDetails = (id) => async (dispatch) =>
{
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch, getState) =>
{
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/products/${id}`, config)

        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: message,
        })
    }
}

export const createProduct = () => async (dispatch, getState) =>
{
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/products`, {}, config)

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: message,
        })
    }
}

export const updateProduct = (product) => async (dispatch, getState) =>
{
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `/api/products/${product._id}`,
            product,
            config
        )

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data,
        })
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: message,
        })
    }
}

export const createProductReview = (productId, review) => async (
    dispatch,
    getState
) =>
{
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.post(`/api/products/${productId}/reviews`, review, config)

        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: message,
        })
    }
}

export const listTopProducts = () => async (dispatch) =>
{
    try {
        dispatch({ type: PRODUCT_TOP_REQUEST })

        const { data } = await axios.get(`/api/products/top`)

        dispatch({
            type: PRODUCT_TOP_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_TOP_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
*/