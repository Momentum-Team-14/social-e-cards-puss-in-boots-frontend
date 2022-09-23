import { useParams } from "react-router-dom"
import { cards } from "./mock"

const CardDetails = ({card}) => {
    const { pk } = useParams()
    if (!card) {
        card = cards.filter(card => card.pk === parseInt(pk))[0]
    }

    return (
        <div>
            <h1>{card.title}</h1>
            <div>by {card.owner.username}</div>
            <div>{card.outer_message}</div>
        </div>
    )
}

export default CardDetails
