import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AddColorForm from './components/chapter6';
import {AddColorForm as AddColorFormFunctional } from './components/addcolorformfunc';
import Star from './components/star';

const logColor = (title, color) => {
  console.log(`Color: ${color} | Title ${title}`);
}

const App = (props) => {
  return (
    <div>
      <AddColorForm getColor={ logColor }/>
        <AddColorForm getColor={ (title, color) => console.log(title, color) }/>
        <AddColorFormFunctional sendColor={(color, title) =>console.log(color, title, "func")} />
        <Star />


    </div>
  )
}
ReactDom.render(
  <App/>,
  document.getElementById("root")
)
