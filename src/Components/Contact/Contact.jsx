import React from "react";
import "./Contact.css";
import message from '../../assets/message.png';
import gmail from '../../assets/gmail.png';
import location from '../../assets/location.png';
import telephone from '../../assets/telephone.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d95076d-fb6a-4975-88ec-68cea9ae1028");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      
    }
  };


  return (
    <div className="contact">
      <div className="contact_col1">
        <h3>Send us Messge
            <img src={message} alt="" />
        </h3>
        <p>
          Customers can contact your business directly. Response time: Let
          customers know when they should expect a response. Location: Build
          trust with customers by showing you're legitimate
        </p>
        <ul>
            <li> <img src={gmail} alt="" />kotmirerahul@gmail.com
               
            </li>
            <li><img src={telephone} alt="" />64681814
                
            </li>
            <li><img src={location} alt="" />Akluj 413101
                tal-malshirash dist-solapur 
            </li>
        </ul>
      </div>
      <div className="contact_col2">
        <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label >Mobile-No</label>
            <input type="tel" name="phone" placeholder="Enter Mobile no" required/>
            <label > Write Your Message</label>
            <textarea name="message" placeholder="Write a message"  rows="6" required></textarea>
           <button className="camp_btn">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
