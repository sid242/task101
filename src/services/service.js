import axios from "axios"

let config = {
    headers: {
        'Authorization': 'Bearer ' + 'cac6d785467b8ff4532269ca5ce205f9ea9d266a79c84befdeb08311d501e480'
    }
}
const BASE_URL = 'https://gorest.co.in/public/v2/users/'

export const getUsersService = async (userId = '') => {
    var userData
    await axios.get(
        `${BASE_URL}${userId}`,
        config
    )
        .then((response) => {
            userData = response.data
        })
        .catch((e) => console.log(e.message))

    return userData
}

export const addUserService = async (user) => {
    await axios.post(BASE_URL, user,
        config)
        .then((response) => {
            console.log(response);
        })
        .catch((e) => console.log(e.message))
}

export const deleteUserService = async (id) => {
    await axios.delete(`${BASE_URL}${id}`,
        config)
        .then((response) => {
            console.log(response);
        })
        .catch((e) => console.log(e.message))
}

export const editUserService = async (user, id) => {
    await axios.put(`${BASE_URL}${id}`, user,
        config)
        .then((response) => {
            console.log(response);
        })
        .catch((e) => console.log(e.message))
}