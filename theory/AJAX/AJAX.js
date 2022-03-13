'use strict'

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd')

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    //request.open(method, url, async, login, password)
    request.open('GET', 'theory/AJAX/current.json')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send() // при post запросе передаем внутрь body - formData*

    //свойства
    //status
    //statusText
    //response
    //readyState

    request.addEventListener('readystatechange', () => { //статус готовности запроса в конкретный момент
        if (request.readyState === 4 && request.status === 200){
            inputUsd.value = (+inputRub.value / JSON.parse(request.response).current.usd).toFixed(2)
        } else {
            inputUsd.value = 'Что-то пошло не так'
        }
    })
})