import { Card, Button } from 'react-bootstrap';

type ProductProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
};

const Product = ({ id, title, price, imgUrl }: ProductProps) => {
  const qty = 0;

  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='200px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column bg-dark'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4 '>
          <span className='fs-2 text-light'>{title}</span>
          <span className='ms-2 text-light'>{price}$</span>
        </Card.Title>
        <div className='mt-auto'>
          {qty === 0 ? (
            <Button className='w-100 btn-secondary'>Add to Cart</Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column'
              style={{ gap: '0.5rem' }}
            >
              <div
                className='d-flex align-items-center justify-content-center '
                style={{ gap: '0.5rem' }}
              >
                <Button className='btn-secondary'>+</Button>
                <span className='fs-5 m-3 text-light'>{qty}</span>
                <Button className='btn-secondary'>-</Button>
              </div>
              <Button className='btn-light' size='sm'>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
