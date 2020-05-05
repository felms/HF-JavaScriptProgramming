function Robot(name, year, owner){
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";

Robot.prototype.speak = function(){
	console.log("General Kenobi!");
};

Robot.prototype.makeCoffee = function(){
	console.log("Ok. Your coffee will be ready in 5 minutes.");
};

Robot.prototype.blinkLights = function(){
	console.log("x*x*x*x");
};

var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = function(){
	console.log("Oh you're NOT shutting me down, boy!");
};

robby.makeCoffee = function(){
	console.log("Make coffee? Am I looking like Starbucks to you?");
}

rosie.cleanHouse = function(){
	console.log("Roomba!! Come here boy, I have a job for you.");
}

console.log(robby.name + " was made by " + robby.maker + 
		" in " + robby.year + " and is owned by " + robby.owner);

robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + 
		" in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();
