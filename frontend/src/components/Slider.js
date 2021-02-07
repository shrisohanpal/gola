import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () =>
{
    return (
        <div style={{ width: '100%', padding: 0, height: 'auto', margin: 0, marginBottom: 0 }}>
            <Carousel style={{ margin: 0, display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', marginBottom: 0 }}>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: 300 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src="/images/slider1.jpg"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: 300 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src="/images/slider1.jpg"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: 300 }} >
                        <img
                            style={{ margin: 0, padding: 0, height: '100%', width: '100%', borderRadius: 0 }}
                            src="/images/slider1.jpg"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
