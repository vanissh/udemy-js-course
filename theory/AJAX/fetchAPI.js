//GET-запрос

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response))
  //.then(json => console.log(json))

//POST-запрос

fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: "POST",
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
  .then(response => response.json())
  .then(json => console.log(json))