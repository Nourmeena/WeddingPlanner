import React from 'react';
import Link from 'next/link';
export default function Main() {
  return (
    <>
      <>
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/weddingly.css" rel="stylesheet" />
        <link rel="icon" href="../img/logo.png" type="image/png" />

      </>


      <div id="main">
        <h1 id="plan">Let’s Plan Your Dream Wedding</h1>
        <div className="slider">

          <input type="radio" name="testimonial" id="t-1" />
          <input type="radio" name="testimonial" id="t-2" />
          <input type="radio" name="testimonial" id="t-3" defaultChecked />
          <input type="radio" name="testimonial" id="t-4" />
          <input type="radio" name="testimonial" id="t-5" />

          <div className="testimonials">

            <label className="item" htmlFor="t-1">
              <img
                className="imgw"
                src="/img/Home 2/Beach.jpg"
                alt="Wedding"
              />
            </label>
            <label className="item" htmlFor="t-2">
              <img
                className="imgw"
                src="/img/Home 2/MuhammedAliCastle.jpg"
                alt="Wedding"
              />
            </label>
            <label className="item" htmlFor="t-3">
              <img
                className="imgw"
                src="/img/Home 2/pyramid.jpg"
                alt="Wedding"
              />
            </label>
            <label className="item" htmlFor="t-4">
              <img
                className="imgw"
                src="/img/Home 2/temple.jpg"
                alt="Wedding"
              />
            </label>
            <label className="item" htmlFor="t-5">
              <img
                className="imgw"
                src="/img/Home 2/Baroon Palace.jpg"
                alt="Wedding"
              />
            </label>
          </div>

          <br />

          <div className="dots">
            <label htmlFor="t-1" />
            <label htmlFor="t-2" />
            <label htmlFor="t-3" />
            <label htmlFor="t-4" />
            <label htmlFor="t-5" />
          </div>
        </div>

        <div>
          <Link href="/AboutUs"> {/* Use Link to navigate */}
            <button id="start">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}
