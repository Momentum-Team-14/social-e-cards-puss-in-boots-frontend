import { useNavigate } from "react-router-dom"

const CardList = ({cards, onSelect=() => {}}) => {
    const navigate = useNavigate()

    const Card = ({card}) => {
        return (
            <article
                onClick={() => {
                    navigate(card.pk + '')
                    onSelect(card)
                }}>
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
