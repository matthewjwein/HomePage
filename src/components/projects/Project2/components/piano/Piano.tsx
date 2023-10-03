import React from 'react';
import PianoKey from './PianoKey';

const Piano = () => {
    const whiteKeys = ["A", "B", "C", "D", "E", "F", "G"]
    return (
        <div className="piano-keys">
            {whiteKeys.map((key) => (
                <PianoKey type="white" key={key} />
            ))}
        </div>
    );
};

export default Piano;