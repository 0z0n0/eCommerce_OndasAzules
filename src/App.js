import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
/* import ItemDatailContainer from './components/ItemDatailContainer/ItemDatailContainer'; */

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      {/* <ItemDatailContainer/> */}
    </div>
  );
}

export default App;
