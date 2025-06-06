import "./aboutPage.scss";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="hero">
        <h1>About LamaEstate</h1>
        <p>Your Trusted Partner in Real Estate Since 2010</p>
      </div>
      <div className="content">
        <div className="section">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, LamaEstate has grown from a small local agency to one of the UK's most trusted real estate companies. Our journey has been built on the foundation of trust, expertise, and unwavering commitment to our clients.
          </p>
        </div>
        <div className="stats">
          <div className="stat">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>10k+</h3>
            <p>Properties Sold</p>
          </div>
          <div className="stat">
            <h3>50k+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="section">
          <h2>Our Values</h2>
          <div className="values">
            <div className="value">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Trust" />
              <h3>Trust</h3>
              <p>Building lasting relationships through transparency and integrity</p>
            </div>
            <div className="value">
              <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg" alt="Excellence" />
              <h3>Excellence</h3>
              <p>Delivering exceptional service and results for every client</p>
            </div>
            <div className="value">
              <img src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg" alt="Innovation" />
              <h3>Innovation</h3>
              <p>Embracing technology to enhance the real estate experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;