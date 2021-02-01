import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core';
import { Row, Col, Container } from 'react-bootstrap'

import Slider from '../components/Slider'
import Shop from '../components/Shop'
import { listShops } from '../actions/shopActions'

const HomeScreen = () =>
{
    const dispatch = useDispatch()

    const shopList = useSelector((state) => state.shopList)
    const { loading, error, shops } = shopList

    useEffect(() =>
    {
        dispatch(listShops)
    }, [dispatch])

    return (
        <>
            <Slider />

            <Row style={{ margin: 0, padding: 0, backgroundColor: '#e6ffe6' }}>
                <Col sm={12} lg={4}>
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a href="/search/flower">
                                <img alt="go" style={{ maxHeight: 300, maxWidth: 300, margin: '5%', width: '90%' }} src="/images/chits/chit1.jpg" />
                            </a>
                            <a href="/search/god">
                                <img alt="go" style={{ maxHeight: 300, maxWidth: 300, margin: '5%', width: '90%' }} src="/images/chits/chit2.jpg" />
                            </a>
                        </div>
                        <div style={{ flex: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a href="/search/wood">
                                <img alt="go" style={{ maxHeight: 300, maxWidth: 300, margin: '5%', width: '90%' }} src="/images/chits/chit3.jpg" />
                            </a>
                            <a href="/search/brass">
                                <img alt="go" style={{ maxHeight: 300, maxWidth: 300, margin: '5%', width: '90%' }} src="/images/chits/chit4.jpg" />
                            </a>
                        </div>
                    </div>
                </Col>

                <Col sm={12} lg={4}>
                    <a href="/search/deco">
                        <img alt="go"
                            style={{ maxHeight: '100%', maxWidth: '100%', paddingTop: '20px', paddingBottom: '20px' }}
                            src="/images/banners/banner3.jpg"
                        />
                    </a>
                </Col>
                <Col sm={12} lg={4}>
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a href="/search/cloc">
                                <img alt="go" style={{ maxHeight: 300, maxWidth: 300, margin: '5%', width: '90%' }} src="/images/chits/chit5.jpg" />
                            </a>
                            <a href="/search/phot">
                                <img alt="go" style={{ maxHeight: 300, maxWidth: 300, margin: '5%', width: '90%' }} src="/images/chits/chit6.jpg" />
                            </a>
                        </div>
                        <div style={{ flex: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <a href="/search/ount">
                                <img alt="go" style={{ maxHeight: 300, maxWidth: 300, margin: '5%', width: '90%' }} src="/images/chits/chit7.jpg" />
                            </a>
                            <a href="/search/go">
                                <img alt="go" style={{ maxHeight: 300, maxWidth: 300, margin: '5%', width: '90%' }} src="/images/chits/chit8.jpg" />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className='text-center py-3'><h2>Our Featured Shops</h2></div>

            {loading ? (
                <CircularProgress />
            ) : error ? (
                error
            ) : (
                        <Container>
                            <Row>

                                {shops.map((shop) => (
                                    <Col key={shop._id} sm={12} md={6} lg={4}>
                                        <Shop shop={shop} />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    )
            }
        </>
    )
}

export default HomeScreen