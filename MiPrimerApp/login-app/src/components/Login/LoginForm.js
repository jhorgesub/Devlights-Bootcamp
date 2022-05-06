import "./LoginForm.css";
import { useState } from "react";

export function LoginForm({ onSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function onEmailChange(event) {
        setEmail(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleClick() {
        if (email === "admin@test.com" && password === "admin") {
            setError("");
            window.localStorage.setItem("isLogged", true);
            onSuccess();
            return;
        }
        window.localStorage.setItem("isLogged", false);
        setError("Datos incorrectos");
    }

    return (
        <div className="Wrapper">
            {error.length > 0 ? <div className="LoginFormError">{error}</div> : null}
            <h2 className="LoginFormTitle">Stax Food Admin Login</h2>
            <div className="LoginForm">
                <div className="LoginFormContainer">
                    <h4 className="LoginFormDescription">
                        Please fill in your unique admin login details below
                    </h4>
                    <div className="LoginFormEmail">
                        <label htmlFor="Email" className="LoginFormLabel">
                            Email address
                        </label>
                        <input
                            name="Email"
                            type="text"
                            id="Email"
                            className="LoginFormInput"
                            value={email}
                            onChange={onEmailChange}
                        ></input>
                    </div>
                    <div className="LoginFormPassword">
                        <label htmlFor="Password" className="LoginFormLabel">
                            Password
                        </label>
                        <input
                            name="Password"
                            type="password"
                            id="Password"
                            className="LoginFormInput"
                            value={password}
                            onChange={onPasswordChange}
                        ></input>
                    </div>
                    <div className="LoginFormSelectContainer">
                        <h2 className="ForgotPassword">forgot password?</h2>
                        <div className="SelectButtonContainer">
                            <select className="SelectButton" name="select">
                                <option className="SelectOption" value="value1" selected>
                                    Alumno
                                </option>
                                <option className="SelectOption" value="value2">Profesor</option>
                            </select>
                        </div>
                    </div>
                    <div className="LoginFormButtonContainer">
                        <button className="LoginFormButton" onClick={handleClick}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
