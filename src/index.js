import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component {
	render() {
		return (
			<h1>Hello</h1>
		);
	}
}

class  World extends React.Component {
	render() {
		return (
			<h1>World</h1>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<span>
				<Hello/>
				<World/>
			</span>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));