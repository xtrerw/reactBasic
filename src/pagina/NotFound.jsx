import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export function NotFound() {
    {/* función de devolver la página inicial por texto "404 not found" */}
    const navigate= useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 4000);
    },[]);
    return <h1>404 Not Found</h1>
}