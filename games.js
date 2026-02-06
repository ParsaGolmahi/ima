// ========== کد بازی‌های جدید ==========

// متغیرهای بازی‌ها
let currentGameId = null;
let guessNumber = 0;
let guessCount = 0;
let speedGameTimer = null;
let speedGameTime = 30;
let speedGameScore = 0;
let speedGameActive = false;
let multiplyScore = 0;
let multiplyCurrentQuestion = {};
let memoryCards = [];
let memoryFlipped = [];
let memoryMoves = 0;
let memoryPairsFound = 0;

// ========== توابع مدیریت نمایش بازی‌ها ==========
function showGame(gameId) {
    // مخفی کردن لیست بازی‌ها
    document.querySelectorAll('.game-card').forEach(card => {
        card.parentElement.style.display = 'none';
    });
    
    // نمایش بازی انتخاب شده
    document.getElementById('activeGame').style.display = 'block';
    document.querySelectorAll('.game-container').forEach(game => {
        game.style.display = 'none';
    });
    
    const gameElement = document.getElementById(`game-${gameId}`);
    if (gameElement) {
        gameElement.style.display = 'block';
        currentGameId = gameId;
        
        // فعال‌سازی بازی
        switch(gameId) {
            case 'guess':
                startNewGuessGame();
                break;
            case 'multiply':
                generateMultiplyQuestion();
                break;
            case 'memory':
                startMemoryGame();
                break;
            case 'puzzle':
                startPuzzleGame();
                break;
        }
    }
}

function hideGame() {
    document.getElementById('activeGame').style.display = 'none';
    document.querySelectorAll('.game-card').forEach(card => {
        card.parentElement.style.display = 'grid';
    });
    
    // متوقف کردن بازی‌های فعال
    if (speedGameTimer) {
        clearInterval(speedGameTimer);
        speedGameTimer = null;
        speedGameActive = false;
    }
    
    currentGameId = null;
}

// ========== بازی 1: حدس عدد ==========
function startNewGuessGame() {
    guessNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
    document.getElementById('guessCount').textContent = '0';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessHint').innerHTML = 'برای شروع، یک عدد حدس بزنید!';
    document.getElementById('guessHint').style.background = '#f8f9fa';
    document.getElementById('guessHint').style.color = '#333';
}

function makeGuess() {
    const input = document.getElementById('guessInput');
    const guess = parseInt(input.value);
    const hintDiv = document.getElementById('guessHint');
    
    if (!guess || guess < 1 || guess > 100) {
        alert('لطفاً عددی بین 1 تا 100 وارد کنید');
        return;
    }
    
    guessCount++;
    document.getElementById('guessCount').textContent = guessCount;
    
    if (guess === guessNumber) {
        hintDiv.innerHTML = `🎉 آفرین! عدد ${guessNumber} را با ${guessCount} حدس پیدا کردی!`;
        hintDiv.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
        hintDiv.style.color = 'white';
        
        setTimeout(() => {
            if (confirm('بازی جدید شروع کنیم؟')) {
                startNewGuessGame();
            }
        }, 2000);
    } else if (guess < guessNumber) {
        hintDiv.innerHTML = `⬆️ عدد من از ${guess} بزرگتر است!`;
        hintDiv.style.background = '#fff3cd';
        hintDiv.style.color = '#856404';
    } else {
        hintDiv.innerHTML = `⬇️ عدد من از ${guess} کوچکتر است!`;
        hintDiv.style.background = '#f8d7da';
        hintDiv.style.color = '#721c24';
    }
    
    input.value = '';
    input.focus();
}

// اجازه Enter برای حدس زدن
document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    if (guessInput) {
        guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') makeGuess();
        });
    }
});

// ========== بازی 2: محاسبات سریع ==========
function startSpeedGame() {
    speedGameTime = 30;
    speedGameScore = 0;
    speedGameActive = true;
    
    document.getElementById('speedTime').textContent = speedGameTime;
    document.getElementById('speedScore').textContent = speedGameScore;
    document.getElementById('speedAnswer').disabled = false;
    document.getElementById('speedAnswer').value = '';
    document.getElementById('speedStartBtn').disabled = true;
    
    generateSpeedQuestion();
    
    speedGameTimer = setInterval(() => {
        speedGameTime--;
        document.getElementById('speedTime').textContent = speedGameTime;
        
        if (speedGameTime <= 0) {
            endSpeedGame();
        }
    }, 1000);
    
    document.getElementById('speedAnswer').focus();
}

