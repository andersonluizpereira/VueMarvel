import axios from 'axios'
import md5 from 'md5'
const urlBaseMarvel = 'https://gateway.marvel.com/v1/public/'
const apiKey = ''
const HashKeys = ''
var date = new Date()
var ts = date.getTime()
var hash = md5(ts + HashKeys + apiKey)


export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'comics?ts=' + ts + '&apikey=' + apiKey + '&hash=' + hash + '&limit=' + limit
        console.log(urlComics)
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics)
            }
        })
    }
}