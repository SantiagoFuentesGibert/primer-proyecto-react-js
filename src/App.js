import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/Context/cartProvider'
import Cart from './Components/Cart/Cart';
import imgFooter from './Components/images/footerLogo.png'
import imgIg from './Components/images/instagram.png'
import imgFc from './Components/images/facebook.png'

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <main className='productosMain'>
          <Routes>
            <Route path='/' element={'Aca va a ir una presentacion del e-comerce'}/>
            <Route path='productos' element={<ItemListContainer titulo={"Productos Descatados"}/>}/>
            <Route path='detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='contacto' element={'hola soy el contacto'}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Routes>
        </main>
        <footer className='footer'>
          <img src={imgFooter} alt='lala'></img>
          <div>
            <p>Ubicación: Calle 124, Moreno, Buenos Aires</p>
            <p>Telefono: 11-2345-6789/11-9876-5432</p>
            <p>Email: lorem@gmail.com</p>
          </div>
          <div>
          <img className='imgFooterRedes' src={imgIg} alt='ff'/>
          <img className='imgFooterRedes' src={imgFc} alt='ff'/>
          </div>
        </footer>
        </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
