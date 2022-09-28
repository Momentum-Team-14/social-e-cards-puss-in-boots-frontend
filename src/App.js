import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import CardDetails from './CardDetails'
//import Login from './Login'
import CardList from './CardList'
import {cards} from './mock'

import {
    Navigate,
    Routes,
    Route,
} from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import ProfileNav from './ProfileNav'

function App() {
    const [card, setCard] = useState(null)
    const [token, setToken] = useLocalStorageState(null)
    const [username, setUsername] = useLocalStorageState('')

    const setUserDetails = data => {
        setToken(data.token)
        setUsername(data.username)
    }

    return (
        <div>
            <ProfileNav
                onLogin={setUserDetails}
                loggedIn={token !== null}
            />
            <Routes>
                <Route path="/" element={<Navigate to="cards" />} />
                <Route path="cards" element={<CardList cards={cards} onSelect={setCard} />} />
                <Route path="cards/:pk" element={<CardDetails card={card} />} />
            </Routes>
        </div>
    )
}

export default App
