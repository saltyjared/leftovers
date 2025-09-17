import React from 'react';

const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
};

const inputStyle: React.CSSProperties = {
    fontSize: '30px',
    padding: '16px',
    width: '550px',
    height: '60px',
    borderRadius: '8px',
    border: '1px solid #ccc',
};

const buttonStyle: React.CSSProperties = {
    fontSize: '30px',
    padding: '16px',
    marginLeft: '8px',
    height: '90px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
};

function Button({ label, onClick }: { label: string; onClick: () => void }) {
    return (
        <button onClick={onClick} style={buttonStyle}>
            {label}
        </button>
    );
}

export default function IngredientsBar({
    onAddIngredient,
    onClearIngredients
}: {
    onAddIngredient: (ingredient: string) => void;
    onClearIngredients: () => void;
}) {
    const [inputValue, setInput] = React.useState('');

    const handleAdd = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (inputValue.trim()) {
            const ingredients = inputValue.split(',').map(ing => ing.trim()).filter(Boolean);
            ingredients.forEach(ing => onAddIngredient(ing));
            setInput('');
        }
    };

    const handleClear = () => {
        onClearIngredients();
        setInput('');
    };

    return (
        <>
            <form style={formStyle} onSubmit={handleAdd}>
                <input
                    type="text"
                    placeholder="Enter an ingredient/s (comma separated)"
                    style={inputStyle}
                    value={inputValue}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button label="Add" onClick={handleAdd} />
                <Button label="Clear" onClick={handleClear} />
                <Button label="🧑‍🍳✨" onClick={() => { }} />
            </form>
        </>
    )
}