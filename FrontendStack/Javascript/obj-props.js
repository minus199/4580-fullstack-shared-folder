/*
Property Descriptor
Every object property is more than just a name and value pair. Each property is having property descriptor that helps to see all the attributes of that property.
*/
var bike = {
  name: "SuperSport",
  maker: "Ducati",
  engine: "937cc"
};
console.log(Object.getOwnPropertyDescriptor(bike, "engine"));
//Output will be below object
/*{
  configurable: true,
  enumerable: true,
  value: "937cc",
  writable: true
}*/

/*
writable attribute - decides whether the value associated with the 
property can be changed or not, from its initial value. 
we can modify the property attributes using method 
Object.defineProperty() like below:
*/
var bike = {
  name: "SuperSport",
  maker: "Ducati",
  engine: "937cc"
};
Object.defineProperty(bike, "engine", { writable: false });
bike.engine = "2000cc";
// Throws error in strict mode
// Uncaught TypeError: Cannot assign to read only property
console.log(bike.engine);
// Output will be 937cc in non-strict mode

//Configurable attribute
var bike = {
  name: "SuperSport",
  maker: "Ducati",
  engine: "937cc"
};
Object.defineProperty(bike, "name", { configurable: false });
Object.defineProperty(bike, "name", { enumerable: false });
// TypeError: Cannot redefine property: name
Object.defineProperty(bike, "name", { writable: false });
// No error
Object.defineProperty(bike, "name", { configurable: true });
// Throws error
delete bike.name;
// TypeError: Cannot delete property 'name' (strict mode only)

//get and set attributes
var fuel = "petrol";
var car = {
  name: "SuperFast",
  maker: "Ferrari",
  engine: "v12"
};
Object.defineProperty(car, "engineDetails", {
  get: function() {
    return fuel + " " + this.engine + " engine";
  },
  set: function(details) {
    let splits = details.split(" ");
    fuel = splits[0];
    this.engine = splits[1];
  }
});
console.log(car.engineDetails); // output: petrol v12 engine
car.engineDetails = "diesel v8";
console.log(car.engineDetails); // output: diesel v8 engine
