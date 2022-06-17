import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import '../Pages/Login.css'
import { login } from "../app/reducers/userSlice";

const LogIn: FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: false,
        })
        )
    }
    return (
        <div className="login">
            <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here</h1>
                <input
                    type="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </div>
    )
}

export default LogIn