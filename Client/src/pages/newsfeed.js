import { useState } from 'react';
import '../stylesheets/profile.css';


export default function newsfeed() {
    return (
      <div className="card" style={{ width: '48rem' }}>
        <div className="border border-left border-right px-0">
          <div className="p-3 border-bottom">
            <h4 className="d-flex align-items-center mb-0">
              Home <i className="far fa-xs fa-star ms-auto text-primary"></i>
            </h4>
          </div>
          <div>
            <div className="card shadow-0">
              <div className="card-body border-bottom pb-2">
                <div className="d-flex">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="50"
                    alt="Avatar"
                    loading="lazy"
                  />
                  <div className="d-flex align-items-center w-100 ps-3">
                    <div className="w-100">
                      <input
                        type="text"
                        id="form143"
                        className="form-control form-status border-0 py-1 px-0"
                        placeholder="What's happening"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <ul
                    className="list-unstyled d-flex flex-row ps-3 pt-3"
                    style={{ marginLeft: '50px' }}
                  >
                    <li>
                      <a href=""><i className="far fa-image pe-2"></i></a>
                    </li>
                    <li>
                      <a href=""><i className="fas fa-photo-video px-2"></i></a>
                    </li>
                    <li>
                      <a href=""><i className="fas fa-chart-bar px-2"></i></a>
                    </li>
                    <li>
                      <a href=""><i className="far fa-smile px-2"></i></a>
                    </li>
                    <li>
                      <a href=""><i className="far fa-calendar-check px-2"></i></a>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-primary btn-rounded">
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex p-3 border-bottom">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp"
                  className="rounded-circle"
                  height="50"
                  alt="Avatar"
                  loading="lazy"
                />
                <div className="d-flex w-100 ps-3">
                  <div>
                    <a href="">
                      <h6 className="text-body">
                        Miley Cyrus
                        <span className="small text-muted font-weight-normal">
                          @mileycyrus
                        </span>
                        <span className="small text-muted font-weight-normal"> • </span>
                        <span className="small text-muted font-weight-normal">2h</span>
                        <span><i className="fas fa-angle-down float-end"></i></span>
                      </h6>
                    </a>
                    <p style={{ lineHeight: '1.2' }}>
                      Lorem ipsum dolor, sit amet{' '}
                      <a href="">#consectetur</a> adipisicing elit. Nobis assumenda eveniet ipsum
                      libero mollitia vero doloremque{' '}
                      <a href="">#perspiciatis</a> molestiae omnis, quam iure dicta reprehenderit
                      distinctio facere labore atque, sit{' '}
                      <a href="">#ratione</a> quo.
                    </p>
                    <ul className="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                      <li>
                        <i className="far fa-comment"></i>
                      </li>
                      <li>
                        <i className="fas fa-retweet"></i>
                        <span className="small ps-2">7</span>
                      </li>
                      <li>
                        <i className="far fa-heart"></i>
                        <span className="small ps-2">35</span>
                      </li>
                      <li>
                        <i className="far fa-share-square"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Add more tweet items as needed */}
            </div>
          </div>
        </div>
      </div>
    );
}
