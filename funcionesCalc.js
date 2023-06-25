let ejecucion = document.getElementById('displayScreen');


function display(val) {
    if (ejecucion.innerHTML == "ejecutado"){
        ejecucion.innerHTML = "Se debe hacer algo aqui"
        document.getElementById('result').innerHTML = val;
        
    }else{
        let x = document.getElementById('result').innerHTML;
        if (x==="0"){
            document.getElementById('result').innerHTML = val;
            } else{
            document.getElementById('result').innerHTML += val;
        }
    }
}
function operar(val) {
    if (ejecucion.innerHTML == "ejecutado"){
        document.getElementById('result').innerHTML += val;
        
    }else{
        let x = document.getElementById('result').innerHTML;
        if (x==="0"){
            document.getElementById('result').innerHTML = val;
            } else{
            document.getElementById('result').innerHTML += val;
        }
    }
}

function borrar(){
    let x = document.getElementById('result').innerHTML;
    if ( x.length===1 || x==="Error!"){
        
        document.getElementById('result').innerHTML = "0" ;
       
    } else {
        let y = x.slice(0,-1);
    document.getElementById('result').innerHTML = y;
    }}
function inicio(){
    document.getElementById('result').innerHTML = "0";
    
}
function clearScreen() {
    document.getElementById('result').innerHTML = "0";
}
function solve() {
    let x = document.getElementById('result').innerHTML;
    ejecucion.innerHTML="ejecutado";
    
        try {
            let y = eval(x);
            document.getElementById('result').innerHTML = y;
            return y;
        } catch  {
            document.getElementById('result').innerHTML = "Error!";
            return
        }
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
let nomodo = document.getElementById('button modo');
let texto = document.getElementById('lupa');
let modo = document.getElementById('luna');
let temal = document.querySelector('body');
function cambiaTema() {
    let atributo = temal.getAttribute("tema");
    if (atributo == 'lightnormal') {
        temal.setAttribute('tema', 'darknormal');
        modo.classList.replace('fa-moon', 'fa-sun');
    } else if (atributo == 'lightgrande') {
        temal.setAttribute('tema', 'darkgrande');
        modo.classList.replace('fa-moon', 'fa-sun');
    } else if (atributo == 'darkgrande') {
        temal.setAttribute('tema', 'lightgrande');
        modo.classList.replace('fa-sun', 'fa-moon');
    } else {
        temal.setAttribute('tema', 'lightnormal');
        modo.classList.replace('fa-sun', 'fa-moon');
    }
}
//aumento texto
function aumTexto() {
    let atributo = temal.getAttribute("tema");
    if (atributo == 'lightnormal') {
        temal.setAttribute('tema', 'lightgrande');
        texto.classList.replace('fa-magnifying-glass-plus', 'fa-magnifying-glass-minus');
    } else if (atributo == 'darknormal') {
        temal.setAttribute('tema', 'darkgrande');
        texto.classList.replace('fa-magnifying-glass-plus', 'fa-magnifying-glass-minus');
    } else if (atributo == 'darkgrande') {
        temal.setAttribute('tema', 'darknormal');
        texto.classList.replace('fa-magnifying-glass-minus', 'fa-magnifying-glass-plus');
    } else {
        temal.setAttribute('tema', 'lightnormal');
        texto.classList.replace('fa-magnifying-glass-minus', 'fa-magnifying-glass-plus');
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
function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";
    navbar.classList.toggle(responsive_class_name);
}

