import { bindActionCreators } from "@reduxjs/toolkit"
import { languageSlice } from "../../store/language/languageSlice"
import { useAppDispatch } from "./redux"

export const useLanguageActions = () => {
    const dispatch = useAppDispatch()
    const actions = languageSlice.actions
    return bindActionCreators(actions, dispatch)
}

