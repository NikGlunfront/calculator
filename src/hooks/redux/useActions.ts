import { bindActionCreators } from "@reduxjs/toolkit"
import { authSlice } from "../../store/auth/authSlice"
import { languageSlice } from "../../store/language/languageSlice"
import { useAppDispatch } from "./redux"

export const useLanguageActions = () => {
    const dispatch = useAppDispatch()
    const actions = languageSlice.actions
    return bindActionCreators(actions, dispatch)
}

export const useAuthActions = () => {
    const dispatch = useAppDispatch()
    const actions = authSlice.actions
    return bindActionCreators(actions, dispatch)
}

