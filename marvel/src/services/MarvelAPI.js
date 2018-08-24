import axios from 'axios'
import md5 from 'md5'
const urlBaseMarvel = 'https://gateway.marvel.com/v1/public/'
const apiKey = 'f2aef569ee6f38276c60b9264d1dec2b'
const HashKeys = '0126a49f00e1063a8f441de67dfd56090cb24be6'
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