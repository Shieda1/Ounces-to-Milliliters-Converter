// https://www.omnicalculator.com/conversion/oz-ounces-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const millilitersRadio = document.getElementById('millilitersRadio');
const ouncesRadio = document.getElementById('ouncesRadio');

let milliliters;
let ounces = v; 

// labels of the inpust
const variable = document.getElementById('variable');

millilitersRadio.addEventListener('click', function() {
  variable.textContent = 'ounces';
  ounces = v;
  result.textContent = '';
});

ouncesRadio.addEventListener('click', function() {
  variable.textContent = 'milliliters';
  milliliters = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(millilitersRadio.checked)
    result.textContent = `milliliters = ${computemilliliters().toFixed(5)}`;

  else if(ouncesRadio.checked)
    result.textContent = `ounces = ${computeounces().toFixed(5)}`;
})

// calculation

function computemilliliters() {
  return Number(ounces.value) * 29.574;
}

function computeounces() {
  return Number(milliliters.value) / 29.574;
}