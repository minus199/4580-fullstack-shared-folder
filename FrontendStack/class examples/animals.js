function Animal(numOfLegs, type) {
  this.numOfLegs = numOfLegs;
  this.type = type;
}

Animal.prototype.getInfo = function() {
  return `numOfLegs: ${this.numOfLegs}`;
};

Animal.prototype.getType = function() {
  return this.type;
};

function Cat(color, age) {
  Animal.call(this, 4, "cat");
  this.color = color;
  this.age = age;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.getInfo = function() {
  // Animal.prototype.getInfo.call(this) equals to base.ToString() in C# or super.toString() in Java
  return (
    Animal.prototype.getInfo.call(this) +
    `, color: ${this.color}, age: ${this.age}`
  );
};

function Dog(color, age) {
  Animal.call(this, 4, "dog");
  this.color = color;
  this.age = age;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.getInfo = function() {
  // Animal.prototype.getInfo.call(this) equals to base.ToString() in C# or super.toString() in Java
  return (
    Animal.prototype.getInfo.call(this) +
    `, color: ${this.color}, age: ${this.age}`
  );
};
