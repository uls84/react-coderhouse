import NavBar from './components/navbar/NavBar.js';
import ItemListContainer from './ItemListContainer.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greeting={"Hola"} />
    </div>
  );
}

export default App;