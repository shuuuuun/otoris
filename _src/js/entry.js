import Tetris from './modules/Tetris';

const keyMap = new Map([
    // [keyCode, methodName],
    [13, 'freeze'], // Enter
]);

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

var tetris = new Tetris({
  disableTouch: false,
  disableKey: false,
  disableFocusControls: true,
});
var container = document.querySelector('.container');
var musicButton = document.querySelector('.js-music-button');


// init
const cols = Math.floor((container.offsetWidth - 50) / tetris.BLOCK_SIZE);
tetris.COLS = cols;
tetris.WIDTH = tetris.BLOCK_SIZE * tetris.COLS;
tetris.initCanvasSize();

document.addEventListener('keydown', function(evt){
    //console.log(evt.key, evt.keyCode, keyMap.get(evt.keyCode));

    const methodName = keyMap.get(evt.keyCode);
    if (!methodName) {
        return;
    }
    evt.preventDefault();

    switch (methodName) {
    case 'freeze':
        tetris.freeze();
        break;
    case 'pauseGame':
        tetris.pauseGame();
        break;
    }

}, false);

// document.addEventListener('touchstart', () => {
//     playSequence();
// });

musicButton.addEventListener('click', () => {
  
    tetris.pauseGame();
    tetris.freeze();

    playSequence(1000);

}, false);


// Event
tetris.on('gamestart', function(){
    //console.log('gamestart');
    //playSequence();
});
tetris.on('gamequit', function(){
  tetris.newGame();
});


// start
tetris.newGame();


// function
function playSequence(delay) {
    const basisHz = 442;
    const duration = 200;
    const maxRows = tetris.LOGICAL_ROWS;

    (function loop(index) {
        console.log(index);
        if (index >= tetris.COLS) {
            //index = 0;
            setTimeout(() => loop(0), delay);
            return;
        }
        exec(index)
            .then(() => {
                loop(++index);
            }, () => {
                console.log("fail");
            });
    })(0);

    function exec(index) {
        const promiseList = [];
        tetris.board.forEach((zAry, row) => {
            const i = maxRows - row;
            if (!zAry[index]) {
                return;
            }
            var hz = basisHz * Math.pow(2, (1 / 12) * (i - 9));
            const promise = playSoundHz(hz, duration);
            promiseList.push(promise);
        });
        return Promise.all(promiseList);
    }
}

function playSoundHz(hz, duration) {
    var osciillator = context.createOscillator();
    var audioDestination = context.destination;

    osciillator.frequency.value = hz;
    osciillator.connect(audioDestination);
    osciillator.start = osciillator.start || osciillator.noteOn; // クロスブラウザ対応
    osciillator.start();

    return new Promise((resolve) => {
        setTimeout(() => {
            osciillator.stop();
            resolve();
        }, duration);
    });
}

function appendLink(data_url) {
  var p = document.createElement('p');
  var link = document.createElement('a');
  link.href = data_url;
  link.target = '_blank';
  link.innerText = 'gif on ' + getTime();
  p.appendChild(link);
  container.appendChild(p);
}

function getTime() {
  var d = new Date();
  var h = zeroPadding(d.getHours(), 2);
  var m = zeroPadding(d.getMinutes(), 2);
  var s = zeroPadding(d.getSeconds(), 2);
  var ms = zeroPadding(d.getMilliseconds(), 3);
  return h + ':' + m + ':' + s;
}

function zeroPadding(num, len) {
  return (new Array(len).join('0') + num).slice(-len);
}
