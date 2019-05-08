import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component {
	render() {
		return (
			<p className="heading">Hello</p>
		);
	}
}

class  World extends React.Component {
	render() {
		return (
			<p className="paragraph">World</p>
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