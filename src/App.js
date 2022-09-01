import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CardWidget from './Components/CardWidget/CardWidget'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <CardWidget />
      </header>
      <main>
        <section>
          <ItemListContainer titulo/>
        </section>
      </main>
    </div>
  );
}

export default App;
