import logo from './logo.svg';
import './App.css';
import "./style.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Home from './Home';
import Topbar from './Topbar';
import About from './About';
import Service from './Service';
import Product from './Product';
import Team from './Team';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      
      <Topbar/>
      <Home/>
      <About/>
      <Service/>
      <Product/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
