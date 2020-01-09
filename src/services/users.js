import Http from 'axios'

Http.defaults.headers = {
    "Content-Type": "application/json"
}

const Login = (email, password) => {
    return Http.get(
        `http://127.0.0.1:3000/users?email=${email}&password=${password}`
    )
}

const Exist = (email) => {
    return Http.get(
        `http://127.0.0.1:3000/users?email=${email}`
    )
}

const Signup = (firstname, lastname, email, password) => {
    return Http.post(
        `http://127.0.0.1:3000/users`,
        {
            firstname,
            lastname,
            email,
            password
        }
    )
}

export default {
    Login, Signup, Exist
}
