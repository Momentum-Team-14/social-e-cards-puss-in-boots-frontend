const apiRoot = "127.0.0.1"

const Urls = {
    login: () => `${apiRoot}/api/auth/token/login`,
    register: () => `${apiRoot}/api/auth/users`,
}

export default Urls
