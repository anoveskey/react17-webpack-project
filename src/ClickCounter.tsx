import React, { useState } from 'react';

const ClickCounter: React.FC = (): React.ReactElement => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={(): void => setCount(count + 1)}>Click Me!</button>
            <div>You've clicked the button {count} times!</div>
        </>
    );
};

export default ClickCounter;
