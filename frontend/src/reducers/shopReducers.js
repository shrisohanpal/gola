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


export const shopListReducer = (state = { shops: [] }, action) =>
{
    switch (action.type) {
        case SHOP_LIST_REQUEST:
            return { loading: true, shops: [] }
        case SHOP_LIST_SUCCESS:
            return {
                loading: false,
                shops: action.payload.shops,
            }
        case SHOP_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

/*
export const productDetailsReducer = (
    state = { product: { reviews: [] } },
    action
) =>
{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) =>
{
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productCreateReducer = (state = {}, action) =>
{
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const productUpdateReducer = (state = { product: {} }, action) =>
{
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true }
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_UPDATE_RESET:
            return { product: {} }
        default:
            return state
    }
}

export const productReviewCreateReducer = (state = {}, action) =>
{
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}

export const productTopRatedReducer = (state = { products: [] }, action) =>
{
    switch (action.type) {
        case PRODUCT_TOP_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_TOP_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_TOP_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

*/