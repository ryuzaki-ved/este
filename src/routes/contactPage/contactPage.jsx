import { useState } from "react";
import "./contactPage.scss";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contactPage">
      <div className="container">
        <div className="info">
          <h1>Contact Us</h1>
          <p>Get in touch with our expert team for any inquiries</p>
          
          <div className="contactDetails">
            <div className="detail">
              <img src="/pin.png" alt="Location" />
              <div>
                <h3>Visit Us</h3>
                <p>123 Estate Street, London, UK</p>
              </div>
            </div>
            
            <div className="detail">
              <img src="/chat.png" alt="Email" />
              <div>
                <h3>Email Us</h3>
                <p>info@lamaestate.com</p>
              </div>
            </div>
            
            <div className="detail">
              <img src="/phone.png" alt="Phone" />
              <div>
                <h3>Call Us</h3>
                <p>+44 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="formGroup">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="formGroup">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="formGroup">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;