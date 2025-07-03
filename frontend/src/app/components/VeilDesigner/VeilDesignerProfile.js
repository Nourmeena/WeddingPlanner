import Script from "next/script";
import react from "react";
export default function VeilDesignerProfile() {
    return(
        <div id="main">

            <>

                <link href="../css/weddingly.css" rel="stylesheet" />
                <link href="../css/VeilDesignerProfile.css" rel="stylesheet" />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../css/lightbox.css" />
                <link rel="icon" href="../img/logo.png" type="image/png" />
                <title>Veil Designer Profile</title>
            </>


            <>
               
                {/* Photographer Profile */}
                <div className="VeilDesigner-profile" id="VeilDesignerProfile"></div>
           
            </>

            <Script src="../js/pagination.js"></Script>
            <Script src="../js/VeilDesignerProfile.js"></Script> 
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></Script>
            <Script src="../js/lightbox-plus-jquery.js"></Script>

        </div>
    );
}