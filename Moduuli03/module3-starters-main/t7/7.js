'use strict';
const target = document.getElementById('target');
const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseover', () => {
  target.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseout', () => {
  target.src = 'img/picA.jpg';
});