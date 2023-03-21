/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("dominio").innerHTML = generadorDominio;
  let generadorDominio = "";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i <= pronoun.length - 1; i++) {
    for (let j = 0; j <= adj.length - 1; j++) {
      for (let k = 0; k <= noun.length - 1; k++) {
        {
          generadorDominio += pronoun[i] + adj[j] + noun[k] + ".com" + "</br>";
        }
      }
    }
  }
  document.getElementById("dominio").innerHTML = generadorDominio;
};
