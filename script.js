const dino = document.getElementById("dino");
const game = document.querySelector(".game");
const gameOverText = document.getElementById("gameOver");

let isJumping = false;
let isGameOver = false;
let jumpTimeout;
let holdTimeout;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        if (isGameOver) {
            restartGame();
        } else if (!isJumping) {
            jump();
        }
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code === "Space" && isJumping) {
        clearTimeout(holdTimeout);
        holdTimeout = null;
        fall();
    }
});

function jump() {
    isJumping = true;
    dino.classList.add("jump");

    // Устанавливаем время зависания в воздухе
    holdTimeout = setTimeout(fall, 500); // 500ms зависания
}

function fall() {
    if (isJumping) {
        dino.classList.remove("jump");
        isJumping = false;
    }
}

function createCactus() {
    if (isGameOver) return;

    const cactus = document.createElement("div");
    cactus.classList.add("cactus");
    game.appendChild(cactus);

    cactus.addEventListener('animationend', () => {
        cactus.remove();
    });

    // Генерация нового кактуса через случайное время (между 1000 и 2000 мс)
    setTimeout(createCactus, Math.random() * 1000 + 1000);
}

function startGame() {
    isGameOver = false;
    gameOverText.style.display = 'none';
    dino.style.bottom = '0px';
    createCactus();
    isAlive = setInterval(checkCollision, 10);
}

function checkCollision() {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusList = document.querySelectorAll(".cactus");

    cactusList.forEach(cactus => {
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        // Проверка на столкновение
        if (cactusLeft < 100 && cactusLeft > 50 && dinoBottom <= 50) {
            gameOver();
        }
    });
}

function gameOver() {
    isGameOver = true;

    if (gameOverText) {
        gameOverText.style.display = 'block';
    }

    let cactusList = document.querySelectorAll(".cactus");
    cactusList.forEach(cactus => cactus.remove());

    clearInterval(isAlive);
}

function restartGame() {
    let cactusList = document.querySelectorAll(".cactus");
    cactusList.forEach(cactus => cactus.remove());

    startGame();
}

startGame();
