import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Shop, About, Home } from './pages';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Container>
  );
};

export default App;
