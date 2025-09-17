import React from 'react';
import './App.css';
import Header from './components/Header';
import MixingBowl from './components/MixingBowl';
import IngredientsBar from './components/IngredientsBar';

function App() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);

  const addIngredient = (ingredient: string) => {
    setIngredients(prev => [...prev, ingredient.trim()]);
  };

  const clearIngredients = () => setIngredients([]);

  return (
    <>
      <Header />
      <IngredientsBar 
        onAddIngredient={addIngredient}
        onClearIngredients={clearIngredients}
      />
      <MixingBowl ingredients={ingredients} />
    </>
  );
}

export default App;
