import React from 'react';
import downloadIcon from '../assets/download.png';
import './RecipeOverlay.css';

interface RecipeOverlayProps {
  recipe: {
    title: string;
    ingredients: string[];
    instructions: string;
  };
  onClose: () => void;
}

const RecipeOverlay: React.FC<RecipeOverlayProps> = ({ recipe, onClose }) => {
  const handleDownload = () => {
    const content = `Title: ${recipe.title}\n\nIngredients:\n${recipe.ingredients.map(i => `- ${i}`).join("\n")}\n\nInstructions:\n${recipe.instructions}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${recipe.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'recipe'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="overlay">
      <div className="overlay-card">
        <div className="overlay-exit-bar">
          <button className="overlay-exit-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="overlay-content">
          <h2>{recipe.title}</h2>
          <button className="overlay-download-btn" onClick={handleDownload} style={{marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
            <img src={downloadIcon} alt="Download" style={{width: '24px', height: '24px'}} />
            <span style={{display: 'none'}}>Download Recipe</span>
          </button>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <div>
            {recipe.instructions
              .split(/\n|\r\n/)
              .filter(line => line.trim())
              .map((line, idx) => (
                <p key={idx} style={{ marginBottom: '1em' }}>{line}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeOverlay;
