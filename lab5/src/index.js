import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import campfire from './images/campfire.jpg';
import User from "./comments" //when importing js file in js file, you dont need to add .js
// import images
import girl_avatar from "./images/avatar1.png"
import boy_avatar from "./images/avatar2.png"
import einstein_avatar from "./images/avatar3.png"


// create content in the app using function component
const App = function(){
  // define a variable name 
  let fullname = "Justen Jiang"
  function greeting(){
    return "Good evening!"
  }
  return(
    <div>
      <h1 style = {{textAlign: 'center', color: 'orange'}}>{greeting()} Welcome to ReactJS {fullname}</h1>
      <p>Let's be familiar with JSX elements</p>
      <figure className = "introimg">
        <img src = {campfire}/>
      </figure>

      {/* card */}
      <section className='cardcontainer'>
        <User image = {girl_avatar} name = 'Jessica' date = '07/12/2024' comments = 'Got rocks!'/>
        <User image = {boy_avatar} name = 'Jason' date = '07/16/2024' comments = 'Got sticks!'/>
        <User image = {einstein_avatar} name = 'Einstein' date = '04/18/1960' comments = 'Dropped my beloved rocks and sticks.'/>
      </section>
    </div>
  );
}

// rooting the app 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

