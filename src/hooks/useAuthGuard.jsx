import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useAuthGuard(){
    const {user} = useSelector(state => state.userSlice)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login')
        }
    }, [user])
}