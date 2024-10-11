import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div>
                <h3>Counter: </h3> {counter}
            </div>
            <div>
                <button onClick={() => setCounter(prev => prev + 1)}>increment</button>
                <button onClick={() => setCounter(prev => prev - 1)}>decrement</button>
            </div>
        </>
    );
};

export default Counter;