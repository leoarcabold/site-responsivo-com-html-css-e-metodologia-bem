var alternador = document.querySelector('.js-botao-chaveador');
var alternadorItem = document.querySelector('.js-menu');

alternador.onclick = function botao () {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo');
}

alternadorItem.onclick = function () {
    var menuItem = document.querySelector('.js-menu');
    menuItem.classList.toggle('menu--exibindo');
}

