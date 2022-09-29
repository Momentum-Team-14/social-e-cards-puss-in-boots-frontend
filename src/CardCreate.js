import { useState } from "react"
import CardStyles from "./CardStyles"
import { handleUpdate } from "./utils"

const CardCreate = ({token}) => {
    const [title, setTitle] = useState('')
    const [outerText, setOuterText] = useState('')
    const [innerText, setInnerText] = useState('')

    return (<form>
        <div><input
            value={title}
            id="title"
            onChange={handleUpdate(setTitle)}
            placeholder="Title"
        /></div>
        <div><textarea
            value={outerText}
            id="outer"
            onChange={handleUpdate(setOuterText)}
            placeholder="Outer Message"
        /></div>
        <div><textarea
            value={innerText}
            id="inner"
            onChange={handleUpdate(setInnerText)}
            placeholder="Inner Message"
        /></div>
        <div><CardStyles /></div>
        <div><button className="btn btn-primary">Create Card</button></div>
    </form>)
}

export default CardCreate
