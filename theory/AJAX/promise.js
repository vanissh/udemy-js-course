console.log('Запрос данных...')

const req = new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log('Подготовка данных...')

        const product = {
            name: 'TV',
            price: 2000
        }

        if(product){
            resolve(product) //вызываю в том случае, когда промис благополучно выполнился
        } else {
           reject('error') // ошибка, например данные с сервера не были получены
        }

    }, 2000)

}).then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true

            resolve(data)
        }, 2000)
    })
    
})
.then(data => console.log(data))
.catch(error => console.log(error))
.finally(data => console.log('щищ'))

const test = time => new Promise(resolve => {
    setTimeout(() => resolve(), time)
})

// test(1000).then(() => console.log('1000 ms'))
// test(2000).then(() => console.log('2000 ms'))

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All promises is done') //например, когда запрашиваем данные на разные сервера, но информацию
                                    //нужно использовать одновременно и сразу
})

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('one') //при выполнении хотя бы одного 
})