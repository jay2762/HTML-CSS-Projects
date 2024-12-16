const container = document.getElementById("container");
const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD",
    "#D4A5A5", "#9B5DE5", "#F15BB5", "#00BBF9", "#00F5D4",
    "#FEE440", "#FF477E", "#7209B7", "#4361EE", "#4CC9F0",
    "#FF1493", "#00FF00", "#FF4500", "#9400D3", "#1E90FF",
    "#FFD700", "#32CD32", "#FF69B4", "#00FFFF", "#FF00FF"
];
const SQUARES = 225; // 15x15 grid
let currentMode = 'normal';

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const setColor = (square) => {
    if (currentMode === 'normal') {
        const color = getRandomColor();
        square.style.background = color;
        square.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`;
    }
}

const removeColor = (square) => {
    square.style.background = "#2d2d2d";
    square.style.boxShadow = "0 0 4px #000";
};

const createRipple = (event) => {
    const square = event.target;
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    square.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
};

// Create squares
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    
    square.addEventListener("mouseover", (e) => {
        setColor(square);
        createRipple(e);
    });
    
    square.addEventListener("mouseout", () => removeColor(square));
    
    container.appendChild(square);
}

// Mode controls
document.getElementById('normalMode').addEventListener('click', () => {
    currentMode = 'normal';
    container.className = 'container';
    clearBoard();
});

document.getElementById('rainbowMode').addEventListener('click', () => {
    currentMode = 'rainbow';
    container.className = 'container mode-rainbow';
    clearBoard();
});

document.getElementById('clearBoard').addEventListener('click', clearBoard);

function clearBoard() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.background = "#2d2d2d";
        square.style.boxShadow = "0 0 4px #000";
    });
}