import React from "react";
// import "./style.css";


function Contact(props) {
  return (
    <div class="contact-info">
      <div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">What brought you to my website?</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option></option>
            <option>I am interested in hiring you</option>
            <option>I am curious about your work</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Submit some details of the work</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <button type="button" class="btn btn-primary">Submit</button>

      <a href="https://github.com/andreaives" target="_blank" rel="noreferrer" type="button" className="btn btn-success" >My GitHub Page</a>
      <a href="https://docs.google.com/document/d/1zgDUBxnXv8pAPeFujFsspT-SAxW-sDRQuqfHZsYMRIk/edit?usp=sharing" target="_blank" rel="noreferrer" type="button" className="btn btn-success" >Resume</a>
      <a href="https://www.linkedin.com/in/andrea-ives/" target="_blank" rel="noreferrer" type="button" className="btn btn-success" >Linkedin</a>

    </div>

  );
}

export default Contact;
