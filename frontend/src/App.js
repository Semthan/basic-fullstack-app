import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Products } from './Pages/Products';
import { UpdateProduct } from './Pages/UpdateProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/update/:id' element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
