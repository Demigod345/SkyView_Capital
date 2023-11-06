import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from "../Mycomps/Navbar";
import Footerc from "../Mycomps/Footer";
import "../stylesheets/About.css";
function News() {
  const [news, setNews] = useState([])
  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7f9ff6642a614b9b8ee8bd3125a6d7a5")
    .then((res)=>{
      console.log(res.data.articles);
      setNews(res.data.articles)
    })
  }, [])
  return (
    <div>
      <Navbar />
    <>
      <div className='container my-5'>
        <div className='row text-center'>
          {
            news.map((val)=>{
              return (
                <div className='col my-3'>
                  <div className='card' style={{width: '18rem'}}>
                    <img src={val.urlToImage} className='card-img-top' alt=''/>
                    <div className='card-body'>
                      <h5 className='card-title'>{val.title}</h5>
                      <p className='card-text'>
                        {val.description}
                      </p>
                      {/* <button href='#' className='btn btn-primary'>
                        {val.url}
                      </button> */}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
    <Footerc />
    </div>
  )
}

export default News