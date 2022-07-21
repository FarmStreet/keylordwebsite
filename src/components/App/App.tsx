import React, {useEffect} from 'react';
import './App.scss';
import logging from "../../config/logging";
import Routes from "../../config/routes";

const App: React.FunctionComponent<{}> = props => {
    useEffect(() => {
        logging.info('Loading App');
    })

    return (
        <div className="App">
            <Routes/>
        </div>
    );

}

export default App;
