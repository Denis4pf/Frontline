import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add the code to send the request here
    console.log({ name, phone, email, subject, comment });
  };

  return ( 
    <form onSubmit={handleSubmit} 
    className="contact-form">
         <h2>Contact Us</h2>
      <div className="form-group">
        <div className="nano">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone no*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <div className="nano">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Email address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="subject"></label>
          <input
            type="text"
            id="subject"
            placeholder="Subject*"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="comment"></label>
        <textarea
          id="comment"
          placeholder="Your Comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-submit">
        Send Request
      </button>
    </form>
  );
}

export default Contact;
