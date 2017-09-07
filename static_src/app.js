import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const app = () => console.log("hello world");

app();


const NavBar = (props) => {
	return(
		<div>
			<h1>This is navbar</h1>
		</div>
	);

}

ReactDOM.render(
	<NavBar/>,
	document.getElementById('root')
);
