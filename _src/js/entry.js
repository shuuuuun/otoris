import Tetris from './modules/Tetris';

const keyMap = new Map([
    // [keyCode, methodName],
    [13, 'freeze'], // Enter
]);

var tetris = new Tetris({
  disableTouch: false,
  disableKey: false,
});
var container = document.querySelector('.container');

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
    handleMethod(methodName);

}, false);

document.addEventListener('touchstart', function(evt){
  evt.preventDefault();
  
  tetris.moveBlock('rotate');
}, false);


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



function handleMethod(methodName) { // helper
    switch (methodName) {
    case 'freeze':
        tetris.freeze();
        break;
    }
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
