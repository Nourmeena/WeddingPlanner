import Script from "next/script";
import react from "react";
export default function PhotographerProfile() {
    return(
        <div id='main'>
            <>
                <link href="/css/bootstrap.css" rel="stylesheet" />
                <link href="/css/profiles.css" rel="stylesheet" />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../css/lightbox.css" />
                <link rel="icon" href="../img/logo.png" type="image/png" />
                <title>Photographer Profile</title>
            </>



            <>
              
                {/* Photographer Profile */}
                <div className="photographer-profile" id="photographerProfile"></div>
              
            </>


            <Script src="../js/pagination.js"></Script>
            <Script src="../js/photographerProfile.js"></Script> 
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></Script>
            <Script src="../js/lightbox-plus-jquery.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/5.10.1/main.min.js"></Script>
         
        </div>
    );
}