import axios from "axios";

export const http = axios.create({
    baseURL: 'http://192.168.1.129:8000/'
})

export const httpWithToken = axios.create({
    baseURL: 'http://192.168.1.129:8000/'
})

httpWithToken.interceptors.request.use((config) => {
    const configCopy = {...config};
    configCopy.headers = {
        ...configCopy.headers,
        'Authorization': `Token ${localStorage.getItem('token')}`
    }
    return configCopy
})