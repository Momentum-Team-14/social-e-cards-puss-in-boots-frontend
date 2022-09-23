import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import CardDetails from './CardDetails'
//import Login from './Login'
import CardList from './CardList'
import {cards} from './mock'
import { Routes, Route } from 'react-router-dom'

function App() {
    const [card, setCard] = useState(null)

    return (
        <Routes>
            <Route path="cards" element={<CardList cards={cards} onSelect={setCard} />} />
            <Route path="cards/:pk" element={<CardDetails card={card} />} />
        </Routes>
    )
}

export default App
