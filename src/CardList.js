import Card from "./Card"

const CardList = ({cards}) => {
    return (
        <div>
            {cards.map(card => <Card card={card} key={card.pk} />)}
        </div>
    )
}

export default CardList
