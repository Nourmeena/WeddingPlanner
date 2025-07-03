
import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
export default function Hatlah() {
  return (
    <div>
      <>
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/hatlah.css" rel="stylesheet" />
      </>
      <div id="main">
        <div id="high">
          <h1 id="ser">Ateliers</h1>
        </div>
        <div id="contener">
          <div id="cards">
            <div className="row row-cols-1 row-cols-md-2 g-4" id="row">
              <div className="col ">
                <div className="card">
                  <img
                    id="atlahf"
                    src="/img/atlah/7cc24cf2920ede2fcbf480a9b5cdc1db.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <Link href="/Page2" className="btn" id="more">
                      Wedding dresses
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    id="atlahf"
                    src="/img/atlah/ddf60df02c59275ffad751396340b79f.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <Link href="/Page1" className="btn" id="more">
                      Men's suit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="/js/bootstrap.js"></Script>

    </div>
  )
}
