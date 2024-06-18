import { Stack, Button, Badge } from 'react-bootstrap';
import ProductItems from '../data/products.json';
import { useCartContext } from '../context/CartContext';

type CartItemProps = {
  id: number;
  qty: number;
};

const CartItem = ({ id, qty }: CartItemProps) => {
  const { removeItem } = useCartContext();
  const product = ProductItems.find((item) => item.id === id);

  if (product == null) return null;

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={product.imgUrl}
        style={{
          width: '125px',
          height: '75px',
          objectFit: 'cover',
        }}
      />
      <div className='me-auto text-dark'>
        <div>
          {product.title}{' '}
          {qty > 1 && (
            <span className='text-muted ' style={{ fontSize: '.65rem' }}>
              {qty}
            </span>
          )}
        </div>
        <div>{product.price * qty} $</div>
        <Button
          variant='outline-dark'
          size='sm'
          onClick={() => removeItem(product.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
