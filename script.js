'use strict'

const getData = (url) => {
    return fetch(url)
    .then(response => response.json())
    .catch(error => 'Ошибка: ' + error)
}

const setData = (url, obj) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => 'Ошибка: ' + error)
}

getData('./db.json').then(data => {
    setData('https://jsonplaceholder.typicode.com/posts', data)
})

