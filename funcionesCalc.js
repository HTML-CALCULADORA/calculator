function display(val) {
  result.innerHTML += val;
}
function clearScreen() {
  result.innerHTML = "";
}
function solve() {
  let x = result.innerHTML;
  let y = eval(x);
  result.innerHTML = y;
  return y;
}
function borrar() {
  let borrado = result.innerHTML;
  borrado = borrado.slice(0, borrado.length - 1);
  result.innerHTML = borrado;
}

//modo oscuro
let nombre = document.getElementById("button amptext");
let nomodo = document.getElementById("button modo");
let texto = document.getElementById("lupa");
let modo = document.getElementById("luna");
let temal = document.querySelector("body");
function cambiaTema() {
  let atributo = temal.getAttribute("tema");
  if (atributo == "lightnormal") {
    temal.setAttribute("tema", "darknormal");
    modo.classList.replace("fa-moon", "fa-sun");
  } else if (atributo == "lightgrande") {
    temal.setAttribute("tema", "darkgrande");
    modo.classList.replace("fa-moon", "fa-sun");
  } else if (atributo == "darkgrande") {
    temal.setAttribute("tema", "lightgrande");
    modo.classList.replace("fa-sun", "fa-moon");
  } else {
    temal.setAttribute("tema", "lightnormal");
    modo.classList.replace("fa-sun", "fa-moon");
  }
}
//aumento texto
function aumTexto() {
  let atributo = temal.getAttribute("tema");
  if (atributo == "lightnormal") {
    temal.setAttribute("tema", "lightgrande");
    texto.classList.replace(
      "fa-magnifying-glass-plus",
      "fa-magnifying-glass-minus"
    );
  } else if (atributo == "darknormal") {
    temal.setAttribute("tema", "darkgrande");
    texto.classList.replace(
      "fa-magnifying-glass-plus",
      "fa-magnifying-glass-minus"
    );
  } else if (atributo == "darkgrande") {
    temal.setAttribute("tema", "darknormal");
    texto.classList.replace(
      "fa-magnifying-glass-minus",
      "fa-magnifying-glass-plus"
    );
  } else {
    temal.setAttribute("tema", "lightnormal");
    texto.classList.replace(
      "fa-magnifying-glass-minus",
      "fa-magnifying-glass-plus"
    );
  }
}
/*Menu responsive*/
function onMenuClick() {
  var navbar = document.getElementById("navigation-bar");
  var responsive_class_name = "responsive";
  navbar.classList.toggle(responsive_class_name);
}
