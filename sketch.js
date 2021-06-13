var n1,n2,n3;
var b1,b2,b3,b4;
n3 = 0


function setup() {

  createCanvas(400, 400);
num1 = createInput();
num1.position(5,60);
num2 = createInput();
num2.position(200,60)
b1 = createButton("+");
b1.position(10,200);
b1.mousePressed(add);

b2 = createButton("-");
b2.position(100,200);
b2.mousePressed(subtract);

b3 = createButton("*");
b3.position(200,200);
b3.mousePressed(multiplication);

b4 = createButton("/");
b4.position(300,200);
b4.mousePressed(division);

textAlign(CENTER);
textSize(15);

}

function draw() {
  background(220);
  text("Number1",70,50);
  text("Number2",270,50);


  text(n3,200,300);
  n1 = parseInt(num1.value());
  n2 = parseInt(num2.value());
  
}
function add() {
console.log(n1 +n2)
n3 = n1+n2
};
function subtract() {
console.log(n1 - n2)
n3 = n1-n2
}
function multiplication() {
console.log(n1 * n2)
n3 = n1*n2
}
function division(){
console.log(n1 / n2)
n3 = n1/n2
}
