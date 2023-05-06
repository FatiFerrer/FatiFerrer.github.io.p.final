let playerScore = 0;
let machineScore = 0;

const playerScoreElement = document.querySelector(".player-score");
const machineScoreElement = document.querySelector(".machine-score");
const resultElement = document.querySelector(".result p");
const resetButton = document.querySelector(".reset button");

// Función para generar la elección aleatoria de la máquina
function machineChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Función para comparar las elecciones del jugador y la máquina y determinar el ganador
function compareChoices(playerChoice, machineChoice) {
  if (
    (playerChoice === "rock" && machineChoice === "scissors") ||
    (playerChoice === "paper" && machineChoice === "rock") ||
    (playerChoice === "scissors" && machineChoice === "paper")
  ) {
    return "player";
  } else if (playerChoice === machineChoice) {
    return "tie";
  } else {
    return "machine";
  }
}

// Función para actualizar la puntuación y mostrar el resultado
function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
    playerScoreElement.textContent = playerScore;
    resultElement.textContent = "¡Ganaste!";
  } else if (winner === "machine") {
    machineScore++;
    machineScoreElement.textContent = machineScore;
    resultElement.textContent = "Perdiste :(";
  } else {
    resultElement.textContent = "Empate";
  }
}

// Función para deshabilitar los botones después de hacer una elección
function disableButtons() {
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

// Función para habilitar los botones después de reiniciar la partida
function enableButtons() {
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// Función para reiniciar la partida
function resetGame() {
  playerScore = 0;
  machineScore = 0;
  playerScoreElement.textContent = 0;
  machineScoreElement.textContent = 0;
  resultElement.textContent = "";
  enableButtons();
  resetButton.style.display = "none";
}

// Función principal para ejecutar el juego
function playGame(playerChoice) {
  const machineChoiceValue = machineChoice();
  const result = compareChoices(playerChoice, machineChoiceValue);
  updateScore(result);

  if (playerScore === 5) {
    resultElement.textContent = "¡Felicidades, ganaste la partida!";
    disableButtons();
    resetButton.style.display = "block";
  } else if (machineScore === 5) {
    resultElement.textContent = "Lo siento, perdiste la partida :(";
    disableButtons();
    resetButton.style.display = "block";
  }
}

// Agregar eventos a los botones
const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => {
  playGame("rock");
});

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => {
  playGame("paper");
});

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () => {
  playGame("scissors");
});

// Agregar evento al botón de reiniciar partida

resetButton.addEventListener("click", resetGame);
