import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Carrito from "./components/Carrito/Carrito";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import React from "react";
import CustomProvider from "./components/CustomProvider";
import Footer from "./components/Footer/Footer";





function App() {

  return (
  
  <CustomProvider>

      <BrowserRouter>
        <NavBar/>
        
        <Routes>

            <Route path='/' element={<ItemListContainer/>} />

            <Route path='/category/:cat' element={<ItemListContainer/>} />

            <Route path='/item/:productId' element={<ItemDetailContainer/>} />

            <Route path='/contacto' element={<p>Contacto</p>} />

            <Route path='/Carrito' element={<Carrito />} />

            <Route path='*' element={<p>404</p>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
      

    </CustomProvider>

  );
}

export default App;
