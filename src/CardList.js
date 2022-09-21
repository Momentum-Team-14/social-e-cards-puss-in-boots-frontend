const CardList = ({cards, onSelect=() => {}}) => {
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
