/*
0. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
- Store the following into variables:
  number of children, partner's name, geographic location, job title.
- Output your fortune to the screen like so:
  "You will be a X in Y, and married to Z with N kids."
*/

var numKids  = 5;
var partner  = 'David Beckham';
var location = 'Costa Rica';
var jobTitle = 'web developer';

var future = 'You will be a ' + jobTitle + ' in ' + location + ', and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);

/*
1. The Age Calculator
Forgot how old someone is? Calculate it!
- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

var year = 1984;
var now  = 2016;
var age  = now - year;
console.log('They are either ' + age + ' or ' + (age - 1));

/*
2. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);

/*
3. The Geometrizer
Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm
- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/
var radius = 3;
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
console.log("The area is " + area);
/*
4. The Temperature Converter
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/
var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
