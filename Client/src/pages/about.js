import React from 'react';
import '../stylesheets/About.css'; // Import the CSS file

function About() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p></p>
        <p></p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Meet Our Team</h2>

      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/w3images/team1.jpg" alt="Jane" style={{ width: '100%' }} />
            <div className="container">
              <h2>Aaditya Aren</h2>
              <p className="title">BACKCHOD</p>
              <p>CP enthusiast........</p>
              <p>aaditya_a@cs.iitr.ac.in</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Alind Sharma</h2>
              <p className="title">MUTHBAAZ</p>
              <p>Finally working</p>
              <p>alind_s@cs.iitr.ac.in</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Divyansh Jain</h2>
              <p className="title">PAPA</p>
              <p>GAY SEX</p>
              <p>divyansh_j@cs.iitr.ac.in</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container">
              <h2>Ishaan Jain</h2>
              <p className="title">DOBA</p>
              <p>nahi ho para</p>
              <p>ishaan_j@cs.iitr.ac.in</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/w3images/team3.jpg" alt="John" style={{ width: '100%' }} />
            <div className="container">
              <h2>Kunal Bansal</h2>
              <p className="title">Alpha</p>
              <p>no longer sigma</p>
              <p>kunal_b@cs.iitr.ac.in</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;