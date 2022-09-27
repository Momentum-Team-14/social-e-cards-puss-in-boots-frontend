import axios from "axios";
import { useState } from "react";
import { handleUpdate } from "./utils";
import { urls } from "./endpoints";

const Login = ({registering, onSuccess}) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const clickHandler = event => {
        event.preventDefault()
        if (registering) {
            axios.post(urls.register(), {
                username, email, password,
                re_password: confirm,
            }).then(axios.post(urls.login(), { username, password }))
                .then(console.log)   // TODO: store token
                .catch(console.log)   // TODO: handle error here
        } else {
            axios.post(urls.login(), { username, password })
                .then(console.log)   // TODO: store token
                .catch(console.log)   // TODO: handle error here
        }
    }

    return (
        <form>
            <div>
                <label htmlFor="login-username">Username</label>
                <input
                    value={username}
                    id="login-username"
                    onChange={handleUpdate(setUsername)}
                />
            </div>
            {
                registering ?
                <div>
                    <label htmlFor="login-email">Email</label>
                    <input
                        type="email"
                        value={email}
                        id="login-email"
                        onChange={handleUpdate(setEmail)}
                    />
                </div> : ''
            }
            <div>
                <label htmlFor="login-password">Password</label>
                <input
                    type="password"
                    value={password}
                    id="login-password"
                    onChange={handleUpdate(setPassword)}
                />
            </div>
            {
                registering ?
                <div>
                    <label htmlFor="login-confirm">Confirm Password</label>
                    <input
                        type="password"
                        value={confirm}
                        id="confirm-password"
                        onChange={handleUpdate(setConfirm)}
                    />
                </div> : ''
            }
            <button
                className="btn btn-primary"
                onClick={clickHandler}
            >{registering ? 'Register' : 'Log In'}</button>
        </form>
    )
}

export default Login;
