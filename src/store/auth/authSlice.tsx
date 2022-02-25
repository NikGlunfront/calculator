import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AuthState {
    auth: boolean,
}

const initialState: AuthState = {
    auth: true
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLogged: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload
        }
    }
})

export default authSlice.reducer;