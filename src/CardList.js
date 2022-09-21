import Card from "./Card"

const CardList = ({cards}) => {
    return (
        <div>
            {cards.map(card => <Card card={card} />)}
        </div>
    )
}

export default CardList
