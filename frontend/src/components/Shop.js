import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Paper } from '@material-ui/core'


const Shop = ({ shop }) =>
{
    return (
        <div className="py-3" style={{ background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={5}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: 150 }} src={shop.image} />
                    <Card.Body>
                        <Card.Title>{shop.name}</Card.Title>
                        <div style={{ height: 100, overflowY: 'scroll', marginBottom: 20 }}>
                            <Card.Text>{shop.description}</Card.Text>
                        </div>
                        <Button variant="primary">View Shop</Button>
                    </Card.Body>
                </Card>
            </Paper>
        </div>
    )
    return (
        <div style={{ background: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        </div>
    )
}

export default Shop
