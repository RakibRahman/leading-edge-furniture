import React, { useEffect } from "react";
import Input from "./Input";
import Demo from "./../assets/contact.png";
function Contact() {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  const bgStyle = {
    backgroundImage: `url(${Demo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="flex flex-col items-center justify-around p-4 md:flex-row">
      <div className="w-full rounded-lg h-xl md:w-xl" style={bgStyle}></div>
      <div>
        <form className="contact__form">
          <h1 className="text-3xl text-center">Contact Us</h1>
          <Input
            name="f-name"
            labelTxt="Full Name"
            placeTxt="Enter Your Full Name"
            id="f-name"
          />
          <Input
            type="email"
            name="e-mail"
            labelTxt="Email"
            placeTxt="Enter Your Email"
            id="e-mail"
          />
          <Input
            element="textarea"
            labelTxt="Your Comment"
            name="comment"
            id="comment"
            placeTxt="Enter your message"
          />
          <button className="p-1 bg-red-500 rounded-md w-sm" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
