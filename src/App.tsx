import React from 'react';
import './App.css';
import Header from './components/Header';
import MixingBowl from './components/MixingBowl';
import IngredientsBar from './components/IngredientsBar';
import LoadingSpinner from './components/LoadingSpinner';
import RecipeOverlay from './components/RecipeOverlay';

const apiKey = process.env.REACT_APP_AIML_API_KEY;

function App() {
  React.useEffect(() => {
    document.title = "leftovers";
  }, [])

  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(false);

  const addIngredient = (ingredient: string) => {
    setIngredients(prev => [...prev, ingredient.trim()]);
  };

  const clearIngredients = () => setIngredients([]);

  const [recipe, setRecipe] = React.useState<null | {
    title: string;
    ingredients: string[];
    instructions: string;
  }>(null);

  const generateRecipes = async () => {
    console.log('Generating recipes with ingredients:', ingredients);
    if (!Array.isArray(ingredients) || ingredients.length === 0) return;
    setIsLoading(true);
    setShowOverlay(false);
    setRecipe(null);
    try {
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
              content: `Suggest a single recipe with the following ingredients: ${ingredients.join(", ")}. Limit the response to 512 tokens and format the recipe as follows:\nTitle: <title>\nIngredients: <comma separated list>\nInstructions: <numbered steps, each on a new line>.`
            }
          ],
          max_tokens: 512,
          temperature: 0.2,
          stream: false,
        }),
      });
      const data = await response.json();
      // Parse response
      const content = data.choices[0].message.content;
      // Simple parsing for expected format
      const titleMatch = content.match(/Title:\s*(.*)/);
      const ingredientsMatch = content.match(/Ingredients:\s*(.*)/);
      const instructionsMatch = content.match(/Instructions:\s*([\s\S]*)/);
      setRecipe({
        title: titleMatch ? titleMatch[1].trim() : 'Recipe',
        ingredients: ingredientsMatch ? ingredientsMatch[1].split(/,\s*/) : [],
        instructions: instructionsMatch ? instructionsMatch[1].trim() : content.trim(),
      });
      setShowOverlay(true);
    } catch (err) {
      setRecipe({
        title: 'Error',
        ingredients: [],
        instructions: 'Failed to generate recipe.',
      });
      setShowOverlay(true);
    } finally {
      setIsLoading(false);
    }
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
      {isLoading && <LoadingSpinner />}
      {showOverlay && recipe && (
        <RecipeOverlay recipe={recipe} onClose={() => setShowOverlay(false)} />
      )}
    </>
  );
}

export default App;
