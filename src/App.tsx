import React from 'react';
import './App.css';
import Header from './components/Header';
import MixingBowl from './components/MixingBowl';
import IngredientsBar from './components/IngredientsBar';


function App() {
  return (
    <>
      <Header />
      <MixingBowl />
      <IngredientsBar />
    </>
  );
}

export default App;
