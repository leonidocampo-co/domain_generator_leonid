/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the"];
  let adj = ["great"];
  let noun = ["jogger"];

  for (let i = 0; (i = pronoun.length); i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; noun < adj.length; k++) {
        console.log(pronoun[i] + adj[j] + adj[k]);
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
