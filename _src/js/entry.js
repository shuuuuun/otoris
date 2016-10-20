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
var audioBuffer = null;


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

musicButton.addEventListener('click', () => {
  
    tetris.pauseGame();
    //playSound(audioBuffer);

    const basisHz = 442;
    var i = 0;
    var hz = basisHz * Math.pow(2, (1 / 12) * (i - 9));
    playSoundHz(hz);

}, false);

getAudioBuffer('/sound/se_maoudamashii_instruments_piano1_1do.mp3', function(buffer) {
    audioBuffer = buffer;
});


// Event
tetris.on('gamestart', function(){
});
tetris.on('newblockcreated', function(){
});
tetris.on('tick', function(){
});
tetris.on('gameOverEffect', function(){
});
tetris.on('gamequit', function(){
  tetris.newGame();
});


// start
tetris.newGame();


// function
function getAudioBuffer(url, fn) {  
  var req = new XMLHttpRequest();
  req.responseType = 'arraybuffer';

  req.onreadystatechange = function() {
    if (req.readyState === 4) {
      if (req.status === 0 || req.status === 200) {
        context.decodeAudioData(req.response, function(buffer) {
          fn(buffer);
        });
      }
    }
  };

  req.open('GET', url, true);
  req.send('');
}

function playSound(buffer) {  
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);
}

function playSoundHz(hz) {
    var osciillator = context.createOscillator();
    var audioDestination = context.destination;

    osciillator.frequency.value = hz;
    osciillator.connect(audioDestination);
    osciillator.start = osciillator.start || osciillator.noteOn; // クロスブラウザ対応
    osciillator.start();

    setTimeout(function() {
        osciillator.stop();
    }, 500);
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
