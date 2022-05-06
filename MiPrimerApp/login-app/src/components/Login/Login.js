import { LoginForm } from "./LoginForm";
import { LoginFormSuccess } from "./LoginFormSuccess";
import { useState } from "react";
import "./Login.css";

export function Login() {
    const [isLogged,setIsLogged] = useState(window.localStorage.getItem("isLogged"));
  
    function onSuccess() {
        setIsLogged("true");
    }

    return ( 
        <main className = "Login">
            { isLogged === "true" ? <LoginFormSuccess/> : <LoginForm onSuccess = {onSuccess} /> }
        </main> 
    )
}