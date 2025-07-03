import Script from "next/script";
import react from "react";
export default function VeilDesigner() {
    return(
        <div id="main">
            <>
                
                <link href="../css/weddingly.css" rel="stylesheet" />
                <link href="../css/photographers.css" rel="stylesheet" />
                <link rel="icon" href="../img/logo.png" type="image/png" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <title>Veil Designers</title>
            </>

            <>
              
                <div id="content">
                    <service-data service-type="Veil Designers" />
                </div>
              
            </>

          
            <Script src="../js/FetchData.js"></Script>
         

        </div>
    );
}