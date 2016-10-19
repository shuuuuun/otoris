import Tetris from './modules/Tetris';

const KEYS = {
  37: 'left',  // ←
  39: 'right',  // →
  40: 'down',  // ↓
  38: 'rotate',  // ↑
  32: 'rotate'  // space
};
var tetris = new Tetris({
  disableTouch: true,
  disableKey: true,
});
var container = document.querySelector('.container');

// init
document.addEventListener('keydown', function(evt){
  console.log(evt.key, evt.keyCode, KEYS[evt.keyCode]);
  if (typeof KEYS[evt.keyCode] === 'undefined') return;
  evt.preventDefault();
  
  // console.table(tetris.board);
  // console.table(tetris.rotateBoard());
  
  changeDirection(KEYS[evt.keyCode]);
}, false);

document.addEventListener('touchstart', function(evt){
  evt.preventDefault();
  
  tetris.moveBlock('rotate');
}, false);

window.addEventListener('devicemotion', (evt) => {
  
  //傾き
  var xg = evt.accelerationIncludingGravity.x || 0;
  var yg = evt.accelerationIncludingGravity.y || 0;
  var zg = evt.accelerationIncludingGravity.z || 0;

  var xRatio = Math.abs(xg) / 9.8;
  var yRatio = Math.abs(yg) / 9.8;
  var zRatio = Math.abs(zg) / 9.8;
    
  // console.log(xg, yg, zg);
  var isHorizontal = Math.abs(xg) > Math.abs(yg);
  var code = isHorizontal ? (xg > 0 ? 'right' : 'left') : (yg > 0 ? null : 'down');
  tetris.tickInterval = 500 * (1 - (isHorizontal ? xRatio : yRatio)) + 50;
  //console.log(isHorizontal, code, xg, yg, tetris.tickInterval);
  changeDirection(code);
  
}, false);

function changeDirection(code) {
  switch (code) {
    case 'left':
      tetris.dropDirection = 'left';
      break;
    case 'right':
      tetris.dropDirection = 'right';
      break;
    case 'down':
      tetris.dropDirection = 'down';
      break;
    case 'rotate':
      tetris.moveBlock('rotate');
      break;
  }
}

// Event
tetris.on('gamestart', function(){
  tetris.dropDirection = 'down';
});
tetris.on('newblockcreated', function(){
  console.log(tetris.dropDirection);
  tetris.dropDirection = 'down';
  switch (tetris.dropDirection) {
    case 'left':
      //tetris.rotateWorld(-1);
      //tetris.rotateBoard();
      break;
    case 'right':
      break;
    case 'down':
      break;
    case 'rotate':
      break;
  }
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
