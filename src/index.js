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

class JSXDemo extends React.Component {
	render() {
		const name = "Kunj";
		var arr = [1,2,3];
		console.log(...arr)
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
				<JSXDemo />
				<Table />
			</span>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));