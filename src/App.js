import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import CardDetails from './CardDetails'
//import Login from './Login'
import CardList from './CardList'

function App() {
    const [card, setCard] = useState(null)

    if (card) {
        return (
            <CardDetails card={card} />
        )
    } else {
        return (
            <CardList
                onSelect={setCard}
            />
        )
    }
}

export default App
