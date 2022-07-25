import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

/*export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
    } catch (e: unknown) {
        if (e instanceof Error) {
            dispatch(userSlice.actions.usersFetchingError(e.message));
        }
    }
}*/

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e: unknown) {
            if (e instanceof Error) {
                return thunkApi.rejectWithValue("Не удалось загрузить пользователей");
            }
        }
    }
)