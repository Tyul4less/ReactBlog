import React from 'react';
import { Head, LeftMenu } from "./index";
import { Route, Routes } from "react-router-dom";
import { Error, MainPage } from "../pages";

const MainTemplate = ({page}) => {

    return (
        <div className="template">
            <Head/>
            <LeftMenu/>
            {page}
        </div>
    )
}

export default React.memo(MainTemplate);