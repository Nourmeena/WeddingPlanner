import Script from "next/script";
import react from "react";
export default function WeddingPlannerProfile() {
    return(
        <div id="main">
            <>
               
                <link href="../css/WeddingPlannerprofile.css" rel="stylesheet" />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="../css/lightbox.css" />
                <link rel="icon" href="../img/logo.png" type="image/png" />
                <title>Wedding Planner Profile</title>
            </>

            <>
               
                {/* Wedding Planner Profile */}
                <div className="WeddingPlanner-profile" id="WeddingPlannerProfile"></div>
               
            </>


            <Script src="../js/pagination.js"></Script>
            <Script src="../js/WeddingPlannerProfile.js"></Script> 
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></Script>
            <Script src="../js/lightbox-plus-jquery.js"></Script>
        </div>
    );
}