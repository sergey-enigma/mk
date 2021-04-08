const player1 = {
  name: "Sub Zero",
  hp: 100,
  img: "img/subzero.gif"
};

const player2 = {
  name: "Scorpion",
  hp: 100,
  img: "img/scorpion.gif"
};

const weapons = ["Attack", "Super attack", "Ulta", "Fatality"];

createPlayer('Sub Zero', 'subzero.gif');
createPlayer('Scorpion', 'scorpion.gif');

function attack(player) {
  console.log(player.name + " Fight ...");
}

function createPlayer(playerName, playerImg) {
  const div = document.createElement('div');
  div.className = 'player1';

  const progressBar = document.createElement('div');
  const character = document.createElement('div');

  div.appendChild(progressBar);
  div.appendChild(character);

  const life = document.createElement('div');
  life.style.width = "100%";
  const name = document.createElement('div');
  name.htmlText = playerName;

  progressBar.appendChild(life);
  progressBar.appendChild(name);

  const img = document.createElement('img');
  img.src = playerImg;

  character.appendChild(img);
}
