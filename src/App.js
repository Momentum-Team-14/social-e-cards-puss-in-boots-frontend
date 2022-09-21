import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import CardDetails from './CardDetails'
//import Login from './Login'
import CardList from './CardList'
import {cards} from './mock'

function App() {
    const [card, setCard] = useState(null)

    if (card) {
        return (
            <CardDetails card={card} />
        )
    } else {
        return (
            <CardList
                cards={cards}
                onSelect={setCard}
            />
        )
    }
}

export default App
