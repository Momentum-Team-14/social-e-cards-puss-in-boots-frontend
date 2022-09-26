import axios from "axios"

const apiRoot = "https://powerful-island-75819.herokuapp.com"

const urls = {
    login: () => `${apiRoot}/api/auth/token/login/`,
    register: () => `${apiRoot}/api/auth/users/`,
    getCards: () => `${apiRoot}/ecard/`,
    getCard: (pk) => `${apiRoot}/ecard/${pk}/`,
    getComments: (pk) => `${apiRoot}/comments/${pk}/`,
}

const getCards = async () => {
    const data = await axios.get(urls.getCards()).then(res => res.data)
    return data.results
}

const getCard = async (pk) => {
    return await axios.get(urls.getCard(pk)).then(res => res.data)
}

export {
    getCards,
    getCard,
    urls,
}
