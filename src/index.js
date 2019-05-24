import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends React.Component {
	render() {
		return (
			<span>
				<p className="heading">Hello</p>
				<p className="paragraph">World</p>
			</span>	
		)
	}
}

class ESSix extends React.Component {
	render() {
		//ES6 features from `The Andela Way`

		//const must be assigned an initial value but cannot be redeclared within the same scope.
		const name = "Kunj";

		//Example of spread operator, denoted by … is used to expand iterable objects into multiple elements.
		var arr = [1,2,3];
		console.log(...arr);

		//template literals: include embedded expressions, denoted by backticks(`).
		const student = {
			name: 'Kunj',
			city: 'Ajmer'
		};
		let message = `Hello ${student.name} from ${student.city}`;
		console.log(message); //Hello Kunj from Ajmer

		//Default function parameters while initialisation
		function greet(name = 'Kunj', message = 'Welcome') {
			return `${message} ${name}`;
		}
		console.log(greet()); // Welcome Kunj
		console.log(greet('Anuj')); // Welcome Anuj

		//Destructuring
		//1
		const points = [20, 30, 40];
		const [x, y, z] = points;
		console.log(x, y, z); //20 30 40
		//2
		const nums = {
			one: 20,
			two: 30,
			three: 40
		};
		const {one, two, three} = nums;
		console.log(one, two, three); //20 30 40
		//3
		let four = 50;
		let five = 60;
		let six = 70;

		const nums2 = {
			four,
			five,
			six
		};
		console.log(nums2); //Object { four: 50, five: 60, six: 70 }

		//Arrow functions
		//If body is a single line of code writing return not required.
		const n = name => name.toUpperCase();
		const l = (name, city) => console.log(`${name} is from ${city}.`);//two parameters
		l('Kunj', 'Ajmer');
		console.log(n('kunj'));
		//Block body syntax: if there is more than one line, 
		const b = name => {
		  name = name.toUpperCase();
		  return `${name.length} characters make up ${name}'s name`;
		};
		console.log('name', b('aaaaaa'));


		return (
			<span>
				<p className="heading">Javascript Examples</p>
				<p>{name}</p>
				<p>{2 + 2}</p>
				<p>{(name === "Kunj")}</p>
				<p>{(name==="Kunj")? "Sharma": "De`costa"}</p>
				<p>{arr.map((index) => index * 2)}</p>
				<p></p>
			</span>
		);
	}
}

class TableRow extends React.Component {
	render() {
	   return (
		  <tr>
			 <td>{this.props.data.name}</td>
			 <td>{this.props.data.designation}</td>
		  </tr>
	   );
	}
 }

class Table extends React.Component {
	constructor() {
		super();
		this.state = {
			data: 
			[
			   {
				  "name":"Kunj",
				  "designation":"e-Learning Developer"
			   },
			   {
				  "name":"Darren",
				  "designation":"Graphic Designer"
			   },
			   {
				  "name":"Anuj",
				  "designation":"Technical Consultant"
			   }
			]
		 }
	}
	render() {
		return (
			<table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<span>
				<HelloWorld />
				<ESSix />
				<Table />
			</span>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));