import React from 'react';
import './App.css';
import Header from './components/Header';
import MixingBowl from './components/MixingBowl';
import IngredientsBar from './components/IngredientsBar';
import Recipe from './components/Recipe';

const apiKey = process.env.REACT_APP_AIML_API_KEY;

function App() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);

  const addIngredient = (ingredient: string) => {
    setIngredients(prev => [...prev, ingredient.trim()]);
  };

  const clearIngredients = () => setIngredients([]);

  const [recipe, setRecipe] = React.useState<string>('');

  const generateRecipes = async () => {
    console.log('Generating recipes with ingredients:', ingredients);
    if (!Array.isArray(ingredients) || ingredients.length === 0) return;

    const response = await fetch("https://api.aimlapi.com/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Suggest a single recipe with the following ingredients: ${ingredients.join(", ")}. Limit the response to 512 tokens and format the recipe as a numbered list with each step on a new line.`
          }
        ],
        max_tokens: 512,
        stream: false,
      }),
    });

    const data = await response.json();
    setRecipe(data.choices[0].message.content);
  };

  return (
    <>
      <Header />
      <IngredientsBar 
        onAddIngredient={addIngredient}
        onClearIngredients={clearIngredients}
        onGenerateRecipes={generateRecipes}
      />
      <MixingBowl ingredients={ingredients} />
      {recipe && <Recipe recipe={recipe} />}
    </>
  );
}

export default App;
