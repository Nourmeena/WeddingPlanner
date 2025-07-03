import react from "react";
import Script from "next/script";

export default function WeddingPlanner() {
    return(
        <div id="main">
            <>
              
                <link href="../css/photographers.css" rel="stylesheet" />
                <link rel="icon" href="../img/logo.png" type="image/png" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <title>Wedding Planners</title>
            </>



            <>
            
                <div id="content">
                    <service-data service-type="Wedding Planners" />
                </div>
            
            </>

       
            <Script src="../js/FetchData.js"></Script>
           

        </div>
    );
}