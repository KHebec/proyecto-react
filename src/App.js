import React from 'react';
import './App.css';
import ScrollButton from './components/ScrollButton';
import { Content, Heading } from './components/Styles';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">      
      <Content />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
