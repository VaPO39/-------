const item = document.querySelector('.taschi')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstartf)
item.addEventListener('dragend',dragendf)

for (const placeholder of placeholders) {//берем элементы placeholder из масива placeholders
    placeholder.addEventListener('dragover',dragover)//вызывается, когда элемент который мы  перетаскиваем находится над zzz placeholder
    placeholder.addEventListener('dragenter',dragenter)// когда мы заходим на территорию zzz placeholder
    placeholder.addEventListener('dragleave',dragleave)// когда перетащили, но вышли
    placeholder.addEventListener('drop',dragdrop)// когда отпустили
}
function dragstartf(sobitie) {
    console.log('drag start', sobitie.target)
    sobitie.target.classList.add('hold')
    setTimeout(()=>sobitie.target.classList.add('hide'),0)//добавим ожидания, что бы кнопка сразу не пряталась, я ждала
   
}
function dragendf(sobitie){
 
    sobitie.target.className='taschi' // тут происходит перетерание всех созданных классов, класснеймом , далее аналогичный код  sobitie.target.classList.remove('hold','hide')// удаление выделения и скрытия
   
}
function dragover(sobitie) {
    sobitie.preventDefault()
  
}
function dragenter(sobitie) {
    sobitie.target.classList.add('hovered')// произошло создание класса, его необходимо реализовать и сделать что с ним в css подчеркивание блока
    
}
function dragleave(sobitie) {
    sobitie.target.classList.remove('hovered')

    
    
}
function dragdrop(sobitie) {
    sobitie.target.classList.remove('hovered')
    sobitie.target.append(item)

    
}
