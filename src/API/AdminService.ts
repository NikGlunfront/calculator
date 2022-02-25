import axios, { AxiosRequestHeaders } from "axios"
import { AppDispatch } from "../store/store"

interface postData {
    token: string,
    errorMessage: string
}

export const getToken = async () => {
    try {
        let data = {userName: "admin", password: "admin"}
        const response = await axios.post('http://94.137.242.252:7777/Authenticate/authenticate', data)
        
        localStorage.setItem('token', response.data.token)
    } catch (error) {
        console.log('Какая-то ошибка')
    }
}

export const getAllTabs = async () => {
    try {
        let token = localStorage.getItem('token');
        const response = await axios.get('http://94.137.242.252:7777/api/GetTextBlocks/GetAllTabs', {headers: {Authorization: token ?? ''}})
        
        console.log(response.data)
    } catch (error) {
        console.log('Какая-то ошибка')
    }
}