import React, { useState } from 'react';

const LocationInfoBox = ({ info }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="location-info">
            <button onClick={handleClose} className="close-button">X</button>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    );
};

export default LocationInfoBox;