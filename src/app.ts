import { Item } from "./item";
import { Animal, Dog } from "./animal";
var elem = document.getElementById("output");
var aBook = new Item("はじめてのTypeScript", 2000);

// const a = new Animal();
const d = new Dog();

d.ani();
// d.ani();

/*
const print = (data: any): void => {
  if (elem) {
    elem.innerHTML = data;
  }
};
*/
