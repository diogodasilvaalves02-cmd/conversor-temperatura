function celsiusParaFahrenheit(c) {
  return c * 9 / 5 + 32;
}

function converter() {
  const c = parseFloat(document.getElementById("celsius").value);
  document.getElementById("resultado").innerHTML =
    `${c}°C = ${celsiusParaFahrenheit(c).toFixed(1)}°F`;
}
