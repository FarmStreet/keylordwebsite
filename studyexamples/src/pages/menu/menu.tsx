import React, {useEffect} from 'react';
import IPage from '../../interfaces/page';
import logging from '../../config/logging';

const MenuPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, []);

    return <div>Menu page!</div>
}

export default MenuPage;