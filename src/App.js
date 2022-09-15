import logo from './Components/images/logo2.png';
import './App.css';
import NavBar from './Components/NavBar';
/* import Counter from './Components/Counter/Counter'; */
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  /* const stock = 10;  */
  return (
    <BrowserRouter>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <NavBar />
    </header>
    <main className='productosMain'>
      <Routes>
        <Route path='/' element={'Aca va a ir una presentacion del e-comerce'}/>
        <Route path='productos' element={<ItemListContainer titulo={"Productos Descatados"}/>}/>
        <Route path='detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='contacto' element={'hola soy el contacto'}/>
      </Routes>
    </main>
    <footer>
      <h2>Aca va a ir el contenido del footer</h2>
    </footer>
    </BrowserRouter>
  );
}

export default App;
