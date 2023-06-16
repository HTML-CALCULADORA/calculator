function display(val) {
    document.getElementById('result').innerHTML += val;
}
function clearScreen() {
    document.getElementById('result').innerHTML = "";
}
function solve() {
    let x = document.getElementById('result').innerHTML;
    let y = eval(x);
    document.getElementById('result').innerHTML = y;
    return y;
}
//modo oscuro
/* function cambiaTema() {
    alert(tema);
    if ([tema == 'lightnormal']) {
        document.documentElement.setAttribute('tema', 'darknormal');
    } else {
        document.documentElement.setAttribute('tema', 'lightnormal');
    }
} */
let nombre = document.getElementById('button amptext');
let nomodo = document.getElementById('button modo')
let temal = document.querySelector('body');
function cambiaTema() {
    let atributo = temal.getAttribute("tema");
    if (atributo == 'lightnormal') {
        temal.setAttribute('tema', 'darknormal');
        nomodo.innerHTML = 'Modo Claro';
    } else if (atributo == 'lightgrande') {
        temal.setAttribute('tema', 'darkgrande');
        nomodo.innerHTML = 'Modo Claro';
    } else if (atributo == 'darkgrande') {
        temal.setAttribute('tema', 'lightgrande');
        nomodo.innerHTML = 'Modo Oscuro';
    } else {
        temal.setAttribute('tema', 'lightnormal');
        nomodo.innerHTML = 'Modo Oscuro';
    }
}
//aumento texto
function aumTexto() {
    let atributo = temal.getAttribute("tema");
    if (atributo == 'lightnormal') {
        temal.setAttribute('tema', 'lightgrande');
        nombre.innerHTML = 'Reducir';
    } else if (atributo == 'darknormal') {
        temal.setAttribute('tema', 'darkgrande');
        nombre.innerHTML = 'Reducir';
    } else if (atributo == 'darkgrande') {
        temal.setAttribute('tema', 'darknormal');
        nombre.innerHTML = 'Ampliar';
    } else {
        temal.setAttribute('tema', 'lightnormal');
        nombre.innerHTML = 'Ampliar';
    }
}
/* function aumTexto() {
    if ([tema = "lightnormal"]) {
        document.documentElement.setAttribute('tema', 'lightgrande');
    }
    else if ([tema = "darknormal"]) {
        alert('2')
        document.documentElement.setAttribute('tema', 'darkgrande');
    }
    else {
        document.documentElement.setAttribute('tema', 'darknormal');
    }
} */
/* function cambiar() {
    var boton = document.getElementById('button amptext');
    if (boton.innerHTML == 'Ampliar') {
        boton.innerHTML = 'Reducir';
    }
    else { boton.innerHTML = 'Ampliar'; }
} */
/*Menu responsive*/
/* function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";
    navbar.classList.toggle(responsive_class_name);
} */

