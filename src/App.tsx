import React from 'react';

import './styles.css';

import belCanto from './images/belCanto.png';
import clock from './images/clock.svg';
import ClickCounter from './ClickCounter';

const App: React.FC = (): React.ReactElement => {
    return (
        <div>
            <h1>Slightly less dumb React App, Day 3</h1>
            <h3>Current environment: {process.env.NODE_ENV}</h3>
            <h3>made by {process.env.name}</h3>
            <img alt="Nils and Anneli" src={belCanto} />
            <img alt="clock" src={clock} />
            <ClickCounter />
        </div>
    )
};

export default App;
