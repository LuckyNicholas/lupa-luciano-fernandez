
import './App.css';
import {NavBar} from "./components/NavBar";
import {FiltersBar} from "./components/FiltersBar";
import {CategoryTittle} from "./components/CategoryTittle";
import {LogoLupa} from "./components/LogoLupa";
import { Flex1 } from './components/Flex1';
import { CartWidget } from './components/CartWidget';



function App() {

  const stockProductos = [
    {id: 1, nombre: "Buzo 1", tipo: "buzo", img:"../img/Lupa 1.png", precio: 1200},
    {id: 2, nombre: "Buzo 2", tipo: "buzo", img:"../img/Lupa 2.png", precio: 1200},
    {id: 3, nombre: "Buzo 3", tipo: "buzo", img:"../img/Lupa 3.png", precio: 1200},  
  ]
  
  return (
    <div className="App">
      <LogoLupa/>
      <header className="App-header">
        <CategoryTittle/>
        <FiltersBar/>
        <CartWidget/>
      </header>
      <NavBar/>
      <div id="contenedor">
        <Flex1 productos={stockProductos}/>
      </div>
    </div>
  );
}

export default App;
