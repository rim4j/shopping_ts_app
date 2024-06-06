import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarBs className='bg-dark text-light mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink} className='text-light'>
            Home
          </Nav.Link>
          <Nav.Link to='/shop' as={NavLink} className='text-light'>
            Shop
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink} className='text-light'>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
