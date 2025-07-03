'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { isLogin } from '@/utils/auth';
import { logOut } from '@/utils/auth';

const Home = () => {
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
                   src="/img/home/fe8cd948a2b516ccbe566e98167b34d6.jpg"
                   alt="Wedding"
                 />
               </label>
               <label className="item" htmlFor="t-2">
                 <img
                   className="imgw"
                   src="/img/home/6947e38cc8b8a10e2746348b8bec0c1d.jpg"
                   alt="Wedding"
                 />
               </label>
               <label className="item" htmlFor="t-3">
                 <img
                   className="imgw"
                   src="/img/home/769d6fed58298f9fde9340557923a3e7.jpg"
                   alt="Wedding"
                 />
               </label>
               <label className="item" htmlFor="t-4">
                 <img
                   className="imgw"
                   src="/img/home/88e51b39e9cad79991a63d3c10dc3026.jpg"
                   alt="Wedding"
                 />
               </label>
               <label className="item" htmlFor="t-5">
                 <img
                   className="imgw"
                   src="/img/home/0f4740a8f9bb5da7e55562a4b388f703.jpg"
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
             <button id="start">Get Started</button>
           </div>
         </div>
       </>
    );
};

export default Home;

/*
 <h1>
            <p>Hi {user?.name},Welcome!</p>
            <p>{user?.email}</p>
            Welcome to the Home page!
            <button
            onClick={handlelogOut}
            >
                
            </button>
        </h1>
*/ 