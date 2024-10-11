import React, {useState} from 'react';

const Input = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <div>
                <h3>Input value: </h3> {inputValue}
            </div>
            <div>
                <input onChange={(e) => setInputValue(e.target.value)} />
            </div>
        </>
    );
};

export default Input;