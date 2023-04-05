import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from "./../../components/navbar/Navbar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Footer from "../../components/footer/Footer";
import './contactus.css'

const ContactUs = () =>{
  const [state, handleSubmit] = useForm("mzbqjlba");
  if (state.succeeded) {
      return <>
      <Navbar />
      <Breadcrumb title="Thankyou for contacting us!" />
      <Footer />
      </>
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(`Submitting ${name}, ${email}, ${message}`);
    // Here you can add your logic to send the data to your backend or do whatever you want
  }

    return (
        <>
       <Navbar />
       <Breadcrumb title="Contact Us" />
       <form onSubmit={handleSubmit} className='contactform'>
       <label htmlFor="name" className='formlabel'>
       Name
      </label>
      <textarea
        id="name"
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <br></br>
      <label htmlFor="email" className='formlabel'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br></br>
      <label htmlFor="message" className='formlabel'>
       Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br></br>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>

       {/* <div>
         <form onSubmit={handleSubmit} className='contactform'>
      <div>
        <label htmlFor="name" className='formlabel'>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className='formlabel'>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message" className='formlabel'>Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
       </div> */}
       <Footer />
        </>
    );
}

export default ContactUs;