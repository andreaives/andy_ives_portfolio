import React from "react";
import me from "../../assets/me.jpeg"
import washington from "../../assets/washington_trip.jpeg"
// import "./style.css";


function Home () {
 return (
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="name-image">
        <img className="img-fluid" src={me} alt="Andy Ives"></img>
      </div>
      <div className="col-md-6">
      <h2>Professional</h2>
      <div className="bio">
        <p>Previously, I worked for two SAAS companies as an Enterprise Rep selling software. 
          While I liked this job, I was always drawn into the dev pit asking them questions about coding and their day to day.
          I loved learning from the developers and decided it was time to formally learn how to code. Other facts about me; 
          I'm 24, very active in a variety of sports, and love to cook complex dishes.  <a href="http://www.lipsum.com/"></a></p>
      </div>
    </div>
    </div>
    </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Personal</h2>
          <div className="bio">
            <p>Previously, I worked for two SAAS companies as an Enterprise Rep selling software. 
             While I liked this job, I was always drawn into the dev pit asking them questions about coding and their day to day.
            I loved learning from the developers and decided it was time to formally learn how to code. Other facts about me; 
            I'm 24, very active in a variety of sports, and love to cook complex dishes.  <a href="http://www.lipsum.com/"></a>
            </p>
          </div>
        </div>
          <div className="col-md-6">
            <div className="name-image">
            <img className="img-fluid" src={washington} alt="Olympic National Park"></img>
          </div>
      </div>
      </div>
     </div>
 )
}

export default Home;