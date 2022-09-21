//import logo from './logo.svg'
import './App.css'
//import Login from './Login'
import CardList from './CardList'
import {cards} from './mock'

function App() {
    return (
        <CardList cards={cards} />
    )
}

export default App
