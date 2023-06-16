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
function cambiaTema(activo) {
  if (activo=='moon') {
      document.documentElement.setAttribute('tema', 'darknormal');
      document.getElementById('id-sun').classList.remove('active')
      document.getElementById('id-moon').classList.add('active')     
  } else {
      document.documentElement.setAttribute('tema', 'lightnormal');
      document.getElementById('id-moon').classList.remove('active')
      document.getElementById('id-sun').classList.add('active') 
  }
}
/*Funcion para menú responsive*/
function onMenuClick() {
  var navbar = document.getElementById("navigation-bar");
  var responsive_class_name = "responsive";
  navbar.classList.toggle(responsive_class_name);
}
