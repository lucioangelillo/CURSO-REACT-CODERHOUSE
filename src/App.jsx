import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
   <div className="App">
   <NavBar/>
  
   <ItemListContainer greeting={"Bienvenidos a la tienda de motos mas grande de Argentina"}/>
   </div>
  );
}

export default App;
