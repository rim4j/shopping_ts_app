import { Offcanvas, Stack } from 'react-bootstrap';
import { useCartContext } from '../context/CartContext';
import CartItem from './CartItem';
import productItems from './../data/products.json';

type CartProps = {
  isOpen: boolean;
};

const Cart = ({ isOpen }: CartProps) => {
  const { closeCart, cartItems } = useCartContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className='fw-bold fs-5  text-dark'>
            Total :{' '}
            {cartItems.reduce((total, curr) => {
              const product = productItems.find((item) => item.id == curr.id);
              return total + (product?.price || 0) * curr.qty;
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
