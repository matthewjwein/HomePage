import React from 'react';

interface PianoKeyProps {
    type: string;
    key: string;
}

const PianoKey: React.FC<PianoKeyProps> = ({ type, key }) => {
    return (
        <div className={type === "white" ? "piano-key-white" : "piano-key-black"}></div>
    );
};

export default PianoKey;