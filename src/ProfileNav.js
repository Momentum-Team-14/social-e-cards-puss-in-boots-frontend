import { useState } from "react"
import Login from "./Login"
import { nothing } from "./utils"

const ProfileNav = ({
    onLogin=nothing,
    onLogout=nothing,
    onProfile=nothing,
    loggedIn=false,
}) => {
    const [loginPrompt, setLoginPrompt] = useState(false)
    const [registering, setRegistering] = useState(false)

    const showLoginPrompt = registering => e => {
        e.preventDefault()
        setLoginPrompt(true)
        setRegistering(registering)
    }

    return (
        <div id="profile-nav" style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            height: '3rem',
        }}>
            { loggedIn ? <>
                    <a href="/#" onClick={onLogout}>Logout</a>
                    Profile
                </> : <>
                <div style={{marginRight: '1rem'}}>
                    <a href="/#" onClick={showLoginPrompt(false)}>Login</a>
                    &nbsp;or&nbsp;
                    <a href="/#" onClick={showLoginPrompt(true)}>Register</a>
                </div>
                <div style={{
                    display: loginPrompt ? '' : 'none',
                    position: 'absolute',
                    top: '3rem',
                    right: '0px'
                }}>
                    <Login
                        registering={registering}
                        onSuccess={
                            result => {
                                setLoginPrompt(false)
                                onLogin(result)
                            }
                        }
                    />
                </div></>
            }
        </div>
    )
}

export default ProfileNav