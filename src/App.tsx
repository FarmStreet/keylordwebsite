import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

const App: React.FunctionComponent<{}> = props => {

/*
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);
*/

    return (
        <div className="App">
            <div style={{display: 'flex'}}>
                <PostContainer/>
                <PostContainer2/>
            </div>
        </div>
    );
}

export default App;
