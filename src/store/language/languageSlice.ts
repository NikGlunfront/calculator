import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LanguageState {
    language: 'rus' | 'eng' | 'tur'
}

const initialState: LanguageState = {
    language: 'rus'
}

export const languageSlice = createSlice({
    name: 'language',
    initialState: initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<'rus' | 'eng' | 'tur'>) => {
            state.language = action.payload
        }
    }
})

export default languageSlice.reducer