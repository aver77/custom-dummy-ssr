import React from "react";
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom';

import MainPage from "../../../pages/MainPage";
import Counter from "../../counter/Counter";
import Input from "../../input/Input";

import { nav } from "./Router.module.scss";

const RouterComponent = () => {
    return (
        <>
            <nav className={nav}>
                <Link to={"/"}>main page</Link>
                <Link to={"/counter"}>count page</Link>
                <Link to={"/input"}>input page</Link>
            </nav>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/counter"} element={<Counter />} />
                <Route path={"/input"} element={<Input />} />
            </Routes>
        </>
    );
};

export default RouterComponent;