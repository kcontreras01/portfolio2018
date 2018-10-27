import React, { Component } from 'react';
import '../App.css';

class Landing extends Component {
  render() {
    return (
        <section className="landing">
          <h1>Hi! I'm Kiara.</h1>
          <p>I'm a passionate Full Stack Developer who lives in and loves her hometown, NYC. </p>
          <p>Outside of programming I spend my time teaching yoga, singing barbershop, and hanging with my cats. 
					<i className="fas fa-level-down-alt jump"></i>
           </p>
        </section>      
    );
  }
}

export default Landing;
