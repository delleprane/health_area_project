import React from 'react';
import { Helmet } from 'react-helmet';
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
        {/* Adicionando palavras-chave para SEO */}
        <Helmet>
          <meta name="keywords" content="medicina estética, dermatologia, beleza, saúde, rejuvenescimento, estética facial, estética corporal, tratamentos estéticos, cuidados com a pele" />
          <meta name="description" content="A clínica de dermatologia e medicina estética oferece tratamentos de rejuvenescimento facial, estética corporal e cuidados com a pele. Confira nossos serviços e agende uma consulta!" />
        </Helmet>

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
