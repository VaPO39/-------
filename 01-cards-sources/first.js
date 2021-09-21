function slidesPlugin(activeSlide=0) {
    const slides = document.querySelectorAll('.slide')
    for (const slide of slides) {

        slides[activeSlide].classList.add('active')
    
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
}
slidesPlugin()// сюда можем п6ередать значение от 0 до 5, и тот слайд номер которого передадим и будет открыт при запуске страницы