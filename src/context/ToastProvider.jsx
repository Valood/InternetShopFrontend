import { createContext, useCallback, useState } from "react"
import { Toast } from "react-bootstrap"

export const ToastContext = createContext({})
const initialState = {
    type: '',
    message: ''
}

export default function ToastProvider({children}){
    const [toastState, setToastState] = useState(initialState)

    const handleError = useCallback((message) => {
        setToastState({type: 'error', message})
    }, [])

    const handleSuccessAction = useCallback((message) => {
        setToastState({type: 'success', message})
    }, [])

    return (
        <ToastContext.Provider value={{handleError, handleSuccessAction}}>
            <Toast 
                bg={toastState.type}
                show={!!toastState.message}
                delay={3000}
                onClose={() => setToastState(initialState)}
                autohide
                className="toast"
            >
                <Toast.Body color="toast-body">{toastState.message}</Toast.Body>
            </Toast>
            {children}
        </ToastContext.Provider>
    )
}