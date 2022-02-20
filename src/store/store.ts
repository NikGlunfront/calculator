import { combineReducers, configureStore } from "@reduxjs/toolkit"
import languageReducer from './language/languageSlice'

const rootReducer = combineReducers({
    languageReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']