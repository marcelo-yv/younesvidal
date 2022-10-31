import './App.css';
import Footer from './Component/Footer';
import ItemsListContainer from './ItemListContainer/ItemsListContainer';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart';
import Error4004 from './ComponentError/Error4004';
import Contact from './Component/Contact';
import About from './Component/About';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemsListContainer />} />
          <Route path="/category/:Id" element={<ItemsListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error4004/>}/>
          <Route path="/contacto" element={<Contact/>} />
          <Route path="/nosotros" element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
