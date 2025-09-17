import React from 'react';
import bowlImage from '../assets/mixingBowl.png';

const divStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
};

export default function MixingBowl() {
    return (
        <div style={divStyle}>
            <img src={bowlImage} alt="Mixing Bowl" style={{ width: '500px', height: '500px' }} />
        </div>
    );
}