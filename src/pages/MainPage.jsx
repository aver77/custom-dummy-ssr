import React from 'react';

import imgSrc from "../assets/beautifulImg.png";
import Buttons from "../components/counter/Counter";
import Input from "../components/input/Input";

const MainPage = () => {

    return (
        <div>
            <h1>LOREM IPSUM!</h1>
            <img src={imgSrc} alt={"b img"}/>
            <div>
                <Input />
            </div>
            <div>
                <Buttons />
            </div>
            <div>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                </p>
                <span>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </span>
            </div>
        </div>
    );
};

export default MainPage;