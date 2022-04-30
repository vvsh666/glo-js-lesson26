'use strict'

const getData = (url) => {
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log('Ошибка: ' + error))
}

const sendData = (url, obj) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw 'сервер не найден'
        }
    })
    .then((json) => console.log(json))
    .catch(error => console.log('Ошибка: ' + error))
}

getData('./db.json').then(data => {
    sendData('https://jsonplaceholder.typicode.com/posts', data)
})

