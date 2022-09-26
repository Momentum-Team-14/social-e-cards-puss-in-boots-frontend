import { useParams } from "react-router-dom"
import CommentList from "./CommentList"

const CardDetails = ({card}) => {
    const { pk } = useParams()
    // TODO: fetch card detail if card is not available
    // if (!card) {
    //     card = cards.filter(card => card.pk === parseInt(pk))[0]
    // }

    return (
        <div>
            <h1>{card.title}</h1>
            <div>by {card.owner.username}</div>
            <div>{card.outer_message}</div>
            <CommentList comments={card.comments}/>
        </div>
    )
}

export default CardDetails
