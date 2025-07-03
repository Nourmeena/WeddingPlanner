'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { logOut } from '@/utils/auth';
import { toast } from 'react-toastify';

export default function Header() {
  const router = useRouter();
  const handleLogOut = () => {
    logOut();
    toast.success("Logout Successfully");
    router.push("/login");
  };
  
  return (
    <div>
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/hatlah.css" rel="stylesheet" />
      <link rel="icon" href="../img/logo.png" type="image/png" />
     

      <nav className="navbar navbar-expand-lg">
        <a
          className="btn me-auto"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <img src="/img/icon/burger-bar (1).png" />
        </a>
        <img id="logo" className="small" src="/img/logo.png" />

        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">weddingly</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul id="offlist">
              <li id="off"><Link id="link" href="/" data-bs-dismiss="offcanvas">Home</Link></li>
              <li id="off"><Link id="link" href="/Package" data-bs-dismiss="offcanvas">Package</Link></li>
              <li id="off">
                <div className="dropdown mt-3">
                  <a id="link" className="dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                    <li><Link className="dropdown-item dservices" href="/venue/homePage" data-bs-dismiss="offcanvas">Venue</Link></li>
                    <li><Link className="dropdown-item dservices" href="/photographer" data-bs-dismiss="offcanvas">Photographer</Link></li>
                    <li><Link className="dropdown-item dservices" href="/WeddingPlanner" data-bs-dismiss="offcanvas">Wedding Planners</Link></li>
                    <li><Link className="dropdown-item dservices" href="/Invcard" data-bs-dismiss="offcanvas">Invitation Card</Link></li>
                    <li><Link className="dropdown-item dservices" href="/Hatlah" data-bs-dismiss="offcanvas">Atelier</Link></li>
                    <li><Link className="dropdown-item dservices" href="/Veildesigers" data-bs-dismiss="offcanvas">Veil Designers</Link></li>
                    <li><Link className="dropdown-item dservices" href="/Bouquet" data-bs-dismiss="offcanvas">Bouquet</Link></li>
                    <li><Link className="dropdown-item dservices" href="#" data-bs-dismiss="offcanvas">Hair Stylist</Link></li>
                    <li><Link className="dropdown-item dservices" href="#" data-bs-dismiss="offcanvas">MakeUp</Link></li>
                    <li><Link className="dropdown-item dservices" href="#" data-bs-dismiss="offcanvas">Videographer</Link></li>
                  </ul>
                </div>
              </li>
              <li id="off"><Link id="link" href="/Gift" data-bs-dismiss="offcanvas">Gifts</Link></li>
              <li id="off"><Link id="link" href="/AboutUs" data-bs-dismiss="offcanvas">About Us</Link></li>
              <li id="off"><Link id="link" href="/Contact" data-bs-dismiss="offcanvas">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div id="mnav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/Services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/Package">Package</Link></li>
            <li className="nav-item"><img id="logo" src="/img/logo.png" /></li>
            <li className="nav-item"><Link className="nav-link" href="/Gift">Gifts</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/AboutUs">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/Contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="navleft ms-auto">
          <div id="divcart">
          <img id="cart" src="/img/icon//grocery-store (1).png" />
          <span id="cart-number">0</span>
          </div>
       
          {/* Changed the Login button to Logout */}
          <button className="btn logout" onClick={handleLogOut}>
            <img id="log" src="/img/icon/logout.png" /> 
          </button>
        </div>
      </nav>
      <Script src="/js/bootstrap.js"></Script>
    </div>
  );
}