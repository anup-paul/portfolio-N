import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = (e) => {

    const [userMessage, setUserMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i69am7h', 'template_u6ql8oq', e.target, 'user_UiayTnP4pr3O4MP0i3YHU')
          .then((result) => {
              console.log(result.text);
              setUserMessage(result);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
    }

    return (
        <section className=" contact" >
            <div className="container" >
                <div className="text-center pt-5 text-white">

                    <h1><b>Get In Touch</b></h1>
                </div>
                <div className=" d-flex justify-content-center ">
                    <div className="w-50 mb-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" name="name" placeholder="enter your name" className="form-control"  />
                               </div>
                            <div className="mb-3">
                                 <input type="email" name="email" placeholder="enter your email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <textarea type="text" name="message" placeholder="enter your message" className="form-control mt-3" cols="30" rows="7" placeholder="Your Message"/>
                            </div>
                            <button type="submit" className="btn " style={{color:"white", backgroundColor:"#f9ab00"}}>Submit</button>
                        </form>
                        {
                           userMessage && <h5><b className="mt-3" style={{color:"green"}}>Message successfully send! Thank you!</b></h5>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;