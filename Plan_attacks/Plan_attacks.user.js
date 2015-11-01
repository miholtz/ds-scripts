// ==UserScript==
// @name        Plan_attacks
// @namespace   Ds_Farmbot
// @include     https://de119.die-staemme.de/game.php*screen=place
// @version     1
// @grant       none
// ==/UserScript==

window.targetsToAttackYS = [
	{x:596, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:595, y:396, sp:0, sw:0, ax:0, si:0, lh:8, hh:0, br:0, ca:0, sn:0},
	{x:595, y:395, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:596, y:400, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:597, y:400, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:598, y:399, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:597, y:394, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:593, y:395, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:592, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:592, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:593, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:594, y:402, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:595, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:597, y:402, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:598, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:600, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:598, y:400, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:599, y:399, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:596, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:598, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:599, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:595, y:392, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:594, y:391, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:599, y:390, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:592, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:601, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:602, y:396, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:597, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:598, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:593, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:591, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:592, y:405, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:591, y:406, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:591, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:591, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:590, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:589, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:594, y:389, sp:0, sw:0, ax:0, si:0, lh:10, hh:0, br:0, ca:0, sn:0},
	{x:591, y:389, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:590, y:388, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:589, y:391, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:588, y:391, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:587, y:391, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:586, y:389, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:587, y:392, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:589, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:588, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:587, y:395, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:588, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:587, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:589, y:402, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:588, y:402, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:587, y:403, sp:0, sw:0, ax:0, si:0, lh:10, hh:0, br:0, ca:0, sn:0},
	{x:590, y:403, sp:0, sw:0, ax:0, si:0, lh:10, hh:0, br:0, ca:0, sn:0},
	{x:600, y:398, sp:0, sw:0, ax:0, si:0, lh:8, hh:0, br:0, ca:0, sn:0},
	{x:594, y:398, sp:0, sw:0, ax:0, si:0, lh:10, hh:0, br:0, ca:0, sn:0},
	{x:592, y:399, sp:0, sw:0, ax:0, si:0, lh:10, hh:0, br:0, ca:0, sn:0},
	{x:605, y:398, sp:0, sw:0, ax:0, si:0, lh:3, hh:0, br:0, ca:0, sn:0},
	{x:605, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:604, y:396, sp:0, sw:0, ax:0, si:0, lh:3, hh:0, br:0, ca:0, sn:0},
	{x:604, y:395, sp:0, sw:0, ax:0, si:0, lh:6, hh:0, br:0, ca:0, sn:0},
	{x:602, y:392, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
	{x:601, y:388, sp:0, sw:0, ax:0, si:0, lh:3, hh:0, br:0, ca:0, sn:0},
	{x:598, y:389, sp:0, sw:0, ax:0, si:0, lh:3, hh:0, br:0, ca:0, sn:0},
	{x:597, y:389, sp:0, sw:0, ax:0, si:0, lh:3, hh:0, br:0, ca:0, sn:0},
  {x:605, y:395, sp:0, sw:0, ax:0, si:0, lh:3, hh:0, br:0, ca:0, sn:0},
  {x:603, y:400, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:605, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:589, y:406, sp:0, sw:0, ax:0, si:1, lh:10, hh:0, br:0, ca:0, sn:0},
  {x:589, y:407, sp:0, sw:0, ax:0, si:1, lh:10, hh:0, br:0, ca:0, sn:0},
  {x:596, y:407, sp:0, sw:0, ax:0, si:1, lh:10, hh:0, br:0, ca:0, sn:0},
  {x:598, y:406, sp:0, sw:0, ax:0, si:1, lh:10, hh:0, br:0, ca:0, sn:0}
];

window.targetsToAttackMH = [
  {x:585, y:394, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},  
  {x:585, y:395, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:585, y:396, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:585, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:585, y:404, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:585, y:410, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:586, y:410, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:587, y:391, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:587, y:392, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:587, y:395, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:587, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:587, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:587, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:587, y:409, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:588, y:391, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:588, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:588, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:588, y:402, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:588, y:408, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:588, y:415, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:589, y:391, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:589, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:589, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:589, y:402, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:589, y:406, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:589, y:407, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:589, y:414, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:589, y:416, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:590, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:590, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:590, y:411, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:590, y:413, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:591, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:591, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:591, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:591, y:406, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:591, y:416, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:592, y:405, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:592, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:592, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:592, y:399, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:592, y:406, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:592, y:409, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:593, y:395, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:593, y:396, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:593, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:593, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:593, y:411, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:594, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:594, y:402, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  // {x:594, y:411, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  // {x:594, y:412, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:594, y:419, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:392, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:396, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:406, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:407, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:408, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:409, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:410, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:412, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:418, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:595, y:419, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:596, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:596, y:397, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:596, y:400, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:596, y:407, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:596, y:409, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:596, y:413, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:597, y:394, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:597, y:400, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:597, y:402, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:597, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:597, y:403, sp:0, sw:0, ax:0, si:0, lh:10, hh:0, br:0, ca:0, sn:0},
  {x:597, y:409, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:597, y:411, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:597, y:412, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:597, y:414, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:598, y:393, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:598, y:399, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:598, y:400, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:598, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  // {x:598, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:598, y:412, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:598, y:406, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, 
  {x:598, y:412, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:598, y:417, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:598, y:419, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:598, y:420, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:599, y:394, sp:0, sw:0, ax:0, si:0, lh:10, hh:0, br:0, ca:0, sn:0},
  // {x:599, y:399, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:599, y:414, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:600, y:398, sp:0, sw:0, ax:0, si:0, lh:15, hh:0, br:0, ca:0, sn:0},
  // {x:600, y:401, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:600, y:407, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:600, y:414, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:600, y:416, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:601, y:398, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:601, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:601, y:405, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:601, y:406, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:601, y:407, sp:0, sw:0, ax:0, si:0, lh:6, hh:0, br:0, ca:0, sn:0},
  {x:601, y:412, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:602, y:392, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:602, y:396, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:602, y:400, sp:0, sw:0, ax:0, si:0, lh:15, hh:0, br:0, ca:0, sn:0},
  // {x:602, y:403, sp:0, sw:0, ax:0, si:0, lh:15, hh:0, br:0, ca:0, sn:0}, //2
  // {x:602, y:407, sp:0, sw:0, ax:0, si:0, lh:15, hh:0, br:0, ca:0, sn:0}, //2
  {x:602, y:410, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:602, y:413, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:602, y:416, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:603, y:400, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:603, y:404, sp:0, sw:0, ax:0, si:0, lh:10, hh:0, br:0, ca:0, sn:0},
  {x:603, y:408, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:603, y:412, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:603, y:416, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:603, y:417, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:603, y:418, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  // {x:604, y:395, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  // {x:605, y:403, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  // {x:605, y:405, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},  //2 3
  {x:605, y:407, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:605, y:408, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:605, y:411, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:605, y:415, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:606, y:404, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:607, y:407, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:608, y:406, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:610, y:411, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:610, y:419, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:611, y:408, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}, //2
  {x:611, y:417, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:612, y:406, sp:0, sw:0, ax:0, si:0, lh:8, hh:0, br:0, ca:0, sn:0},
  {x:612, y:407, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:612, y:408, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:613, y:418, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:614, y:416, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  {x:615, y:407, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}
  // {x:615, y:414, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:615, y:415, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  // {x:616, y:413, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0},
  //{x:617, y:414, sp:0, sw:0, ax:0, si:0, lh:4, hh:0, br:0, ca:0, sn:0}
];

window.targetsToAttackPR = [
  {x:100, y:100, sp:0, sw:0, ax:0, si:0, lh:0, hh:0, br:0, ca:0, sn:0}
];

console.log("debug");

//use this line to check whether you have double in your list.
//countDoublesYS();
//countDoublesMH();
//countDoublesPR();

// localStorage.setItem("targetsToAttackYS", JSON.stringify(window.targetsToAttackYS));
// localStorage.setItem("targetsToAttackYS", JSON.stringify(window.targetsToAttackMH));
// localStorage.setItem("targetsToAttackYS", JSON.stringify(window.targetsToAttackPR));

//please adapt the ending of the array to the first letter of your fore and lastname.
if(localStorage.getItem('attackCount') === null || localStorage.getItem('attackCount') > window.targetsToAttackYS.length - 1)
	localStorage.setItem('attackCount', '0');

console.log("currentCount", localStorage.getItem('attackCount'));

window.attackButton = $('#target_attack');

//catch information about the amount of spies
window.spiesAttacking = $('#unit_input_spy');
window.availableSpies = window.spiesAttacking.next().text().replace('(', '').replace(')', '');
console.log('available spies : ', window.availableSpies);

//catch information about the amount of light horses
window.lightHorsesAttacking = $('#unit_input_light');
window.availableLightHorses = window.lightHorsesAttacking.next().text().replace('(', '').replace(')', '');
console.log('available light horses : ', availableLightHorses);

//catch information about the amount of spears
window.spearsAttacking = $('#unit_input_spear');
window.availableSpears = window.spearsAttacking.next().text().replace('(', '').replace(')', '');
console.log('available spears : ', availableSpears);

//catch information about the amount of axes
window.axesAttacking = $('#unit_input_axe');
window.availableAxes = window.axesAttacking.next().text().replace('(', '').replace(')', '');
console.log('available axes : ', availableAxes);

//catch information about the amount of swords
window.swordsAttacking = $('#unit_input_sword');
window.availableSwords = window.swordsAttacking.next().text().replace('(', '').replace(')', '');
console.log('available swords : ', availableSwords);

//catch information about the amount of heavy horses
window.heavyHorsesAttacking = $('#unit_input_heavy');
window.availableHeavyHorses = window.heavyHorsesAttacking.next().text().replace('(', '').replace(')', '');
console.log('available heavyHorses : ', availableHeavyHorses);

//catch information about the amount of battering Rams
window.batteringRamsAttacking = $('#unit_input_ram');
window.availableBatteringRams = window.batteringRamsAttacking.next().text().replace('(', '').replace(')', '');
console.log('available battering rams : ', availableBatteringRams);

//catch information about the amount of catapults
window.catapultsAttacking = $('#unit_input_catapult');
window.availableCatapults = window.catapultsAttacking.next().text().replace('(', '').replace(')', '');
console.log('available catapults : ', availableCatapults);

//catch information about the amount of snob
window.snobsAttacking = $('#unit_input_snob');
window.availableSnobs = window.snobsAttacking.next().text().replace('(', '').replace(')', '');
console.log('available snobs : ', availableSnobs);

window.targetToAttackField = $('.target-input-field');
window.tempAttackCount;
window.currentAttackCount;

//please adapt the ending of the array to the first letter of your fore and lastname.
var target = window.targetsToAttackYS[localStorage.getItem('attackCount')];

console.log("x | y", target.x + " " + target.y);

if (unitsAvailable(target)) {

  attack(target);
} 
else{
	  // wait between 5 and 10 minutes
		self.setInterval(function(){

      console.log("waiting for units returning");
      window.location.href = window.location.href;
		
      if (unitsAvailable(target)) {
        console.log("units returned attack!!");
        attack(target);
      } 

    },rand(1 * (60 * 1000), 7 * (60 * 1000)));
}

function unitsAvailable(target){
	
	return (target.sp <= window.availableSpears && target.sw <= window.availableSwords && target.ax <= window.availableAxes && target.si <= window.availableSpies && target.lh <= window.availableLightHorses && target.hh <= window.availableHeavyHorses && target.br <= window.availableBatteringRams && target.ca <= window.availableCatapults && target.sn <= window.availableSnobs);
	
}

function attack(target){
	console.log("Trying to attack : " + target.x + "|" + target.y + " " + target.sp + " " + target.sw + " " + target.ax + " " + target.si + " " + target.lh + " " + target.hh + " " + target.br + " " + target.ca + " " + target.sn);
	
	// inserts unit amounts
	window.spearsAttacking.val(target.sp);
	window.swordsAttacking.val(target.sw);
	window.axesAttacking.val(target.ax);
	window.lightHorsesAttacking.val(target.lh);
	window.heavyHorsesAttacking.val(target.hh);
	window.spiesAttacking.val(target.si);
	window.batteringRamsAttacking.val(target.br);
	window.catapultsAttacking.val(target.ca);
	window.snobsAttacking.val(target.sn);
	
	// inserts target
	window.targetToAttackField.val(target.x + '|' + target.y);
	
	// adds one to the counter
	window.currentAttackCount = parseInt(localStorage.getItem('attackCount'));
	window.currentAttackCount++;
	localStorage.setItem('attackCount', window.currentAttackCount);
	
	self.setInterval(function(){
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

// specifically function for yannick to visualise double entries.
function countDoublesYS(){
		for (i = 0; i < window.targetsToAttackYS.length; i++) { 
			
			var isDouble = false;
			var xi = window.targetsToAttackYS[i].x;
			var yi = window.targetsToAttackYS[i].y;
			
			for(j = 0; j < window.targetsToAttackYS.length; j++){
				
				var xj = window.targetsToAttackYS[j].x;
				var yj = window.targetsToAttackYS[j].y;
				
				if(i != j && xi == xj && yi == yj){
					
					isDouble = true;
					break;
					
				}
			}
			
			if(isDouble)
				alert(xi + "|" + yi);
	}
}

// specifically function for michel to visualise double entries.
function countDoublesMH(){
		for (i = 0; i < window.targetsToAttackMH.length; i++) { 
			
			var isDouble = false;
			var xi = window.targetsToAttackMH[i].x;
			var yi = window.targetsToAttackMH[i].y;
			
			for(j = 0; j < window.targetsToAttackMH.length; j++){
				
				var xj = window.targetsToAttackMH[j].x;
				var yj = window.targetsToAttackMH[j].y;
				
				if(i != j && xi == xj && yi == yj){
					isDouble = true;
					break;
				}
			}
			
			if(isDouble)
				alert(xi + "|" + yi);
		}
}

// specifically function for pascal to visualise double entries
function countDoublePR(){
  for(i = 0; i < window.targetsToAttackPR.length; i++){
    
    var isDouble = false;
    var xi = window.targetsToAttackPR[i].x;
    var yi = window.targetsToAttackPR[i].y;
    
    for(j = 0; j < window.targetsToAttackPR.length; j++){
      
      var xj = window.targetsToAttackPR[j].x;
      var yj = window.taretsToAttackPR[j].y;
      
      if(i != j && xi == xj && yi == yj){
        isDouble = true;
        break;
      }
    }
    
    if(isDouble)
      alert(xi + "|" + yi);
  }
}
