import { useEffect, useState } from "react"
import { getCards } from "./endpoints"

const CardList = ({onSelect=() => {}}) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getCards().then(setCards)
    }, [])


    const Card = ({card}) => {
        return (
            <article onClick={() => onSelect(card)}>
                {card.title}
            </article>
        )
    }

    return (
        <div>
            {cards.map(card => <Card card={card} key={card.pk} />)}
        </div>
    )
}

export default CardList
