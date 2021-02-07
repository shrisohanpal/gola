import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { createShop } from '../actions/shopActions'

const ProfileScreen = ({ history }) =>
{
    const dispatch = useDispatch()

    const shopCreate = useSelector((state) => state.shopCreate)
    const { loading, success, error, shop } = shopCreate

    useEffect(() =>
    {
        if (success) {
            history.push(`/shop/${shop._id}/edit`)
        }
    }, [success])

    const createShopHandler = () =>
    {
        dispatch(createShop())
    }

    return (
        <div className="text-center py-5">
            this is Profile Screen. Here will be all Details of user like: name, email,  address, photo, etc.
            <Button onClick={createShopHandler}>create shop</Button>
        </div>
    )
}

export default ProfileScreen