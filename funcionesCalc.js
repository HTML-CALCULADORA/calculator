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

let nombre = document.getElementById('button amptext');
let nomodo = document.getElementById('button modo')
let temal = document.querySelector('body');
function cambiaTema() {
    let atributo = temal.getAttribute("tema");
    if (atributo == 'lightnormal') {
        temal.setAttribute('tema', 'darknormal');
        nomodo.innerHTML = 'Modo Claro';
        document.getElementById('id-sun').classList.remove('active');
        document.getElementById('id-moon').classList.add('active');     } else if (atributo == 'lightgrande') {
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
/*Funcion para menú responsive*/
function onMenuClick() {
  var navbar = document.getElementById("navigation-bar");
  var responsive_class_name = "responsive";
  navbar.classList.toggle(responsive_class_name);
}
