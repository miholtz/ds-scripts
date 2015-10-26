// ==UserScript==
// @name        Plan attacks
// @namespace   window
// @include     https://de119.die-staemme.de/game.php*screen=place
// @version     1
// @grant       none
// ==/UserScript==

window.targetsToAttack = [
  {x:585, y:394},  
  {x:585, y:395},
  {x:585, y:396},
  {x:585, y:397},
  {x:587, y:391},
  {x:587, y:392},
  {x:587, y:395},
  {x:587, y:397},
  {x:587, y:401},
  {x:588, y:391},
  {x:588, y:393},
  {x:588, y:401},
  {x:588, y:402},
  {x:589, y:391},
  {x:589, y:393},
  {x:589, y:398},
  {x:589, y:402},
  {x:589, y:406},
  {x:589, y:407},
  {x:590, y:397},
  {x:591, y:397},
  {x:591, y:398},
  {x:591, y:403},
  {x:591, y:406},
  {x:592, y:405},
  {x:592, y:397},
  {x:592, y:398},
  {x:593, y:395},
  {x:593, y:396},
  {x:593, y:401},
  {x:593, y:403},
  {x:593, y:411},
  {x:594, y:402},
  {x:594, y:411},
  {x:594, y:412},
  {x:595, y:392},
  {x:595, y:396},
  {x:595, y:401},
  {x:595, y:407},
  {x:595, y:408},
  {x:595, y:410},
  {x:596, y:393},
  {x:596, y:397},
  {x:596, y:400},
  {x:596, y:407},
  {x:596, y:409},
  {x:597, y:394},
  {x:597, y:402},
  {x:597, y:403},
  {x:597, y:409},
  {x:597, y:411},
  {x:597, y:412},
  {x:597, y:414},
  {x:598, y:393},
  {x:598, y:399},
  {x:598, y:400},
  {x:598, y:401},
  {x:598, y:403},
  {x:598, y:412},
  {x:598, y:406},
  {x:598, y:412},
  {x:598, y:417},
  {x:599, y:393},
  {x:599, y:399},
  {x:599, y:414},
  {x:600, y:398, noa: 15},
  {x:600, y:401},
  {x:600, y:407},
  {x:600, y:414},
  {x:600, y:416},
  {x:601, y:398},
  {x:601, y:403},
  {x:601, y:405},
  {x:601, y:406},
  {x:601, y:412},
  {x:602, y:392},
  {x:602, y:396},
  {x:602, y:400, noa: 15},
  {x:602, y:403, noa: 15},
  {x:602, y:407, noa: 10},
  {x:602, y:410},
  {x:603, y:400},
  {x:603, y:408},
  {x:603, y:412},
  {x:603, y:416},
  {x:603, y:417},
  {x:603, y:418},
  {x:604, y:395},
  {x:605, y:403},
  {x:605, y:405},
  {x:605, y:408},
  {x:605, y:411},
  {x:606, y:404},
  {x:607, y:407},
  {x:608, y:406},
  {x:610, y:411},
  {x:610, y:419},
  {x:611, y:408},
  {x:611, y:410},
  {x:611, y:417},
  {x:612, y:406},
  {x:612, y:407},
  {x:612, y:408},
  {x:613, y:418},
  {x:614, y:416},
  {x:615, y:407},
  {x:615, y:414},
  {x:615, y:415},
  {x:616, y:413},
  {x:617, y:414}
];


console.log("debug");
if (localStorage.getItem('attackCount') === null)
	localStorage.setItem('attackCount', '0')


console.log("attackCount", localStorage.getItem('attackCount'));
window.numberOfHorsesToAttackWith = 4;
window.numberOfSpiesToAttackWith = 0;
window.attackButton = $('#target_attack');



window.spiesAttacking = $('#unit_input_spy');
window.availableSpies = window.spiesAttacking.next().text().replace('(', '').replace(')', '');


console.log('available spies : ', window.availableSpies);
window.lightHorsesAttacking = $('#unit_input_light');
window.availableLightHorses = window.lightHorsesAttacking.next().text().replace('(', '').replace(')', '');

console.log('available light horses : ', availableLightHorses);

window.targetToAttackField = $('.target-input-field');
window.tempAttackCount;

if (unitsAvailable()) {

  attackNextTarget();
} else {
  
    self.setInterval(function(){

      console.log("waiting for units returning");
      window.location.href = window.location.href;
      if (unitsAvailable()) {
        console.log("units returned attack!!");
        attackNextTarget();
      } else {
        
      }

    },rand(5 * (60 * 1000), 10 * (60 * 1000)));
    
  // wait between 5 and 10 minutes
}


function unitsAvailable() {

	if ((window.availableSpies >= window.numberOfSpiesToAttackWith && window.availableLightHorses >= window.numberOfHorsesToAttackWith) && typeof window.targetsToAttack[localStorage.getItem('attackCount')].noa == "undefined") {
    return true;
	} else if (typeof window.targetsToAttack[localStorage.getItem('attackCount')].noa != "undefined") {

		if (window.availableLightHorses >= window.targetsToAttack[localStorage.getItem('attackCount')].noa) {

      return true;                                                          
		} else {

			return false;
		}
	}

	return false;
}


function attackNextTarget() {
  console.log(1);
  console.log("Trying to attack : " + window.targetsToAttack[localStorage.getItem('attackCount')].x + " " + window.targetsToAttack[localStorage.getItem('attackCount')].y);

  if (localStorage.getItem('attackCount') >= window.targetsToAttack.length-1)
		localStorage.setItem('attackCount', '0');

	window.spiesAttacking.val(window.numberOfSpiesToAttackWith);
  
  
  
  // just for now take a spy if available
//  if (window.availableSpies > 0)
//    window.spiesAttacking.val(1);
  
  
  
  
  // Check in the config object if a number of attackers is specified and set that value instead of the default (window.numberOfHorsesToAttackWith = 5;) 
  if (typeof window.targetsToAttack[localStorage.getItem('attackCount')].noa != 'undefined')
    window.lightHorsesAttacking.val(window.targetsToAttack[localStorage.getItem('attackCount')].noa);
  else
	  window.lightHorsesAttacking.val(window.numberOfHorsesToAttackWith);
  
	window.targetToAttackField.val(window.targetsToAttack[localStorage.getItem('attackCount')].x);
  console.log(2);
	window.targetToAttackField.val(targetToAttackField.val() + '|' + window.targetsToAttack[localStorage.getItem('attackCount')].y);

  window.tempAttackCount = parseInt(localStorage.getItem('attackCount'));
  window.tempAttackCount ++;
	localStorage.setItem('attackCount', window.tempAttackCount);
  console.log(3);
  
  self.setInterval(function(){
    console.log(5);
    $("#target_attack").click();
  }, rand(4000, 5000));
}




function rand (min, max) {
	var args = arguments.length;  
	if (args === 0) {
		min = 0;
		max = 32768;
  }
  var val = Math.floor( Math.random() * (max - min + 1) ) + min;
  console.log("rand", val);
  
  return val;
}
