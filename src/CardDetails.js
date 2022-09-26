import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CommentList from "./CommentList"
import { getCard } from "./endpoints"

const CardDetails = (props) => {
    const [card, setCard] = useState(props.card)
    const { pk } = useParams()
    useEffect(() => {
        if (!card) {
            getCard(pk).then(setCard)
        }
    }, [card, pk])

    if (!card) {
        return (
            <div>Loading...</div>
        )
    }

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
