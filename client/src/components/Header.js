import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" >
  <Container>
    <LinkContainer to='/'>
    <Navbar.Brand>Aston Jeremiah's Boutique</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to='/cart'>
        <Nav.Link>< i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/signin'>
        <Nav.Link>< i className='fas fa-user'></i> Sign in</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/contact'>
        <Nav.Link>< i className='fa fa-phone'></i> Contact </Nav.Link>
        </LinkContainer>
      </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
