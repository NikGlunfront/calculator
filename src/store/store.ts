import { combineReducers, configureStore } from "@reduxjs/toolkit"
import languageReducer from './language/languageSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
    languageReducer,
    authReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']