function generateSpeedQuestion() {
    const operations = ['+', '-', '×'];
    const op = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, answer;
    
    switch(op) {
        case '+':
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 50) + 20;
            num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            answer = num1 - num2;
            break;
        case '×':
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            answer = num1 * num2;
            break;
    }
    
    document.getElementById('speedQuestion').textContent = `${num1} ${op} ${num2} = ?`;
    document.getElementById('speedQuestion').dataset.answer = answer;
}

function checkSpeedAnswer() {
    if (!speedGameActive) return;
    
    const answerInput = document.getElementById('speedAnswer');
    const userAnswer = parseInt(answerInput.value);
    const correctAnswer = parseInt(document.getElementById('speedQuestion').dataset.answer);
    
    if (userAnswer === correctAnswer) {
        speedGameScore += 10;
        document.getElementById('speedScore').textContent = speedGameScore;
        generateSpeedQuestion();
        answerInput.value = '';
        
        // افکت درست
        document.getElementById('speedQuestion').style.color = '#43e97b';
        setTimeout(() => {
            document.getElementById('speedQuestion').style.color = '#333';
        }, 200);
    } else {
        // افکت غلط
        document.getElementById('speedQuestion').style.color = '#f5576c';
        setTimeout(() => {
            document.getElementById('speedQuestion').style.color = '#333';
        }, 200);
    }
    
    answerInput.focus();
}

function endSpeedGame() {
    clearInterval(speedGameTimer);
    speedGameActive = false;
    document.getElementById('speedAnswer').disabled = true;
    document.getElementById('speedStartBtn').disabled = false;
    
    alert(`بازی تمام شد!\nامتیاز شما: ${speedGameScore}`);
    
    document.getElementById('speedQuestion').textContent = 'برای شروع دکمه را بزنید';
}

// اجازه Enter برای بازی سرعت
document.addEventListener('DOMContentLoaded', () => {
    const speedAnswer = document.getElementById('speedAnswer');
    if (speedAnswer) {
        speedAnswer.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkSpeedAnswer();
        });
    }
});

// ========== بازی 3: جدول ضرب ==========
function generateMultiplyQuestion() {
    const tableSelect = document.getElementById('multiplyTable');
    const selectedTable = tableSelect.value;
    
    let num1, num2;
    
    if (selectedTable === 'all') {
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
    } else {
        num1 = parseInt(selectedTable);
        num2 = Math.floor(Math.random() * 12) + 1;
    }
    
    multiplyCurrentQuestion = {
        num1: num1,
        num2: num2,
        answer: num1 * num2
    };
    
    document.getElementById('multiplyQuestion').textContent = `${num1} × ${num2} = ?`;
    document.getElementById('multiplyAnswer').value = '';
    document.getElementById('multiplyAnswer').focus();
    hideFeedback();
}

function checkMultiplyAnswer() {
    const answerInput = document.getElementById('multiplyAnswer');
    const userAnswer = parseInt(answerInput.value);
    const feedbackDiv = document.getElementById('multiplyFeedback');
    
    if (!userAnswer) {
        alert('لطفاً پاسخ را وارد کنید');
        return;
    }
    
    if (userAnswer === multiplyCurrentQuestion.answer) {
        multiplyScore += 10;
        document.getElementById('multiplyScore').textContent = multiplyScore;
        
        feedbackDiv.textContent = `✅ آفرین! ${multiplyCurrentQuestion.num1} × ${multiplyCurrentQuestion.num2} = ${multiplyCurrentQuestion.answer}`;
        feedbackDiv.style.background = '#d4edda';
        feedbackDiv.style.color = '#155724';
        feedbackDiv.style.display = 'block';
        
        setTimeout(() => {
            generateMultiplyQuestion();
        }, 1500);
    } else {
        feedbackDiv.textContent = `❌ غلط! پاسخ درست: ${multiplyCurrentQuestion.answer}`;
        feedbackDiv.style.background = '#f8d7da';
        feedbackDiv.style.color = '#721c24';
        feedbackDiv.style.display = 'block';
        
        setTimeout(() => {
            hideFeedback();
            answerInput.value = '';
            answerInput.focus();
        }, 2000);
    }
}

function skipMultiplyQuestion() {
    generateMultiplyQuestion();
}

function hideFeedback() {
    document.getElementById('multiplyFeedback').style.display = 'none';
}

// اجازه Enter برای جدول ضرب
document.addEventListener('DOMContentLoaded', () => {
    const multiplyAnswer = document.getElementById('multiplyAnswer');
    if (multiplyAnswer) {
        multiplyAnswer.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkMultiplyAnswer();
        });
    }
});

// ========== بازی 4: پازل 2048 ==========
let puzzleBoard = [];
let puzzleScore = 0;

function startPuzzleGame() {
    puzzleBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    puzzleScore = 0;
    document.getElementById('puzzleScore').textContent = '0';
    
    addRandomTile();
    addRandomTile();
    renderPuzzleBoard();
}

