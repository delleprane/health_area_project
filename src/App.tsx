import './App.css';
import { About } from './Components/About';
import { Banner } from './Components/Banner';
import { Menu } from './Components/Menu';
import { Products } from './Components/Products';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Menu />
        <Banner />
        <Products/>
        <About/>
      </div>
    </div>
  );
}

export default App;
