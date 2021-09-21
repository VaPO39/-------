const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    
    slide.addEventListener('click', () => {
        clearActiveClasses()// вставим сюда, что бы по клику работала и эта функция, то есть удаление предыдущего клика, и активация нового
     slide.classList.add('active')   
    })
}
function clearActiveClasses() {
    slides.forEach((slide) => {// на каждой итерации будем получать slide и функцией remove отключать active
        slide.classList.remove('active')
    })
}