import './App.css';
import { Banner } from './Components/Banner';
import { Menu } from './Components/Menu';
import { Products } from './Components/Products';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <Products/>
    </div>
  );
}

export default App;
