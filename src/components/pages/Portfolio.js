import React from "react";
import laptopGirl from "../../assets/laptopGirl.jpg"
import laptopHome from "../../assets/laptopHome.jpg"
import benchWork from "../../assets/benchWork.jpg"
// import "./style.css"


function Portfolio() {
  return (
  //   <header className="header">
  //   <h1>My Portfolio</h1>
  // </header>

  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-lg-3 mt-5 mx-3">
        <div className="card">
          <img src={laptopHome} className="card-img-top className=img-fluid" alt="Girl typing on computer at a table"></img>
          <div className="card-body">
            <h5 className="card-title">Random Password Generator</h5>
            <p className="card-text">This project leans on a series of prompts to collect criteria outlines for a random password to be generated.</p>
            <a href="https://andreaives.github.io/random_password_generator/" className="btn btn-primary" target="_blank" rel="noreferrer">Check It Out</a>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 mt-5 mx-3">
        <div className="card">
          <img src={benchWork} className="card-img-top" alt="Girl using an iPad"></img>
          <div className="card-body">
            <h5 className="card-title">Campify</h5>
            <p className="card-text"> This is a collaborative project. We used a mix of express, sequelize, handlebars, session, passport, and node.</p>
            <a href="https://campifygroupproject.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Check It Out</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mt-5 mx-3">
        <div className="card">
          <img src={laptopGirl} className="card-img-top" alt="Girl using an iPad"></img>
          <div className="card-body">
            <h5 className="card-title">Eat Bugers</h5>
            <p className="card-text"> A burger logger created with MySQL, Node, Express, Handlebars and a homemade ORM.</p>
            <a href="https://andreaives.github.io/eat_burgers/" className="btn btn-primary" target="_blank" rel="noreferrer">Check It Out</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mt-5 mx-3">
        <div className="card">
          <img src={benchWork} className="card-img-top" alt="Girl using an iPad"></img>
          <div className="card-body">
            <h5 className="card-title">Colorado National Parks</h5>
            <p className="card-text"> This is a collaborative project. We used a mix of API's, JSON, HTML, Bootstrap, and JavaScript to create this site.</p>
            <a href="https://tmessall.github.io/dubootcampProjectOne/" className="btn btn-primary" target="_blank" rel="noreferrer">Check It Out</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mt-5 mx-3">
        <div className="card">
          <img src={benchWork} className="card-img-top" alt="Girl using an iPad"></img>
          <div className="card-body">
            <h5 className="card-title">Budget Tracker</h5>
            <p className="card-text"> This budget tracker is perfect for online and offline use.</p>
            <a href="https://murmuring-bayou-72916.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Check It Out</a>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 mt-5 mx-3">
        <div className="card">
          <img src={laptopGirl} className="card-img-top" alt="Girl using laptop."></img>
          <div className="card-body">
            <h5 className="card-title">Note Taker</h5>
            <p className="card-text">Allows you to create and save notes.  
            </p>
            <a href="https://hidden-lowlands-99241.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Check It Out</a>
          </div>
        </div>
      </div>
      </div>
      </div>
    

  );
}

export default Portfolio;
