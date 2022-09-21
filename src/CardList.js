const CardList = ({cards}) => {
    const Card = ({card}) => {
        return (
            <article>
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
