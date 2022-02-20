import React from "react"

export const reviewHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log('отзыв')
}

export const exitHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log('exit')
}