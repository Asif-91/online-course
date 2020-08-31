import React from 'react';
import './App.css';
import Course from './Components/Course/Course';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <h1 className="header">Online Courses</h1>
      <Course></Course>
      <Header></Header>
    </div>
  );
}

export default App;