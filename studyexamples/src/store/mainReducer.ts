import {applyMiddleware, combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import userReducer from "./userReducer";
import countReducer from "./countReducer";
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    userReducer: userReducer,
    countReducer: countReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)