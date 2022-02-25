import { RootState } from "./store"

const languageState = (state: RootState) => state.languageReducer;
const authState = (state: RootState) => state.authReducer;

export const allStates = {
    languageState,
    authState,
}

