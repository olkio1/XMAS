class Lamp{
    turnOn(){
        console.log("Lamp is on");
    }
}
class User{
    name = ""
    constructor(name){
        this.name = name
    }
    sayHello(){
        console.log(`Hello, I am ${this.name}`);
    }
}
class Counter{
    counter = 0
    increment(){
        this.counter++;
    }
    getValue(){
        return this.counter;
    }
}
class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}
class Cat extends Animal{
    speak(){
        console.log("Cat meows");
    }
}
class Shape{
    draw(){

    }
}
class Circle extends Shape{
    draw(){
        console.log("Circle is drawn");
    }
}
class Square extends Shape{
    draw(){
        console.log("Square is drawn");
    }
}
class Button{
    click(){
        console.log("Button is clicked");
    }
}
class SaveButton extends Button{
    click(){
        console.log("Saving...");
    }
}
class DeleteButton extends Button{
    click(){
        console.log("Deleting...");
    }
}
let lampLight = new Lamp();
lampLight.turnOn();
let dog = new Dog();
let cat = new Cat();
dog.speak();
cat.speak();
let save = new SaveButton();
let delet = new DeleteButton();
save.click();
delet.click();
const buttons = [
    new SaveButton(),
    new DeleteButton()
  ];
buttons.forEach(btn => {
    btn.click();
  });
  class Account{
    balance =0;
    constructor(balance){
        this.balance = balance
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        this.balance -= amount;
    }
    getBalance(){
        return this.balance;
    }
  }  
  class AdminAccount extends Account{
    resetBalance(){
        this.balance = 0;
    }
  }
  class GamerCharacter{
    name =""
    health = 0
    constructor(name, health){
        this.name = name;
        this.health = health;
    }
    hit(){
        this.health -= 10;
    }
    status(){
        console.log(`${this.name} has ${this.health} health left`);
    }
  }
  class AdminCharacter extends GamerCharacter{
    heal(){
        this.health += 50;
    }
    hit(){
        this.health -= 5;
    }
    godMode(){
        this.health = Infinity;
    }
  }
  const admin = new AdminCharacter("Admin", 100);
  admin.hit();
  admin.status();
  admin.heal();
  admin.status();
  admin.godMode();

