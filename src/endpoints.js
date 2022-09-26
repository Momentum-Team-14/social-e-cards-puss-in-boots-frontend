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
    return data.results.map(card => ({
        ...card,
        get comments() {
            // return axios.get(urls.getComments(card.pk))
            //     .then(res => res.data)
            return axios.get(`${apiRoot}/comments/`)
                .then(res => res.data.results
                    .filter(comment => comment.card === card.pk))
        }
    }))
}

export {
    getCards,
    urls,
}
