import { RootState } from "./store"

const languageState = (state: RootState) => state.languageReducer;

export const allStates = {
    languageState,
}