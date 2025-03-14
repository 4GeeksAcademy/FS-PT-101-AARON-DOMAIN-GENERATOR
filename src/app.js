import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let dom = ['es', 'com', 'io', 'org', 'net', 'us'];

  let dominios_generados = document.getElementById("dominios_generados");

  pronoun.forEach(i=> adj.forEach(j=> noun.forEach(k=> dom.forEach(z=>{
    let dominio = `${i}${j}${k}.${z}`;
    let li=document.createElement("li");
    li.textContent=dominio;
    dominios_generados.appendChild(li);
  }))));

  pronoun.forEach(i=>adj.forEach(j=>noun.forEach(k=>dom.forEach(z=>console.log(i+j+k+z)))));
};
