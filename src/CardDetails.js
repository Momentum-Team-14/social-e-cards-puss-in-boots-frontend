const CardDetails = ({card}) => {
    return (
        <div>
            <h1>{card.title}</h1>
            <div>{card.outer_message}</div>
        </div>
    )
}

export default CardDetails
