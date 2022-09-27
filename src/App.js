import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/Context/cartProvider'
import Cart from './Components/Cart/Cart';

function App() {
  return (
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
      <footer>
        <h2>Aca va a ir el contenido del footer</h2>
      </footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
