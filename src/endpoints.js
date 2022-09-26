import axios from "axios"

const apiRoot = "https://powerful-island-75819.herokuapp.com"

const urls = {
    login: () => `${apiRoot}/api/auth/token/login/`,
    register: () => `${apiRoot}/api/auth/users/`,
    getCards: () => `${apiRoot}/ecard/`,
    getComments: (pk) => `${apiRoot}/comments/${pk}/`,
}

const getCards = async () => {
    const data = await axios.get(urls.getCards()).then(res => res.data)
    return data.result.map(card => ({
        ...card,
        get comments() {
            return axios.get(urls.getComments(card.pk))
                .then(res => res.data)
        }
    }))
}

export {
    getCards,
    urls,
}
