function saludar(saludo) {
  return saludo;
}

function saludoRandom(saludos) {
  const random = Math.floor(Math.random() * saludos.length);
  return saludos[random];
}

const users = [
  {
    username: "pepito123",
  },
  {
    username: "pedro01",
  },
];

function getUsername(username) {
  const user = users.filter((user) => user.username === username);
  return user[0] || "Not found";
}

console.log(getUsername("pedro01"));
