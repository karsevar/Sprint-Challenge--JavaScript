# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

The biggest differences I can think of between .forEach and .map are 
.forEach is primarily used for side effect purposes (for example console logging each individual element within an array), it doesn't create a new array after it's done executing the passed callback function, and lastly .forEach is not chainable within other ES6 array methods. In relation to .map(); .forEach() can be thought of as simply a for loop with less syntax to type out while .map() can be regarded as a for loop that automatically appends all the mutated elements within a new array.

2. What is the difference between a function and a method?

Simply speaking a method is a function except it is written within a class or object. In addition, usually object and class methods are written as anonymous functions (example function() { return 'Hello'} or () => return 'Hello') while functions can be written in anonymous and function declaration notation (example function declaration function name() { return 'Hello'}).

3. What is closure?

A closure is a combination of a function and the lexical environment within which that function was declared. In addition, whenever a function is created a new scope is created that encampsulates that function's environment where variables declared outside of its context can be referenced.
example:

```
const myName = 'Mason';

function getName() {
	console.log(myName);
}
```

The myName function was able to reach outward to the global scope for reference to the myName variable. With that said, remember that though function scopes can look outward for reference they can never look inward for other references. 
example:

```
function getName() {
	function nestedName() {
		const myName = 'Mason';
	}
	console.log(myName);
}
```

The output for this command will be a ReferenceError since nestedName() is within getName() and getName() can't reference myName.

4. Describe the four rules of the 'this' keyword.

To begin, the four rules are Global binding, Implicit binding, New binding, and Explicit binding. 

Global Binding: Also known as the window binding, global binding is the base console view of the JavaScript coding environment without the inclusion of nested object bindings. You can access global binding through the command 

```console.log(this);```

Implicit Binding: Usually reserved for objects and classes, is used for object methods that need to access particular keys within the object's body. 
example:

```
const myObj = {
	greeting: 'Hello',
	sayHello: function(name) {
		console.log(this.greeting + ' my name is ' + name);
	}
} 


myObj.sayHello('John');
```

As you can see in the above example, the binding for this in the sayHello method is myObj.

New Binding: Primarily reserved for the new ES6 class syntax, new binding obtains its this binding through referencing the class object with which it was called. 
example:

```
class myObj = {
	constructor(props) {
		this.name = props.name;
		this.greeting = props.greeting;
	}

	sayHello() {
		console.log(this.greeting + ' my name is ' + this.name);
	}
} 
```

const newObject = new myObj({name: 'Charles', greeting: 'Hello'});
newObject.sayHello();

As you can see the object {name: 'Charles', greeting: 'Hello'} is now bound to the myObj class through the new keyword. 

Implicit Binding: This rule is only allocated to the methods call, apply, and bind. Their purpose within the JavaScript ecosystem is to forcibly assign this binding to any object you pass as an argument.
example:

```
const sayHello = function() {
	console.log(this.greeting + ' ' + this.name);
}

sayHello.call({name: 'Mason', greeting: 'Hello'}); // Hello Mason
```

As you can see I explicitly passed name and greeting into the sayHello function that has references to this.greeting and this.name.

5. Why do we need super() in an extended class?

You need a super() command within the constructor block when ever extending from a parent class because super() allows you to pass the child properties to the parent class constructor block. This convention is just like the old pseudo class notation where you had to type

```
ParentObject.call(this, childProps)
```

in order to pass the child properties to the parent properties. And so without super() the child constructor block wouldn't have access to the parent properties and by extension the child wouldn't be truly a subclass of the parent.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
