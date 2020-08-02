import axios from 'axios'

const tarot = axios.create({
    baseURL: 'https://rws-cards-api.herokuapp.com/api/v1',
})

export const getCards = (n = 13) => {
    return tarot.get(`/random?n=${n}`)
}

export default getCards