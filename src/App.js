import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Counter from './Components/Counter/Counter';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  const stock = 10; 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
      </header>
      <main>
        <section>
          <ItemListContainer titulo/>
          <Counter stock={stock}/>
        </section>
      </main>
    </div>
  );
}

export default App;
