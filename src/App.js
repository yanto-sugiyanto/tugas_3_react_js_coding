import React from 'react';
import Header from './Page/Header';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak';
import Footer from './Page/Footer';


function App() {
  return (
    <div>
      <Header/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
    </div>
  );
}

export default App;
