import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#000000' }}>
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">SkyView Capital</h6>
              <p>
              Empower your financial decisions with our Stock Predictor App's data-driven insights and forecasts.              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            {/*
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a className="text-white">MDBootstrap</a>
              </p>
              <p>
                <a className="text-white">MDWordPress</a>
              </p>
              <p>
                <a className="text-white">BrandFlow</a>
              </p>
              <p>
                <a className="text-white">Bootstrap Angular</a>
              </p>
            </div>
  */}
            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Useful Links</h6>
              <p>
                <a className="text-white">Profile</a>
              </p>
              <p>
                <a className="text-white">Learn</a>
              </p>
              <p>
                <a className="text-white">News</a>
              </p>
              <p>
                <a className="text-white">About</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> Roorkee, 247667, India</p>
              <p><i className="fas fa-envelope mr-3"></i> omaren0248@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 91 9897678379</p>
              <p><i className="fas fa-print mr-3"></i> + 91 8447691065</p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3" >
                <p style={{textAlign :'centre'}}>© 2023 Copyright: <a className="text-white" href="">x27.2</a> </p>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
              <img src='' style={{width:'30%', height: '30%'}}></img>
              </a>

              <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                <i className="fab fa-twitter"></i>
              </a>

              <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                <img src='https://www.vectorlogo.zone/logos/google/google-icon.svg' style={{width:'30%', height: '30%'}}></img>
                
              </a>

              <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
