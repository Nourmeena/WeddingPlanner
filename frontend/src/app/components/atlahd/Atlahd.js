

import Script from 'next/script';


export default function Atlahd() {



  return (
    
     
     <div id="main">
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/atlah.css" rel="stylesheet" />

      
        <h1 id="serr">Ateliers</h1>
    
      

      <div id="contener">
        <div id="cards">
          <div className="row row-cols-1 row-cols-md-3 g-4" id="row">
           
          </div>
        </div>
      </div>


    
      <Script src="/js/bootstrap.js" strategy="beforeInteractive" />
      <Script src="/js/DisplayGownsSuits.js" strategy="afterInteractive" />
      <Script src="/js/atlehdetail.js" strategy="afterInteractive" />
    </div>
  )
}
