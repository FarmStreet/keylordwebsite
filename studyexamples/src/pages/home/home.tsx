import React, {useEffect} from 'react';
import IPage from '../../interfaces/page';
import logging from '../../config/logging';
import {useDispatch, useSelector} from "react-redux";

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, []);

    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch()

    return <div>Home page!</div>
}

export default HomePage;