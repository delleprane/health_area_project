import './App.css';
import { About } from './Components/About';
import { Approach } from './Components/Approach';
import { Banner } from './Components/Banner';
import { SiteMap } from './Components/SiteMap';
import { Menu } from './Components/Menu';
import { Products } from './Components/Products';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Menu menuItem={true}/>
        <Banner />
        <Products/>
        <About/>
        <Approach/>
        <SiteMap/>
        <Menu menuItem={false}/>
      </div>
    </div>
  );
}

export default App;
