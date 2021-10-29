import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../Rating'
import products from '../../products'

const ProductPage = ({ match }) => {
    const product = products.find(p => p._id == match.params.id)
    console.log('products')
    return ( <>
        <Link className='btn btn-dark my-3' to='/'> 
        Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={process.env.PUBLIC_URL + product.image} alt={product.name} />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                <ListGroup.Item >
                    <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.Reviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                {product.leftInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.leftInStock == 0}>
                                Add to cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
    )
}

export default ProductPage
