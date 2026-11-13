function celsiusParaFahrenheit(c) {
  return c * 9 / 5 + 32;
}

function celsiusParaKelvin(c) {
  return c + 273.15;
}

function converter() {
  const c = parseFloat(document.getElementById("celsius").value);
  document.getElementById("resultado").innerHTML =
    `${c}°C = ${celsiusParaFahrenheit(c).toFixed(1)}°F<br>` +
    `${c}°C = ${celsiusParaKelvin(c).toFixed(2)}K`;
}
