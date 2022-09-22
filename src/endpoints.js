import axios from "axios"

const apiRoot = "https://powerful-island-75819.herokuapp.com"

const urls = {
    login: () => `${apiRoot}/api/auth/token/login`,
    register: () => `${apiRoot}/api/auth/users`,
    getCards: () => `${apiRoot}/ecard`,
}

const getCards = async () => {
    const cards = await axios.get(urls.getCards()).then(res => res.data)
    return cards.map(card => ({...card}))
}

export {
    getCards,
    urls,
}
