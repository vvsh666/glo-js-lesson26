'use strict'

let xhr = new XMLHttpRequest()
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')

const getData = (url) => {
    return fetch(url)
    .then(response => response.json())
    .catch(error => 'Ошибка: ' + error)
}

getData('./db.json').then(data => {
    console.log(data)
    xhr.send(JSON.stringify(data))
})

