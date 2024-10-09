
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Assets/mens_banner.jpg'
import womens_banner from './Components/Assets/womens_banner.avif'
import kids_banner from './Components/Assets/kids_banner.avif'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/mens' element={<ShopCategory banner={mens_banner} category="mens"/>}></Route>
      <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}></Route>
      <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="Kids"/>}></Route>
      <Route path='product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}>
        </Route>
      </Route>

      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
