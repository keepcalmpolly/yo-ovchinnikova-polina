var popup = document.querySelector('.popup')
var popupBtn = document.querySelector('.button-js')
var popupClose = document.querySelector('.close-js')

popupBtn.addEventListener('click', function() {
    console.log('кнопка нажата')
})

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup-open')
    
})

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup-open')
})