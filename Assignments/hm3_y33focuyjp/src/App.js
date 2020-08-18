import React from 'react';
import logo from './logo.svg';
import './css/global.css';
import './css/components.css';
import './css/layout.css';
import './css/sample-wallpaper.css';
import Navbar from './Components/Navbar';
import Article from './Components/Article';
import IntroContent from './Components/IntroContent';

function App() {
  return (
    <div>
      <Navbar />
      <header className="header">
        <div className="container">
          <IntroContent />
          <div className="sample-wallpaper">
            <Article src={require('./assets/venom-1.jpg')} alt="Wallpaper #1" />
            <Article src={require('./assets/hulk-1.jpg')} alt="Wallpaper #2" />
            <Article src={require('./assets/venom-2.jpg')} alt="Wallpaper #3" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
