import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LanguageState {
    language: string
}

const initialState: LanguageState = {
    language: 'rus'
}

export const languageSlice = createSlice({
    name: 'language',
    initialState: initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        }
    }
})

export default languageSlice.reducer