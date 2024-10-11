import React, {useEffect, useState} from 'react';
import Input from "../components/input/Input";
import {useInitialText} from "../hooks/useInitialText";

const InputPage = () => {
    const initText = useInitialText();

    return (
        <div>
            <h1>Input page!!!</h1>
            <p>
                {initText}
            </p>
            <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
            </p>
            <Input />
        </div>
    );
};

export default InputPage;