import React from 'react';

const recipeStyle: React.CSSProperties = {
    padding: '16px',
    width: '100%',
};

export default function Recipe({ recipe }: { recipe: string }) {
    return (
        <div style={recipeStyle}>
            <h2>Recipe Suggestion</h2>
            {!recipe ? (
                <p>No recipe available. Please add ingredients to get suggestions.</p>
            ) : (
                <ul>
                    <li style={{ marginBottom: '8px' }}>{recipe}</li>
                </ul>
            )}
        </div>
    );
}