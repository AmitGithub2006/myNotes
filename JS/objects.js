// 1.
// let radius = 1;
// let x = 2;
// let y = 2;
//We can draw single circle only with these values.

// 2.
// const circle = {
//     radius : 1,
//     location : {
//         x : 2,
//         y : 2,
//     }
// }
// console.log(circle.radius) //OR console.log(circle['radius'])
// console.log(circle["location"])
// console.log(circle['location']['y']) //OR console.log(circle.location.y)

// 3.
// const circle = {
//     radius : 1,
//     location : {
//         x : 2,
//         y : 2
//     }
// }
// let loc = 'location';
// console.log(circle[loc]['x']) // 2
// console.log(circle.loc.x) // Error

// circle['circle dia']  = 2; // We cannot use dot operator to give key name with space in between.
// console.log(circle);
//So, it is preferred to use the first method, not the dot operator.

// 4.
// const circle = {
//   radius: 1,
//   location: {
//     x: 2,
//     y: 2,
//   },
//   draw: function () {
//     console.log("drawing circle");
//   },
// };
// console.log(circle['draw']); // [Function: draw]
// console.log(circle.draw()); // drawing circle
// Dot operator is preferred in case of function.

// 5.
// const circle1 = {
//   radius: 1,
//   location: {
//     x: 2,
//     y: 2,
//   },
//   draw: function () {
//     console.log("drawing circle");
//   },
// };
// console.log(circle1.draw(), circle1.radius);

// const circle2 = {
//     radius: 5,
//     location: {
//       x: 4,
//       y: 4,
//     },
//     draw: function () {
//       console.log("drawing circle");
//     },
//   };
//   console.log(circle2.draw(), circle2.radius);
//We have to enter every time the user details by this method.

//6.
// let amit = {
//     fullName : 'amit kumar shakya',
//     job : 'building myself',
//     place : 'fbd',
// };
// let vasanth = {
//     fullName : 'vasanth kumar Vinayagam',
//     job : 'building career',
//     place : 'chennai',
// };
// console.log(amit.fullName,amit.job,amit.place);
// console.log(vasanth.fullName,vasanth.job,vasanth.place);

// 7. Best way
// function createPerson(fullName, job, place){
//     return {
//         fullName : fullName,
//         job : job,
//         place : place,
//     }
// }
// let amit = createPerson('amit', 'student', 'fbd');
// let vasanth = createPerson('vasanth', 'teacher', 'chennai');
// console.log(amit, vasanth);
// console.log(vasanth.fullName);

// 8.Factory Method:- It is a function accepting parameter and with this parameter, it creates new object.
// function createCircle(radius = 1, location = {x:2, y:2}){
//     const circle = {
//         radius : radius,
//         location : location,
//         draw(){  // OR draw : function(){
//             return 'drawing circle';
//         }
//     }
//     return circle;
// }
// let circle1 = createCircle();
// circle1.name = 'amit';
// console.log(circle1.radius, circle1.draw(), circle1.name);
// let circle2 = createCircle(20);
// console.log(circle2.radius, circle2.draw(), circle2);
// Here, we are creating our own object.

// 9.
// Variable present inside the object is called property.
// Variable present outside the object is called variable.
// Function present inside the object is called method.
// Function present outside the object is called function.
// We need to write function keyword inside the object. We can directly give name and call it.

// 10. Constructor Method:- Pascal case is used.
// function Circle(radius) {
//     console.log(this);
// }
// Circle();
// this - object that is executing the current function.
// 'this' holds function properties. We can write 'window' in place of 'this' in browser but not here because 'window' is stored in browser only.
// We are writing this function here, that's why it is giving node properties. If we write same function in browser, it will give window object.
// Here,'this' means global object.
// All HTML and CSS properties are stored in window object.
// Entire HTML is stored in window.document.

