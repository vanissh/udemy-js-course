/*inline стили являются приоритетными

box.style.width = '500px' - указываем единицы 

box.style.cssText = `background-color: red; width: ${num}px` - позволяет прописывать свойства 
                                            в строку в css стиле

** getElementBy... - возвращает коллекцию
**querySelector - NodeList - его можно итерировать циклом forEach

*/ 


//Обработчики событий 

let i = 0
const deleteElement = e => {
    console.log(e.target)
    i++
    if(i === 1){
        btn.removeEventListener('click', deleteElement)
    }
}

btn.addEventListener('click', deleteElement)  //удаление обработчика события с кнопки


//альтернативой является передача 3 параметра {once: true}