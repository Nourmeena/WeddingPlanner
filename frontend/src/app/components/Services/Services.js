import react from "react";
import Script from "next/script";
import Link from "next/link";
export default function Services() {
    return (
        <div>
            <>
       
            <link href="../css/services.css" rel="stylesheet" />
            <link rel="icon" href="../img/logo.png" type="image/png" />
            <title>Our Services</title>
            </>

            <>
         
            {/*   HOME */}
            <div id="services-content">
                <h1>Our Services</h1>
                <div className="icon-circles">
                <div className="icon-container">
                    <Link href="/photographer">
                    <div className="circle">
                        <img
                        src="../img/servicesIcons/photographer.png"
                        alt="wedding icon"
                        />
                    </div>
                    </Link>
                    <figcaption>Capture moments with experts!</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="#">
                    <div className="circle">
                        <img
                        src="../img/servicesIcons/VideoGrapher.png"
                        alt="wedding icon"
                        />
                    </div>
                    </Link>
                    <figcaption>Capture your moments in motion</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="#">
                    <div className="circle">
                        <img
                        src="../img/servicesIcons/MakeupArtist.png"
                        alt="wedding icon"
                        />
                    </div>
                    </Link>
                    <figcaption>Enhance your beauty efficiently</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="#">
                    <div className="circle">
                        <img
                        src="../img/servicesIcons/hairstylist3.png"
                        alt="wedding icon"
                        />
                    </div>
                    </Link>
                    <figcaption>Stunning hairstyles for your big day</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="/Veildesigers">
                    <div className="circle">
                        <img src="../img/servicesIcons/veil.png" alt="wedding icon" />
                    </div>
                    </Link>
                    <figcaption>Elegant veils for your special day</figcaption>
                </div>
                <div className="icon-container">
                    <Link  href="/venue/homePage" >
                    <div className="circle">
                    <img
                        src="../img/servicesIcons/wedding-venue.png"
                        alt="wedding icon"
                    />
                    </div>
                    </Link>
                    <figcaption>Find the venue of your dreams!</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="/Page1" >
                    <div className="circle">
                    <img src="../img/servicesIcons/groomSuit.png" alt="wedding icon" />
                    </div>
                    </Link>
                    <figcaption>Stylish suits for every groom</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="/Page2" >
                    <div className="circle">
                    <img
                        src="../img/servicesIcons/wedding-dress.png"
                        alt="wedding icon"
                    />
                    </div>
                    </Link>
                    <figcaption>Discover your dream gown</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="/Invcard">
                    <div className="circle">
                    <img
                        src="../img/servicesIcons/wedding-invitation.png"
                        alt="wedding icon"
                    />
                    </div>
                    </Link>
                    <figcaption>Craft your perfect wedding invite</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="/WeddingPlanner">
                    <div className="circle">
                        <img
                        src="../img/servicesIcons/wedding-planner.png"
                        alt="wedding icon"
                        />
                    </div>
                    </Link>
                    <figcaption>Expert planners for your wedding</figcaption>
                </div>
                <div className="icon-container">
                    <Link href="/Bouquet">
                    <div className="circle">
                        <img src="../img/servicesIcons/bouquet.png" alt="wedding icon" />
                    </div>
                    </Link>
                    <figcaption>Find your perfect bridal bouquet</figcaption>
                </div>
                {/* <div class="icon-container">
                    <a href="Decorations.html"></a>
                        <div class="circle">
                            <img src="../img/servicesIcons/decoration-wedding.png" alt="wedding icon">
                        </div>
                    </a>
                    <figcaption>Create the Perfect Atmosphere with Our Decor Experts!</figcaption>
                </div> */}
                </div>
            </div>
            
            </>
       


        </div>
    );
}