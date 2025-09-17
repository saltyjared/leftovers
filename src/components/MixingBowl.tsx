import React, { useEffect, useRef } from 'react';
import bowlImage from '../assets/mixingBowl.png';

const divStyle: React.CSSProperties = {
    position: 'relative',
    width: '500px',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}

const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '62%', // move overlay lower for deeper bowl
    transform: 'translate(-50%, -50%)',
    width: '70%', // wider to match bowl
    height: '28%', // shorter for bowl depth
    maxHeight: '28%',
    overflowY: 'auto',
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
    textShadow: '0 2px 16px rgba(0,0,0,0.7)',
    pointerEvents: 'auto',
    padding: '16px 12px 24px 12px',
    //background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.0) 100%)',
    borderRadius: '0 0 180px 180px / 0 0 120px 120px', // deeper curve for bowl
};


export default function MixingBowl({ ingredients }: { ingredients: string[] }) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (overlayRef.current) {
            overlayRef.current.scrollTop = overlayRef.current.scrollHeight;
        }
    }, [ingredients]);
    
    return (
        <div style={divStyle}>
            <img src={bowlImage} alt="Mixing Bowl" style={imageStyle} />
            <div style={overlayStyle} ref={overlayRef}>
                {ingredients.length > 0 ? 
                    ingredients.map((ing, idx) => (
                        <div key={idx}>{ing}</div>
                    )) 
                    : <div></div>
                }
            </div>
        </div>
    );
}