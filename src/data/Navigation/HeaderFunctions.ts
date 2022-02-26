import React from "react"
import { useAppDispatch } from "../../hooks/redux/redux"
import { authSlice } from "../../store/auth/authSlice"

export const reviewHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log('отзыв')
}

export const exitHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log('Ссылка1')
}