// (i)
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function () {
//         return "drawing circle";
//     }
//     return this;
// }
// let circle = Circle(1);
// console.log(circle, circle.draw());
// let circle1 = Circle(120);
// console.log(circle1, circle1.draw());
// Here, we are using existing object.

//(ii) If we want to create new object, then we should use 'new' keyword. We can say that 'new' keyword is used to remove global object.
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function () {
//         return "drawing circle";
//     }
//     return this;
// }
// let circle = new Circle(1);
// console.log(circle, circle.draw());
// let circle1 = new Circle(120);
// console.log(circle1, circle1.draw());

// We make a new string ({}) manually in factory method but it is automatically generated in the constructor method using 'new' keyword.

// (iii)
// var me = {
//     firstName: 'John',
//     lastName : 'abraham',
//     fullName : function(){
//         return this.firstName + ' ' + this.lastName;
//     }
// };
// Refers to the owner object(here 'me').

// (iv)
// var x = this.name;
// console.log(x);
//Refers to the global object.

// (v)
// function myFunction(){
//     return this.name;
// }
//Refers to the global object.

//11.
// let num = 10;
// let num1 = new Number(20);
// console.log(num, num1);

// 12.
// let lname = 'vasanth';
// let fname = new String('kumar');
// console.log(lname, fname);
// for(let i = 0; i < fname.length; i++) {
//     console.log(fname[i]);
// }
// let isPresent = true;
// let isNotPresent = new Boolean(true);

// 13.
// const add = new Function(
//     "num1",
//     `
//     console.log(num1+20);
//     console.log(num1);
//     `
// );
// add(10);

// 14.
// console.table({name:'amit', marks:35})

//15.
// let car = {
//     company : "BMW",
//     model : "Q3",
//     year : "2022",
//     type : "SUV",
// };
// for(let key of car) {
//     console.log(key);
// }
// for-of loop only works for arrays or strings(which are iterable).
// Whichever having numbered indexes(0,1,2,3...) are called iterable.

//16.
// let car = {
//     company : "BMW",
//     model : "Q3",
//     year : "2022",
//     type : "SUV",
// };
// for(let key in car) {
//     console.log(key, car[key]);
// }
// We can write anything in place of 'key'.
// in loop is used to get keys of object.
// If we want values then we do object[key].
// console.log(Object.keys(car))

// 17.
// let car = {
//     company : "BMW",
//     model : "Q3",
//     year : "2022",
//     type : "SUV",
// };
// let person = {
//     name : "amit",
//     job : "don",
// };
// let carKeys = Object.keys(car);
// let personKeys = Object.keys(person);
// console.log(carKeys, personKeys);

// let carValues = Object.values(car);
// let personValues = Object.values(person);
// console.log(carValues, personValues);

// let carProperties = Object.entries(car);
// console.log(carProperties);
// console.log(carProperties[0][0], carProperties[0][1]);

// We can print keys and values from for-loop also.
// let keys = [];
// let values = [];
// for(let key in car){
//     keys.push(key);
//     values.push(car[key]);
// }
// console.log(keys, values);

// We can use this method in arrays too.
// let arr = [1, 2, 3, 4, 5]
// console.log(Object.keys(arr), Object.values(arr), Object.entries(arr));

// 18.Copying of objects - use spread operator
// (i)
// let person = {
//     name : 'amit',
//     age : 25,
// };
// let copy = person;
// copy['name'] = 'sumit';
// console.log(person,copy);
// name is changing at both places because both are pointing to same object.

// (ii)
// let person = {
//     name : 'amit',
//     age : 25,
// };
// let copy = {...person};
// copy['age'] = 22;
// console.log(person,copy);

// (iii) nested object
// let person = {
//     name : 'amit',
//     age : 25,
//     diet : {
//         morning : 'breakfast',
//         night : 'dinner',
//     },
// };
// let copy = {...person}
// person['diet']['morning'] = 'lunch';
// console.log(person,copy);
// Spread operator does shallow copy only.

// (iv) For deep copying
// let person = {
//     name : 'amit',
//     age : 25,
//     diet : {
//         morning : 'breakfast',
//         night : 'dinner',
//     },
// };
// let copy = JSON.stringify(person);
// let copiedPerson = JSON.parse(copy);
// person['diet']['night'] = 'mdm';
// console.log(person, copiedPerson);
// stringify converts object to string and parse converts string to object.

//19. 
//Primitive data types
// let num = 10;
// function change(value){
//     console.log('before changing', num, value);
//     value = 20;
//     console.log('after changing',num, value);
// }
// change(num);

//Reference data types
// (i)
// let num = 10;
// let copy = JSON.parse(JSON.stringify(num));
// function change(value){
//     console.log('before changing', num, value);
//     copy = 5;
//     console.log('after changing',num, copy);
// }
// change(num);

//20. Object in function

// let person = {
//     name : 'krish',
//     age : 10,
// };
// function change(obj) {
//     console.log('before changing', person, obj);
//     obj['age'] = 20;
//     console.log('after changing', person, obj);
// }
// change(person);

//Ques:- Calculate length of object.
// let obj = {
//     name : 'david',
//     age : 20,
//     country : 'USA',
// };
// console.log(Object.keys(obj).length);
// Here 'Object.keys(obj)' becomes array so we can calculate length of array by adding '.length' in it.
//                              OR
// let count = 0;
// for(let key in obj) {
//     count += 1;
// }
// console.log(count);

//Ques:-  Sort by keys.
// let obj = {
//         name : 'david',
//         age : 20,
//         country : 'USA',
// };
// let sortedKeys = Object.keys(obj).sort();
// console.log(Object.entries(obj).sort());
// let sortedObj = {};
// for(let key of sortedKeys) {
//     sortedObj[key] = obj[key];
// }
// console.log(sortedObj);

// let sortedItems = Object.entries(obj).sort();
// console.log(sortedItems);
// let sortedObj = {};
// for(let item of sortedItems) {
//     console.log(item);
//     sortedObj[item[0]] = item[1];
// }
// console.log(sortedObj);

//Ques:- Find keys and values in object.
// let car = {
//     name : 'maruti',
//     model : 2022,
// };
// for(let key in car) {
//     console.log(key, car[key]);
// }

// 21.
// let car = {
//     name : 'maruti',
//     model : 2022,
// };
// delete(car.name);
// console.log(car);
// delete(car);
// console.log(car);
// We can delete any no. of keys but can't delete whole object.
// Don't use delete operator as much as possible.

//22. Sort by values
// let scores = {
//     ajay : 90,
//     vijay : 70,
//     sanjay : 80,
//     dhananjay : 85,
// }
// let values = Object.values(scores).sort((a,b) => a-b);
// console.log(values);

// let values = Object.entries(scores).sort();
// console.log(values);
// let values = Object.values(scores).sort((a,b) => a-b);
// console.log(values);
// let values = Object.entries(scores).sort((a,b) => a[0]-b[0]); 
// console.log(values); // keys are strings that's why not sorting
// let values = Object.entries(scores).sort((a,b) => a[1]-b[1]); 
// console.log(values);

//23.
// let scores = {
//     ajay : 90,
//     vijay : 70,
//     sanjay : 80,
//     dhananjay : 85,
// }
// let values = Object.entries(scores).sort((a,b) => a[1]-b[1]);
// let sortedObj = {}
// for(let i = 0; i < values.length; i++){
    // console.log(values[i]);
    // console.log(values[i][0], values[i][1]);
    // sortedObj[values[i][0]] = values[i][1];
// }
// console.log(sortedObj);

// 24.
// let keys = ['name', 'age', 'country'];
// let values = ['amit', 25, 'india'];
// let obj = {};
// for(let i = 0; i < keys.length; i++) {
//     obj[keys[i]] = values[i];
// }
// console.log(obj);

// 25.
// (i)
// const person = {
//     firstName : 'amit',
//     lastName : 'kumar',
//     fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
// }
// console.log(person.fullName());

// (ii)
// const person = {
//     firstName : 'amit',
//     lastName : 'kumar',
//     fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
// }
// person.fullName = 'sachin tendulkar';
// console.log(person.fullName());
// Here, it is giving error because fullName is no more a function(it becomes string). Let's see in (iii)...

// (iii)
// const person = {
//     firstName : 'amit',
//     lastName : 'kumar',
//     fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
// }
// person.fullName = 'sachin tendulkar';
// console.log(person);
// console.log(person.fullName)

// Method :- Function inside an object.
// In method, 'this' represents parent object.
// In normal function(i.e. outside the object), 'this' represents global object.
// Let's see example...
// const video = {
//     title : 'cricket',
//     play() {
//         console.log(this)
//     }
// }
// video.play();
// Here we can clearly see that the output is showing the object(In method,'this' represents parent object).

// Let's take an another example...
// const video = {
//     title : 'cricket',
//     play() {
//         console.log(this)
//     },
//     stop : function() {
//         console.log(this);
//     },
// }
// video.play();
// video.stop();
// Here also, we can see that wherever 'this' is present, it is representing parent object.

// Let's see an example of normal function...
// (i)
// function play() {
//     console.log(this);
// }
// play();
// We can clearly see that 'this' is representing global object.

// (ii)
// stop = function() {
//             console.log(this);
// }
// stop();

// (iii) If we want own object(don't want global object) then we'll use 'new' keyword.
// (a)
// function play() {
//     console.log(this);
// }
// new play();

// (b)
// stop = function() {
//             console.log(this);
// }
// new stop();

//Example
// 1.
// const match = {
//     title : 'cricket',
//     players : ['sachin', 'sehwag', 'dravid'],
//     displayplayers(){
//         this.players.forEach(function(player){
//             console.log(player)
//         })
//     }
// }
// match.displayplayers();

// 2.
// const match = {
//     title : 'cricket',
//     players : ['sachin', 'sehwag', 'dravid'],
//     displayplayers(){
//         this.players.forEach(function(player){
//             console.log(this)
//         })
//     }
// }
// match.displayplayers();
// For 'this', there is no parent object, that's why it is giving global object.

// 3.
// const match = {
//     title : 'cricket',
//     players : ['sachin', 'sehwag', 'dravid'],
//     displayplayers(){
//         this.players.forEach(function(player){
//             console.log(this.title)
//         })
//     }
// }
// match.displayplayers();
// We can access upti the one level only using normal function.

// 4.
// const match = {
//     title : 'cricket',
//     players : ['sachin', 'sehwag', 'dravid'],
//     displayplayers(){
//         this.players.forEach((player) => {
            // console.log(this)
//             console.log(this.title)
//         })
//     }
// }
// match.displayplayers();
// We can access everything using arrow function.
// Arrow function will take grand parent as a parent object.

// Object destructuring
// (i)
// let obj = {
//     fname : 'amit',
//     Class : 'engg',
//     profession : 'developer',
// }
// let {fname, Class} = obj;
// console.log(fname, Class);

// (ii)
// let obj = {
//     fname : 'amit',
//     Class : 'engg',
//     profession : 'developer',
// }
// let {fname, ...rest} = obj;
// console.log(fname, rest);