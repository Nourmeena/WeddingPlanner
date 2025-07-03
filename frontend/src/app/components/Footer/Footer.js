import React from 'react';
import Script from 'next/script';
export default function Footer() {
  return (
    <div>
       <>
  <link href="/css/bootstrap.css" rel="stylesheet" />
  <link href="/css/hatlah.css" rel="stylesheet" />
  
</>
      <footer className="footer text-white text-center text-lg-start">
  <div className="container p-4">
    {/*Grid row*/}
    <div className="row">
      {/*Grid column*/}
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <img id="footerimg" src="/img/logo.png" />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="store col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">get weddingly app</h5>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!">
              <img
                id="store"
                src="/img/icon/google-play-badge-logo-svgrepo-com.png"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                id="store"
                src="/img/icon/download-on-the-app-store-apple-logo-svgrepo-com (1).png"
              />
            </a>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="icon col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0">follow us on</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-white">
              <img id="sicon" src="/img/icon/facebook (2).png" />
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
              <img id="sicon" src="/img/icon/instagram (1).png" />
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
              <img id="sicon" src="/img/icon/twitter (1).png" />
            </a>
          </li>
          <li>
            <a href="#!" className="text-white">
              <img id="sicon" src="/img/icon/tik-tok (1).png" />
            </a>
          </li>
        </ul>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2024 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">
      Weddingly.com
    </a>
  </div>
  {/* Copyright */}
</footer>
<Script src="/js/bootstrap.js"></Script>
    </div>
  )
}
