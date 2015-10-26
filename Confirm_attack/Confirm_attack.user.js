// ==UserScript==
// @name        Confirm attack
// @namespace   window
// @include     https://de119.die-staemme.de/game.php*try=confirm
// @version     1
// @grant       none
// ==/UserScript==

setTimeout(function(){
  $('#troop_confirm_go').click();
}, 1500);