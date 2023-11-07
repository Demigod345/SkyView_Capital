import React from "react";
import Navbar from "../Mycomps/Navbar";
import Footerc from "../Mycomps/Footer";
import "../stylesheets/About.css"; // Import the CSS file
import imag1 from "./propics/aren.png";
import imag2 from "./propics/alind.png";
import imag3 from "./propics/divyansh.png";
import imag4 from "./propics/ishaan.png";
import imag5 from "./propics/kunal.png";
function About() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="about-section">
          <h1>About Us</h1>
          <p>
            "Our Company SkyView Capital comprises of five talented and
            motivated individuals, each bringing a unique set of skills and
            qualities to the group. We have created this project in our course
            CSN-291 and it aims to make the process of trading stocks a little
            less daunting by using the power of Artificial Intelligence. We have
            to tried to predict stock prices and movement using LSTM Neural
            Network to predict future prices of the stock and BERTA model and
            Technical Analysis to predict the future movement of price."
          </p>
          <p></p>
        </div>

        <h2
          style={{ textAlign: "center", fontSize: "35px", color: "white" }}
          aaa
        >
          <u />
          <br></br>
          Meet Our Team
          <br></br>
          <br></br>
          <u />
        </h2>

        <div className="row">
          <div className="column">
            <div className="card card5">
              <img
                src={imag1}
                alt="Jane"
                style={{ width: "80%" ,alignSelf:"center"}}
              />
              <div className="container container5" style={{textAlign:'center'}}>
                <h2>Aaditya Aren</h2>
                <p className="title">Problem Solver</p>
                <p>
                  Aaditya Aren is our go-to 'Problem Solver', known for his
                  witty humor and problem solving skills .<br></br>
                </p>
                <p>aaditya_a@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/aaditya-aren-992221275/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card card1">
              <img
                src={imag2
                }
                alt="Alind"
                style={{ width: "80%" ,alignSelf:"center"}}
              />
              <div className="container container1" style={{textAlign:'center'}}>
                <h2>Alind Sharma</h2>
                <p className="title">Tech Genius</p>
                <p>
                  {" "}
                  Alind Sharma, the 'Tech Genius',who excels
                  at creative solutions and new technology.
                </p>
                <p>alind_s@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/alind-sharma-65a76824a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card card2">
              <img
                src={imag3}
                alt="DJ"
                style={{ width: "80%" ,alignSelf:"center"}}
              />
              <div className="container container2" style={{textAlign:'center'}}>
                <h2>Divyansh Jain</h2>
                <p className="title">Dev Genius</p>
                <p>
                  Divyansh Jain, affectionately known as 'Dev-genius,' brings a
                  sense of leadership and reliability.
                </p>
                <p>divyansh_j@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/divyansh-jain-31016b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card card3">
              <img
                src={imag4}
                alt="Ishaan"
                style={{ width: "80%" , alignSelf:"center" }}
              />
              <div className="container container3" style={{textAlign:'center'}}>
                <h2>Ishaan Jain</h2>
                <p className="title">Front end Expert</p>
                <p>
                  Ishaan Jain, or 'Front End Expert,' adds a touch of creativity
                  and out-of-the-box thinking.<br></br>
                </p>
                <p>ishaan_j@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/ishaan-jain-609940276"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card card4">
              <img
                src={imag5}
                alt="Kunal"
                style={{ width: "80%" ,alignSelf:"center"}}
              />
              <div className="container container4" style={{textAlign:'center'}}>
                <h2>Kunal Bansal</h2>
                <p className="title" style={{textAlign:'center'}}>ML Lover</p>
                <p>
                  Kunal Bansal, the 'ML Lover,' is known for his strategic mindset
                  and determination.<br></br>
                </p>
                <p>kunal_b@cs.iitr.ac.in</p>
                <a
                  href="https://www.linkedin.com/in/kunal-bansal-160a15257/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Contact</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerc />
    </div>
  );
}

export default About;