function addRandomTile() {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (puzzleBoard[i][j] === 0) {
                emptyCells.push({i, j});
            }
        }
    }
    
    if (emptyCells.length > 0) {
        const {i, j} = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        puzzleBoard[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
}

function renderPuzzleBoard() {
    const boardDiv = document.getElementById('puzzleBoard');
    boardDiv.innerHTML = '';
    boardDiv.style.display = 'grid';
    boardDiv.style.gridTemplateColumns = 'repeat(4, 100px)';
    boardDiv.style.gap = '10px';
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement('div');
            const value = puzzleBoard[i][j];
            
            cell.style.width = '100px';
            cell.style.height = '100px';
            cell.style.background = getTileColor(value);
            cell.style.borderRadius = '8px';
            cell.style.display = 'flex';
            cell.style.alignItems = 'center';
            cell.style.justifyContent = 'center';
            cell.style.fontSize = value > 99 ? '24px' : '32px';
            cell.style.fontWeight = 'bold';
            cell.style.color = value > 4 ? 'white' : '#776e65';
            cell.style.transition = 'all 0.2s';
            
            if (value > 0) {
                cell.textContent = value;
            }
            
            boardDiv.appendChild(cell);
        }
    }
}

function getTileColor(value) {
    const colors = {
        0: '#cdc1b4',
        2: '#eee4da',
        4: '#ede0c8',
        8: '#f2b179',
        16: '#f59563',
        32: '#f67c5f',
        64: '#f65e3b',
        128: '#edcf72',
        256: '#edcc61',
        512: '#edc850',
        1024: '#edc53f',
        2048: '#edc22e'
    };
    return colors[value] || '#3c3a32';
}

function movePuzzle(direction) {
    let moved = false;
    const oldBoard = JSON.stringify(puzzleBoard);
    
    if (direction === 'left') moved = moveLeft();
    else if (direction === 'right') moved = moveRight();
    else if (direction === 'up') moved = moveUp();
    else if (direction === 'down') moved = moveDown();
    
    if (moved && JSON.stringify(puzzleBoard) !== oldBoard) {
        addRandomTile();
        renderPuzzleBoard();
        document.getElementById('puzzleScore').textContent = puzzleScore;
        
        if (checkGameOver()) {
            setTimeout(() => {
                alert(`بازی تمام شد!\nامتیاز شما: ${puzzleScore}`);
            }, 300);
        }
    }
}

function moveLeft() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        const row = puzzleBoard[i].filter(val => val !== 0);
        for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
                row[j] *= 2;
                puzzleScore += row[j];
                row.splice(j + 1, 1);
                moved = true;
            }
        }
        while (row.length < 4) row.push(0);
        if (JSON.stringify(row) !== JSON.stringify(puzzleBoard[i])) moved = true;
        puzzleBoard[i] = row;
    }
    return moved;
}

function moveRight() {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        const row = puzzleBoard[i].filter(val => val !== 0);
        for (let j = row.length - 1; j > 0; j--) {
            if (row[j] === row[j - 1]) {
                row[j] *= 2;
                puzzleScore += row[j];
                row.splice(j - 1, 1);
                moved = true;
            }
        }
        while (row.length < 4) row.unshift(0);
        if (JSON.stringify(row) !== JSON.stringify(puzzleBoard[i])) moved = true;
        puzzleBoard[i] = row;
    }
    return moved;
}

function moveUp() {
    let moved = false;
    for (let j = 0; j < 4; j++) {
        const column = [];
        for (let i = 0; i < 4; i++) column.push(puzzleBoard[i][j]);
        
        const col = column.filter(val => val !== 0);
        for (let i = 0; i < col.length - 1; i++) {
            if (col[i] === col[i + 1]) {
                col[i] *= 2;
                puzzleScore += col[i];
                col.splice(i + 1, 1);
                moved = true;
            }
        }
        while (col.length < 4) col.push(0);
        
        for (let i = 0; i < 4; i++) {
            if (puzzleBoard[i][j] !== col[i]) moved = true;
            puzzleBoard[i][j] = col[i];
        }
    }
    return moved;
}

function moveDown() {
    let moved = false;
    for (let j = 0; j < 4; j++) {
        const column = [];
        for (let i = 0; i < 4; i++) column.push(puzzleBoard[i][j]);
        
        const col = column.filter(val => val !== 0);
        for (let i = col.length - 1; i > 0; i--) {
            if (col[i] === col[i - 1]) {
                col[i] *= 2;
                puzzleScore += col[i];
                col.splice(i - 1, 1);
                moved = true;
            }
        }
        while (col.length < 4) col.unshift(0);
        
        for (let i = 0; i < 4; i++) {
            if (puzzleBoard[i][j] !== col[i]) moved = true;
            puzzleBoard[i][j] = col[i];
        }
    }
    return moved;
}

