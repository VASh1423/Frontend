import { IUser } from './../../models/IUser';
import { AppDispatch } from './../store';
import axios from 'axios'
import { userSlice } from './UserSlice'
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUser = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.userFetching())
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//     dispatch(userSlice.actions.userFetchingSuccess(response.data))
//   } catch (e) {
//     dispatch(userSlice.actions.userFetchingError('Error'))
//   }
// }

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
    }
  }
)