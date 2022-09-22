const apiRoot = "https://powerful-island-75819.herokuapp.com"

const Urls = {
    login: () => `${apiRoot}/api/auth/token/login`,
    register: () => `${apiRoot}/api/auth/users`,
    getCards: () => `${apiRoot}/ecard`,
}

export default Urls