function checkGameOver() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (puzzleBoard[i][j] === 0) return false;
            if (j < 3 && puzzleBoard[i][j] === puzzleBoard[i][j + 1]) return false;
            if (i < 3 && puzzleBoard[i][j] === puzzleBoard[i + 1][j]) return false;
        }
    }
    return true;
}

// کنترل کلیدها برای بازی 2048
document.addEventListener('keydown', (e) => {
    if (currentGameId !== 'puzzle') return;
    
    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            movePuzzle('left');
            break;
        case 'ArrowRight':
            e.preventDefault();
            movePuzzle('right');
            break;
        case 'ArrowUp':
            e.preventDefault();
            movePuzzle('up');
            break;
        case 'ArrowDown':
            e.preventDefault();
            movePuzzle('down');
            break;
    }
});

// ========== بازی 5: حافظه ریاضی ==========
function startMemoryGame() {
    const equations = [
        '2+2', '3+1', '5-1', '2×2',
        '3×2', '8-2', '2+4', '3×3',
        '4+5', '10-1', '3+3', '12-6',
        '2×3', '4+2', '9-3', '2×4'
    ];
    
    const values = [4, 4, 4, 4, 6, 6, 6, 9, 9, 9, 6, 6, 6, 6, 6, 8];
    
    memoryCards = [];
    for (let i = 0; i < 8; i++) {
        memoryCards.push({
            id: i,
            text: equations[i * 2],
            value: values[i * 2],
            flipped: false,
            matched: false
        });
        memoryCards.push({
            id: i + 8,
            text: equations[i * 2 + 1],
            value: values[i * 2 + 1],
            flipped: false,
            matched: false
        });
    }
    
    // شافل کارت‌ها
    memoryCards.sort(() => Math.random() - 0.5);
    
    memoryFlipped = [];
    memoryMoves = 0;
    memoryPairsFound = 0;
    
    document.getElementById('memoryMoves').textContent = '0';
    document.getElementById('memoryPairs').textContent = '0/8';
    
    renderMemoryBoard();
}

function renderMemoryBoard() {
    const board = document.getElementById('memoryBoard');
    board.innerHTML = '';
    
    memoryCards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.style.background = card.matched ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' : 
                                   card.flipped ? '#fff' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        cardDiv.style.color = card.matched || card.flipped ? '#333' : 'white';
        cardDiv.style.padding = '30px 10px';
        cardDiv.style.borderRadius = '12px';
        cardDiv.style.textAlign = 'center';
        cardDiv.style.fontSize = '24px';
        cardDiv.style.fontWeight = 'bold';
        cardDiv.style.cursor = card.matched ? 'default' : 'pointer';
        cardDiv.style.transition = 'all 0.3s';
        cardDiv.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        
        cardDiv.textContent = card.matched || card.flipped ? card.text : '?';
        
        if (!card.matched) {
            cardDiv.onclick = () => flipCard(index);
        }
        
        board.appendChild(cardDiv);
    });
}

function flipCard(index) {
    const card = memoryCards[index];
    
    if (card.flipped || card.matched || memoryFlipped.length >= 2) return;
    
    card.flipped = true;
    memoryFlipped.push(index);
    renderMemoryBoard();
    
    if (memoryFlipped.length === 2) {
        memoryMoves++;
        document.getElementById('memoryMoves').textContent = memoryMoves;
        
        setTimeout(checkMemoryMatch, 1000);
    }
}

function checkMemoryMatch() {
    const [index1, index2] = memoryFlipped;
    const card1 = memoryCards[index1];
    const card2 = memoryCards[index2];
    
    if (card1.value === card2.value) {
        card1.matched = true;
        card2.matched = true;
        memoryPairsFound++;
        document.getElementById('memoryPairs').textContent = `${memoryPairsFound}/8`;
        
        if (memoryPairsFound === 8) {
            setTimeout(() => {
                alert(`🎉 تبریک!\nشما همه جفت‌ها را با ${memoryMoves} حرکت پیدا کردید!`);
            }, 500);
        }
    } else {
        card1.flipped = false;
        card2.flipped = false;
    }
    
    memoryFlipped = [];
    renderMemoryBoard();
}

// ========== استایل‌های اضافی ==========
const gameStyles = `
.game-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3) !important;
}

.game-container {
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// اضافه کردن استایل‌ها به صفحه
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = gameStyles;
    document.head.appendChild(styleSheet);
}
