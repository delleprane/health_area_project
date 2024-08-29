import './App.css';
import { About } from './Components/About';
import { Approach } from './Components/Approach';
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
        <Approach/>
      </div>
    </div>
  );
}

export default App;
