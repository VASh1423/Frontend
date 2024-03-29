import { fetchUsers } from './ActionCreator';
import { IUser } from './../../models/IUser';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState{
  users: IUser[],
  isLoading: boolean,
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // userFetching(state){
    //   state.isLoading = true
    // },
    // userFetchingSuccess(state, action: PayloadAction<IUser[]>){
    //   state.isLoading = false
    //   state.error = ''
    //   state.users = action.payload
    // },
    // userFetchingError(state, action: PayloadAction<string>){
    //   state.isLoading = false
    //   state.error = action.payload
    // }
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = ''
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
        state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
    },
  }
})

export default userSlice.reducer