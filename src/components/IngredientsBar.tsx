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
    width: '400px',
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

export default function IngredientsBar() {
    return (
        <>
            <form style={formStyle}>
                <input
                    type="text"
                    placeholder="Enter an ingredient"
                    style={inputStyle}
                />
                <Button label="Add" onClick={() => { }} />
                <Button label="Clear" onClick={() => { }} />
                <Button label="🧑‍🍳✨" onClick={() => { }} />
            </form>
        </>
    )
}