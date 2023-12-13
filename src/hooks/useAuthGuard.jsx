import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useNavigate } from "react-router-dom";

export default function useAuthGuard(){
    const {user} = useSelector(state => state.userSlice)
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/login')
    })
}