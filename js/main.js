//создаем переменную, в которой положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// создаем переменую, в которую положим меню 
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle('visible');

})