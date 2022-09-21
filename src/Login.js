import { useState } from "react";
import { handleUpdate } from "./utils";

const Login = ({onSuccess}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (   //1qazXSW@  zaq1@WSX
        <form>
            <div>
                <label htmlFor="login-username">Username</label>
                <input
                    value={username}
                    id="login-username"
                    onChange={handleUpdate(setUsername)}
                />
            </div>
            <div>
                <label htmlFor="login-password">Password</label>
                <input
                    type="password"
                    value={password}
                    id="login-password"
                    onChange={handleUpdate(setPassword)}
                />
            </div>
        </form>
    )
}

export default Login;
