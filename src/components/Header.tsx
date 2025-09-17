import React from 'react';
import leftoversLogo from '../assets/leftovers.png';

const headerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100px',
    width: '100%',
    padding: '16px 0 0 0'
};

export default function Header() {
    return (
        <div style={headerStyle}>
            <img src={leftoversLogo} alt="leftovers logo" style={{ height: '80px', width: '80px' }} />
            <div style={{ marginLeft: '10px' }}>
                <h1 style={{ margin: 0 }}>leftovers</h1>
                <h4 style={{ margin: 0 }}>gotta clear the fridge</h4>
            </div>
        </div>
    );
}