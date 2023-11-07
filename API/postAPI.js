import axios from 'axios'

export function getPosts() {
    const url = 'https://lynx.jamy-app.fr/api/api/posts'
    return new Promise((resolve, reject) => {
        return axios.get(url).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        });
    });
}
