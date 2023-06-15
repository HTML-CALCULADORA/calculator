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
function cambiaTema() {
  alert(tema.value);
      if ([tema="darknormal"]) {
          document.documentElement.setAttribute('tema', 'darknormal');
          
      } else {
          document.documentElement.setAttribute('tema', 'lightnormal');
        
      }
  }
let imp = document.getElementsByClassName('claro');
function modo() {
  for (let i = 0; i < imp.length; i++) {
      if (imp[i].className == 'claro' || imp[i].className == 'nada claro') {
          imp[i].classList.add('oscuro');
      } else {
          imp[i].classList.remove('oscuro')
      }
  }
}
