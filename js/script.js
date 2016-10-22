!function t(e,n,i){function r(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[s]={exports:{}};e[s][0].call(h.exports,function(t){var n=e[s][1][t];return r(n?n:t)},h,h.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[[0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0]]},{}],2:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return function(){return new Promise(function(e){setTimeout(e,t)})}}function o(t){function e(t,e){var a=[];return l.board.forEach(function(e,r){var u=o-r;if(e[t]){var c=n*Math.pow(2,1/12*(u-9)),h=s(c,i);a.push(h)}}),v.style.transform="translateX("+100*e+"%)",a.push(r(i)()),Promise.all(a)}var n=442,i=200,o=l.LOGICAL_ROWS;!function n(i){var r=i/l.COLS;return i>=l.COLS?(v.style.transform="translateX(0%)",void setTimeout(function(){return n(0)},t)):void e(i,r).then(function(){n(++i)},function(){console.log("fail")})}(0)}function s(t,e){var n=h.createOscillator(),i=h.destination;return n.frequency.value=t,n.connect(i),n.start=n.start||n.noteOn,n.start(),new Promise(function(t){setTimeout(function(){n.stop(),t()},e)})}var a=t("./modules/Tetris"),u=i(a),c=new Map([[13,"freeze"]]);window.AudioContext=window.AudioContext||window.webkitAudioContext;var h=new AudioContext,l=new u.default({disableTouch:!1,disableKey:!1}),f=document.querySelector(".container"),v=(document.querySelector(".js-music-button"),document.querySelector(".js-music-line")),d=Math.floor((f.offsetWidth-50)/l.BLOCK_SIZE);l.COLS=d,l.WIDTH=l.BLOCK_SIZE*l.COLS,l.initCanvasSize(),document.addEventListener("keydown",function(t){var e=c.get(t.keyCode);if(e)switch(t.preventDefault(),e){case"freeze":l.freeze();break;case"pauseGame":l.pauseGame()}},!1),l.once("gamestart",function(){o(1e3)}),l.on("gamequit",function(){l.newGame()}),l.newGame()},{"./modules/Tetris":3}],3:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=t("jquery-deferred"),c=i(u),h=t("events"),l=i(h),f=t("./Util"),v=i(f),d=t("./TouchController"),m=i(d),p=t("../constants/SHAPE_LIST"),_=i(p),y=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),i=n;return n.COLS=40,n.ROWS=16,n.BLOCK_SIZE=25,n.NUMBER_OF_BLOCK=4,n.HIDDEN_ROWS=n.NUMBER_OF_BLOCK,n.LOGICAL_ROWS=n.ROWS+n.HIDDEN_ROWS,n.WIDTH=n.BLOCK_SIZE*n.COLS,n.HEIGHT=n.BLOCK_SIZE*n.ROWS,n.NEXT_WIDTH=n.BLOCK_SIZE*n.NUMBER_OF_BLOCK,n.NEXT_HEIGHT=n.BLOCK_SIZE*n.NUMBER_OF_BLOCK,n.RENDER_INTERVAL=30,n.DEFAULT_TICK_INTERVAL=500,n.SPEEDUP_RATE=10,n.START_X=Math.floor((n.COLS-n.NUMBER_OF_BLOCK)/2),n.START_Y=0,n.CLEARLINE_BLOCK_INDEX=14,n.GAMEOVER_BLOCK_INDEX=15,n.BG_COLOR="#888",n.DEFAULT_DROP_DIRECTION="down",n.COLOR_LIST=["#FF6666","#FFCC66","#FFFF66","#CCFF66","#66FF66","#66FFCC","#66FFFF","#66CCFF","#6666FF","#CC66FF","#FF66FF","#FF6FCF","#FF00FF","#FF8000","#4C4C4C"],n.KEYS={37:"left",39:"right",40:"down",38:"rotate",32:"rotate"},n.cnvs=document.getElementById("game-canvas"),n.ctx=n.cnvs.getContext("2d"),n.cnvsNext=document.getElementById("next-canvas"),n.ctxNext=n.cnvsNext.getContext("2d"),n.initCanvasSize(),t.disableFocusControls||n.setBlurEvent(),t.disableKey||n.setKeyEvent(),t.disableTouch||n.setTouchEvent(),n.renderId=setInterval(function(){i.render()},n.RENDER_INTERVAL),n}return s(e,t),a(e,[{key:"initCanvasSize",value:function(){this.cnvs.style.width=this.WIDTH+"px",this.cnvs.style.height=this.HEIGHT+"px",this.cnvs.width=2*this.WIDTH,this.cnvs.height=2*this.HEIGHT,this.ctx.scale(2,2),this.ctx.strokeStyle=this.BG_COLOR,this.cnvsNext.style.width=this.NEXT_WIDTH+"px",this.cnvsNext.style.height=this.NEXT_HEIGHT+"px",this.cnvsNext.width=2*this.NEXT_WIDTH,this.cnvsNext.height=2*this.NEXT_HEIGHT,this.ctxNext.scale(2,2),this.ctxNext.strokeStyle=this.BG_COLOR}},{key:"rotateWorld",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.worldDirection+=t,this.cnvs.style.transform="rotate("+90*this.worldDirection+"deg)"}},{key:"setBlurEvent",value:function(){var t=this;window.addEventListener("blur",function(){t.pauseGame()},!1),window.addEventListener("focus",function(){t.resumeGame()},!1)}},{key:"setKeyEvent",value:function(){var t=this;document.addEventListener("keydown",function(e){"undefined"!=typeof t.KEYS[e.keyCode]&&(e.preventDefault(),t.moveBlock(t.KEYS[e.keyCode]))},!1)}},{key:"setTouchEvent",value:function(){var t,e,n=this,i=new m.default({element:this.cnvs}),r=!1,o=!1;i.on("touchstart",function(n){t=n.touchStartX,e=n.touchStartY,r=!0,o=!1}),i.on("touchmove",function(i){var s=i.touchX-t,a=i.touchY-e,u=s/n.BLOCK_SIZE|0,c=a/n.BLOCK_SIZE|0;if(!o){for(;u;){var h=u/Math.abs(u);if(!n.valid(h,0))break;n.currentX+=h,u-=h,t=i.touchX}for(;c>0&&n.valid(0,1);)n.currentY++,c--,e=i.touchY;r=!1}}),i.on("touchend",function(t){r&&n.moveBlock("rotate")}),this.on("freeze",function(){o=!0})}},{key:"newGame",value:function(){this.initGame(),this.startGame()}},{key:"initGame",value:function(){clearTimeout(this.tickId),clearInterval(this.renderId),this.isPlayng=!1,this.lose=!1,this.tickInterval=this.DEFAULT_TICK_INTERVAL,this.dropDirection=this.DEFAULT_DROP_DIRECTION,this.worldDirection=0,this.sumOfClearLines=0,this.score=0,this.frameCount=0,this.initBoad(),this.initBlock(),this.createNextBlock(),this.render()}},{key:"startGame",value:function(){var t=this;this.isPlayng=!0,this.createNewBlock(),this.createNextBlock(),this.renderId=setInterval(function(){t.render()},this.RENDER_INTERVAL),this.emit("gamestart"),this.tick()}},{key:"initBoad",value:function(){this.board=[];for(var t=0;t<this.LOGICAL_ROWS;++t){this.board[t]=[];for(var e=0;e<this.COLS;++e)this.board[t][e]=0}}},{key:"initBlock",value:function(){this.currentBlock=[];for(var t=0;t<this.NUMBER_OF_BLOCK;++t){this.currentBlock[t]=[];for(var e=0;e<this.NUMBER_OF_BLOCK;++e)this.currentBlock[t][e]=0}this.currentBlockId=0,this.currentX=this.START_X,this.currentY=this.START_Y}},{key:"createNewBlock",value:function(){this.nextBlock[0]||this.createNextBlock(),this.currentBlock=this.nextBlock,this.currentBlockId=this.nextBlockId,this.currentX=this.START_X,this.currentY=this.START_Y,this.emit("newblockcreated")}},{key:"createNextBlock",value:function(){var t=Math.floor(Math.random()*_.default.length),e=_.default[t];this.nextBlockId=t,this.nextBlock=[];for(var n=0;n<this.NUMBER_OF_BLOCK;++n){this.nextBlock[n]=[];for(var i=0;i<this.NUMBER_OF_BLOCK;++i){var r=this.NUMBER_OF_BLOCK*n+i;this.nextBlock[n][i]=e[r]?t+1:0}}this.emit("nextblockcreated")}},{key:"tick",value:function(){var t=this;if(clearTimeout(this.tickId),!this.moveBlock(this.dropDirection)){if(this.freeze(),this.clearLines(),this.checkGameOver())return this.emit("gameover"),this.quitGame().then(function(){}),!1;this.frameCount++,this.createNewBlock(),this.createNextBlock()}this.tickId=setTimeout(function(){t.tick()},this.tickInterval),this.emit("tick")}},{key:"quitGame",value:function(){var t=this,e=c.default.Deferred();return this.gameOverEffect().then(function(){t.isPlayng=!1,t.emit("gamequit"),e.resolve()}),e.promise()}},{key:"pauseGame",value:function(){clearTimeout(this.tickId)}},{key:"resumeGame",value:function(){var t=this;this.isPlayng&&(this.tickId=setTimeout(function(){t.tick()},this.tickInterval))}},{key:"freeze",value:function(){for(var t=0;t<this.NUMBER_OF_BLOCK;++t)for(var e=0;e<this.NUMBER_OF_BLOCK;++e){var n=e+this.currentX,i=t+this.currentY;!this.currentBlock[t][e]||i<0||(this.board[i][n]=this.currentBlock[t][e])}this.emit("freeze")}},{key:"clearLines",value:function(){function t(t,e){return function(){var i=c.default.Deferred();return n.board[e][t]=n.CLEARLINE_BLOCK_INDEX,i.resolve(),i.promise()}}function e(t,e){return function(){var t=c.default.Deferred();if(r.length)return r.reverse().forEach(function(t){n.board.splice(t,1),n.board.unshift(o)}),t.resolve(),t.promise()}}var n=this,i=0,r=[],o=Array.apply(null,Array(this.COLS)).map(function(){return 0}),s=c.default.Deferred();s.resolve();for(var a=this.LOGICAL_ROWS-1;a>=0;--a){var u=this.board[a].every(function(t){return 0!==t});if(u){r.push(a),i++,this.sumOfClearLines++,this.tickInterval-=this.SPEEDUP_RATE;for(var h=0;h<this.COLS;++h)this.board[a][h]&&(s=s.then(t(h,a)).then(v.default.sleep(10)))}}s.then(e(h,a)),this.score+=i<=1?i:Math.pow(2,i),i>0&&this.emit("clearline",r)}},{key:"gameOverEffect",value:function(){function t(t,n){return function(){var i=c.default.Deferred();return e.board[n][t]=e.GAMEOVER_BLOCK_INDEX,e.emit("gameOverEffectTick"),i.resolve(),i.promise()}}var e=this,n=c.default.Deferred();n.resolve();for(var i=0;i<this.LOGICAL_ROWS;++i)for(var r=0;r<this.COLS;++r)this.board[i][r]&&(n=n.then(t(r,i)).then(v.default.sleep(10)));return this.emit("gameOverEffect"),n.then(v.default.sleep(500)).promise()}},{key:"moveBlock",value:function(t){switch(t){case"left":return!!this.valid(-1,0)&&(--this.currentX,!0);case"right":return!!this.valid(1,0)&&(++this.currentX,!0);case"down":return!!this.valid(0,1)&&(++this.currentY,!0);case"rotate":var e=this.rotate(this.currentBlock);return!!this.valid(0,0,e)&&(this.currentBlock=e,!0)}}},{key:"rotate",value:function(){for(var t=[],e=0;e<this.NUMBER_OF_BLOCK;++e){t[e]=[];for(var n=0;n<this.NUMBER_OF_BLOCK;++n)t[e][n]=this.currentBlock[this.NUMBER_OF_BLOCK-1-n][e]}return t}},{key:"rotateBoard",value:function(t){for(var e=Array.apply(null,Array(this.COLS)).map(function(){return 0}),n=[],i=0;i<this.ROWS;++i){n[i]=[];for(var r=0;r<this.COLS;++r)n[i][r]=this.board[this.COLS-1-r+this.HIDDEN_ROWS][i]}for(var o=0;o<this.HIDDEN_ROWS;++o)n.unshift(e);return this.board=n,n}},{key:"valid",value:function(t,e,n){t=t||0,e=e||0;for(var i=this.currentX+t,r=this.currentY+e,o=n||this.currentBlock,s=0;s<this.NUMBER_OF_BLOCK;++s)for(var a=0;a<this.NUMBER_OF_BLOCK;++a){var u=a+i,c=s+r;if(o[s][a]&&("undefined"==typeof this.board[c]||"undefined"==typeof this.board[c][u]||this.board[c][u]||u<0||u>=this.COLS||c>=this.LOGICAL_ROWS))return!1}return!0}},{key:"checkGameOver",value:function(){for(var t=!0,e=0;e<this.NUMBER_OF_BLOCK;++e)for(var n=0;n<this.NUMBER_OF_BLOCK;++n){var i=(n+this.currentX,e+this.currentY);if(i>=this.HIDDEN_ROWS){t=!1;break}}return t}},{key:"render",value:function(){this.ctx.clearRect(0,0,this.WIDTH,this.HEIGHT),this.ctx.fillStyle=this.BG_COLOR,this.ctx.fillRect(0,0,this.WIDTH,this.HEIGHT),this.renderBoard(),this.renderCurrentBlock(),this.renderNextBlock()}},{key:"renderBoard",value:function(){for(var t=0;t<this.COLS;++t)for(var e=0;e<this.ROWS;++e){var n=t,i=e+this.HIDDEN_ROWS,r=this.board[i][n]-1;!this.board[i][n]||r<0||this.drawBlock(t,e,r)}}},{key:"renderCurrentBlock",value:function(){for(var t=0;t<this.NUMBER_OF_BLOCK;++t)for(var e=0;e<this.NUMBER_OF_BLOCK;++e){var n=this.currentBlock[t][e]-1;if(this.currentBlock[t][e]&&!(n<0)){var i=e+this.currentX,r=t+this.currentY-this.HIDDEN_ROWS;this.drawBlock(i,r,n)}}}},{key:"renderNextBlock",value:function(){this.ctxNext.clearRect(0,0,this.NEXT_WIDTH,this.NEXT_HEIGHT);for(var t=0;t<this.NUMBER_OF_BLOCK;++t)for(var e=0;e<this.NUMBER_OF_BLOCK;++e){var n=this.nextBlock[t][e]-1;!this.nextBlock[t][e]||n<0||this.drawNextBlock(e,t,n)}}},{key:"drawBlock",value:function(t,e,n){var i=this.BLOCK_SIZE*t,r=this.BLOCK_SIZE*e,o=this.BLOCK_SIZE;this.ctx.fillStyle=this.COLOR_LIST[n],this.ctx.fillRect(i,r,o,o),this.ctx.strokeRect(i,r,o,o)}},{key:"drawNextBlock",value:function(t,e,n){var i=this.BLOCK_SIZE*t,r=this.BLOCK_SIZE*e,o=this.BLOCK_SIZE;this.ctxNext.fillStyle=this.COLOR_LIST[n],this.ctxNext.fillRect(i,r,o,o),this.ctxNext.strokeRect(i,r,o,o)}}]),e}(l.default);n.default=y},{"../constants/SHAPE_LIST":1,"./TouchController":4,"./Util":5,events:6,"jquery-deferred":7}],4:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=t("events"),c=i(u),h=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.element=t.element||document,n.touchstartElement=t.touchstartElement||n.element,n.touchmoveElement=t.touchmoveElement||n.element,n.touchendElement=t.touchendElement||n.element,n.doubleTapDelay=t.doubleTapDelay||500,n.holdingDelay=t.holdingDelay||1e3,n.watchInterval=t.watchInterval||100,n.touchSupport="ontouchstart"in window,n.touchstart=n.touchSupport?"touchstart":"mousedown",n.touchmove=n.touchSupport?"touchmove":"mousemove",n.touchend=n.touchSupport?"touchend":"mouseup",n.deltaX=0,n.deltaY=0,n.moveX=0,n.moveY=0,n.defineEventListener(),n.setEvent(),n}return s(e,t),a(e,[{key:"setEvent",value:function(){this.touchstartElement.addEventListener(this.touchstart,this.onTouchStart,!1),this.touchmoveElement.addEventListener(this.touchmove,this.onTouchMove,!1),this.touchendElement.addEventListener(this.touchend,this.onTouchEnd,!1)}},{key:"dispose",value:function(){this.touchstartElement.removeEventListener(this.touchstart,this.onTouchStart,!1),this.touchmoveElement.removeEventListener(this.touchmove,this.onTouchMove,!1),this.touchendElement.removeEventListener(this.touchend,this.onTouchEnd,!1)}},{key:"defineEventListener",value:function(){var t=this,e=void 0,n=void 0,i=function(){clearInterval(e),clearTimeout(n)},r=function(){i(),n=setTimeout(function(){e=setInterval(function(){t.emit("touchholding",t)},t.watchInterval)},t.holdingDelay)};this.onTouchStart=function(e){e.preventDefault(),e.stopPropagation(),t.isDoubleTap=t.isTap,t.isDragging=!0,t.isTap=!0,t.touchStartTime=Date.now(),t.touchStartX=t.touchSupport?e.touches[0].pageX:e.pageX,t.touchStartY=t.touchSupport?e.touches[0].pageY:e.pageY,r(),t.emit("touchstart",{touchStartTime:t.touchStartTime,touchStartX:t.touchStartX,touchStartY:t.touchStartY})},this.onTouchMove=function(e){t.isDragging&&(i(),t.lasttouchX=t.touchX||t.touchStartX,t.lasttouchY=t.touchY||t.touchStartY,t.touchX=t.touchSupport?e.touches[0].pageX:e.pageX,t.touchY=t.touchSupport?e.touches[0].pageY:e.pageY,t.deltaX=t.touchX-t.lasttouchX,t.deltaY=t.touchY-t.lasttouchY,t.moveX=t.touchX-t.touchStartX,t.moveY=t.touchY-t.touchStartY,t.isTap=t.isDoubleTap=!1,r(),t.emit("touchmove",{lasttouchX:t.lasttouchX,lasttouchY:t.lasttouchY,touchX:t.touchX,touchY:t.touchY,deltaX:t.deltaX,deltaY:t.deltaY,moveX:t.moveX,moveY:t.moveY}))},this.onTouchEnd=function(e){t.isDragging=!1,i(),t.elapsedTime=Date.now()-t.touchStartTime,t.touchEndX=t.touchX,t.touchEndY=t.touchY,t.emit("touchend",{elapsedTime:t.elapsedTime,touchEndX:t.touchEndX,touchEndY:t.touchEndY,moveX:t.moveX,moveY:t.moveY,isTap:t.isTap,isDoubleTap:t.isDoubleTap}),t.touchX=t.touchY=null,t.moveX=t.moveY=0,setTimeout(function(){t.isTap=t.isDoubleTap=!1},t.doubleTapDelay)}}}]),e}(c.default);n.default=h},{events:6}],5:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=t("jquery-deferred"),o=i(r);window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){var e=window.setTimeout(t,1e3/60);return e},window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)};var s={TRANSITIONEND:"transitionend webkitTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd",ANIMATIONEND:"animationend webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd",getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},throttle:function(t,e){var n=!1,i=function(i){n||(n=!0,setTimeout(function(){n=!1,t(i)},e))};return i},debounce:function(t,e){var n,i=function(i){clearTimeout(n),n=setTimeout(function(){t(i)},e)};return i},async:function(t){!function e(n){t[n]&&t[n](function(){e(n+1)})}(0)},delay:function(t){return function(e){setTimeout(e,t)}},sleep:function(t){return function(){var e=o.default.Deferred();return setTimeout(function(){e.resolve()},t),e.promise()}},zeroPadding:function(t,e){return(new Array(e).join("0")+t).slice(-e)},getQueryString:function(){var t={},e=window.location.search;if(e.length>1)for(var n=e.substring(1),i=n.split("&"),r=0;r<i.length;r++){var o=i[r].split("="),s=decodeURIComponent(o[0]),a=decodeURIComponent(o[1]);t[s]=a}return t},getUserAgent:function(){return s.ua={},s.ua.name=window.navigator.userAgent.toLowerCase(),s.ua.isSP=/ipod|iphone|ipad|android/i.test(s.ua.name),s.ua.isPC=!s.ua.isSP,s.ua.isIOS=/ipod|iphone|ipad/i.test(s.ua.name),s.ua.isAndroid=/android/.test(s.ua.name),s.ua.isIE=/msie|trident/i.test(s.ua.name),s.ua.isIE8=/msie 8/.test(s.ua.name),s.ua.isIE9=/msie 9/.test(s.ua.name),s.ua.isIE10=/msie 10/.test(s.ua.name),s.ua.isMac=/macintosh/.test(s.ua.name),s.ua.isChrome=/chrome/.test(s.ua.name),s.ua.isFirefox=/firefox/.test(s.ua.name),s.ua.isSafari=/safari/.test(s.ua.name),s.ua.isMacSafari=s.ua.isSafari&&s.ua.isMac&&!s.ua.isChrome,s.ua.isSP&&(document.body.className+=" isSP"),s.ua.isPC&&(document.body.className+=" isPC"),s.ua}};e.exports=s},{"jquery-deferred":7}],6:[function(t,e,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function o(t){return"number"==typeof t}function s(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(t){if(!o(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},i.prototype.emit=function(t){var e,n,i,o,u,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;var h=new Error('Uncaught, unspecified "error" event. ('+e+")");throw h.context=e,h}if(n=this._events[t],a(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(s(n))for(o=Array.prototype.slice.call(arguments,1),c=n.slice(),i=c.length,u=0;u<i;u++)c[u].apply(this,o);return!0},i.prototype.addListener=function(t,e){var n;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?s(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,s(this._events[t])&&!this._events[t].warned&&(n=a(this._maxListeners)?i.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function");var i=!1;return n.listener=e,this.on(t,n),this},i.prototype.removeListener=function(t,e){var n,i,o,a;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],o=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(s(n)){for(a=o;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},i.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},i.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},i.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},i.listenerCount=function(t,e){return t.listenerCount(e)}},{}],7:[function(t,e,n){e.exports=t("./lib/jquery-deferred")},{"./lib/jquery-deferred":10}],8:[function(t,e,n){function i(t){var e=s[t]={};return r.each(t.split(o),function(t,n){e[n]=!0}),e}var r=e.exports=t("./jquery-core.js"),o=/\s+/,s={};r.Callbacks=function(t){t="string"==typeof t?s[t]||i(t):r.extend({},t);var e,n,o,a,u,c,h=[],l=!t.once&&[],f=function(i){for(e=t.memory&&i,n=!0,c=a||0,a=0,u=h.length,o=!0;h&&c<u;c++)if(h[c].apply(i[0],i[1])===!1&&t.stopOnFalse){e=!1;break}o=!1,h&&(l?l.length&&f(l.shift()):e?h=[]:v.disable())},v={add:function(){if(h){var n=h.length;!function e(n){r.each(n,function(n,i){var o=r.type(i);"function"===o?t.unique&&v.has(i)||h.push(i):i&&i.length&&"string"!==o&&e(i)})}(arguments),o?u=h.length:e&&(a=n,f(e))}return this},remove:function(){return h&&r.each(arguments,function(t,e){for(var n;(n=r.inArray(e,h,n))>-1;)h.splice(n,1),o&&(n<=u&&u--,n<=c&&c--)}),this},has:function(t){return r.inArray(t,h)>-1},empty:function(){return h=[],this},disable:function(){return h=l=e=void 0,this},disabled:function(){return!h},lock:function(){return l=void 0,e||v.disable(),this},locked:function(){return!l},fireWith:function(t,e){return e=e||[],e=[t,e.slice?e.slice():e],!h||n&&!l||(o?l.push(e):f(e)),this},fire:function(){return v.fireWith(this,arguments),this},fired:function(){return!!n}};return v}},{"./jquery-core.js":9}],9:[function(t,e,n){function i(t){return null==t?String(t):l[h.call(t)]||"object"}function r(t){return"function"===c.type(t)}function o(t){return"array"===c.type(t)}function s(t,e,n){var i,o=0,s=t.length,a=void 0===s||r(t);if(n)if(a){for(i in t)if(e.apply(t[i],n)===!1)break}else for(;o<s&&e.apply(t[o++],n)!==!1;);else if(a){for(i in t)if(e.call(t[i],i,t[i])===!1)break}else for(;o<s&&e.call(t[o],o,t[o++])!==!1;);return t}function a(t){return!(!t||"object"!==c.type(t))}function u(){var t,e,n,i,r,o,s=arguments[0]||{},a=1,u=arguments.length,h=!1;for("boolean"==typeof s&&(h=s,s=arguments[1]||{},a=2),"object"==typeof s||c.isFunction(s)||(s={}),u===a&&(s=this,--a);a<u;a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],i=t[e],s!==i&&(h&&i&&(c.isPlainObject(i)||(r=c.isArray(i)))?(r?(r=!1,o=n&&c.isArray(n)?n:[]):o=n&&c.isPlainObject(n)?n:{},s[e]=c.extend(h,o,i)):void 0!==i&&(s[e]=i));return s}var c=e.exports={type:i,isArray:o,isFunction:r,isPlainObject:a,each:s,extend:u,noop:function(){}},h=Object.prototype.toString,l={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function(t){l["[object "+t+"]"]=t.toLowerCase()})},{}],10:[function(t,e,n){/*!
* jquery-deferred
* Copyright(c) 2011 Hidden <zzdhidden@gmail.com>
* MIT Licensed
*/
var i=e.exports=t("./jquery-callbacks.js"),r=Array.prototype.slice;i.extend({Deferred:function(t){var e=[["resolve","done",i.Callbacks("once memory"),"resolved"],["reject","fail",i.Callbacks("once memory"),"rejected"],["notify","progress",i.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return i.Deferred(function(n){i.each(e,function(e,r){var s=r[0],a=t[e];o[r[1]](i.isFunction(a)?function(){var t=a.apply(this,arguments);t&&i.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===o?n:this,[t])}:n[s])}),t=null}).promise()},promise:function(t){return null!=t?i.extend(t,r):r}},o={};return r.pipe=r.then,i.each(e,function(t,i){var s=i[2],a=i[3];r[i[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[i[0]]=s.fire,o[i[0]+"With"]=s.fireWith}),r.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,o,s=0,a=r.call(arguments),u=a.length,c=1!==u||t&&i.isFunction(t.promise)?u:0,h=1===c?t:i.Deferred(),l=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?r.call(arguments):o,i===e?h.notifyWith(n,i):--c||h.resolveWith(n,i)}};if(u>1)for(e=new Array(u),n=new Array(u),o=new Array(u);s<u;s++)a[s]&&i.isFunction(a[s].promise)?a[s].promise().done(l(s,o,a)).fail(h.reject).progress(l(s,n,e)):--c;return c||h.resolveWith(o,a),h.promise()}})},{"./jquery-callbacks.js":8}]},{},[2]);