import React, {useEffect} from 'react';
import {useRoutes} from "react-router-dom";
import HomePage from "../pages/home/home";
import MenuPage from "../pages/menu/menu";

const Routes: React.FunctionComponent<{}> = props => {

    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage name="Home"/>
        },
        {
            path: '/menu',
            element: <MenuPage name="Menu"/>
        }
    ]);

    return (routes);
}

export default Routes;
