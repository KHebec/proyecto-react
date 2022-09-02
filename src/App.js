import React from 'react';
import './App.css';
import Partner from './components/Partner';
import ScrollButton from './components/ScrollButton';
import { Content, Heading } from './components/Styles';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <body>
        <section>
          <Partner/>
        </section>
        <footer>      
          <Content />
          <ScrollButton />
          <Footer />
        </footer>
      </body>
    </div>
  );
}

export default App;
