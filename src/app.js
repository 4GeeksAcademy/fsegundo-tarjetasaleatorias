import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {
  //write your code here

const sticks = ["♠", "♣", "♥", "♦"];
const numbersRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const sticksRandom = sticks[Math.floor(Math.random() * sticks.length)];
const numbers = numbersRandom[Math.floor(Math.random() * numbersRandom.length)];

document.getElementById("iconTop").innerHTML = sticksRandom;
document.getElementById("iconBottom").innerHTML = sticksRandom;
document.getElementById("number").innerHTML = numbers;



};
