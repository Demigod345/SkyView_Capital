import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Mycomps/Navbar";
import Footerc from "../Mycomps/Footer";
import "../stylesheets/About.css"; // Import the CSS file

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7f9ff6642a614b9b8ee8bd3125a6d7a5'
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);

  return (
    <div>
      <Navbar />
    <>
      <div className="news-title" style={{ background: '#222219', padding: '5px', textAlign: 'center', fontFamily: 'Montserrat' }}>
        <h1 style={{ color: 'white' }}>News</h1>
      </div>
      <div className="container my-5">
        <div className="row text-center">
          {news.map((val, index) => {
            if(!val.author) return (<></>)
            return (
              <div className="col my-3" key={index}>
                <div className="card" style={{ width: '18rem',height:'30rem', background: 'rgba(0, 0, 0, 0.8)', border: '1px solid #ddd', color: 'white' }}>
                  <img src={val.urlToImage} className="card-img-top" alt="" style={{width:'18rem',height:'10rem'}} />
                  <div className="card-body" style={{ height: '300px' }}>
                    <h5 className="card-title" style={{ fontFamily: 'Montserrat', fontSize: '18px' }}>
                      {val.title}
                    </h5>
                    <p className="card-text" style={{ maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {val.description}
                    </p>
                  </div>
                  <div className="card-footer" style={{ background: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>
                    <a href={val.url} className="btn btn-success" target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
    <Footerc />
    </div>
  );
}

export default News;