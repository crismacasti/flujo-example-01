function saludar(saludo) {
  return saludo;
}

function saludoRandom(saludos) {
  const random = Math.floor(Math.random() * saludos.length);
  return saludos[random];
}
