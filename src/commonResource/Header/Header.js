import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

import logo from "../images/icons/logo.png";

import search from "../images/icons/search-icon-sm.png";

import cart from "../images/icons/cart-sm.png";


function Header() {
  // button trying
    // const [isOpen, setIsOpen] = useState(false);
  
    // const toggleMenu = () => {
    //   setIsOpen(!isOpen);
    // };
  
 
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
        {/* <button
  className="navbar-toggler navbar-toggler-right"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target=".navbar-collapse"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  ☰
</button> */}

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/mac/">Mac</Link></li>
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/iphone">iPhone</Link></li>
              <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/ipad">iPad</Link></li>
              <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/watch">Watch</Link></li>
              <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/tv">TV</Link></li>
              <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/music">Music</Link></li>
              <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/support">Support</Link></li>
              <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/search/"><img src={search} alt="search" /></Link></li>
              <li className="nav-item"><Link  className="nav-link js-scroll-trigger" to="/cart/"><img src={cart} alt="cart" /></Link></li>
              
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;


















// /*First Section*/
// import { moduleName } from "../images/home/ipodPronew-sm.jpg";
// import {  } from "../images/home/ipodPronew.jpg";
// /*Second section*/
// import {  } from "../images/home/macbookair-new-sm.jpg";
// import {  } from "../images/home/macbookair-new.jpg";
// /*Third section*/
// import {  } from "../images/home/iphone11-pro-bg.jpg";
// /* Fourth section left & right*/
// import {  } from "../images/home/iphone11-colored.jpg";
// import {  } from "../images/home/apple-blue-logo.jpg";
// /*Fifth Section left & right*/
// import {  } from "../images/home/actors.jpg";
// import {  } from "../images/home/watch.jpg";
// /*Sixth Section left & right*/
// import {  } from "../images/home/spyder.jpg";
// import {  } from "../images/home/apple-card-monthly.jpg";
// // front image from fifth left section
// import { appleTv } from "../images/icons/apple-tv-logo.png";
// import { banker } from "../images/home/banker.png";
// // front image from fifth right section
// import { watch } from "../images/icons/watch-series5-logo.png";
// // front image from Sixth left Section 
// import { arcade } from "../images/icons/arcade.png";

// <div>

// <!-- Alert Section -->
// <section className="alert-section top-50">
//     <div className="container">
//         <div className="alert-title">
//             We’re open for you.
//         </div>
//         <div className="alert-text">
//             Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE.<br>
//             For service and support, visit <a href="https://support.apple.com/">support.apple.com</a>.
//         </div>
//     </div>
// </section>
// <!-- First section starts here -->
// <section className="first-hightlight-wrapper">
//     <div className="container">

//         <div className="new-alert">
//             New
//         </div>

//         <div className="title-wraper bold black">
//             iPad Pro 
//         </div> 

//         <div className="links-wrapper">
//             <ul>
//                 <li><a href="">Learn more</a></li>
//                 <li><a href="">Order</a></li>
//             </ul> 
//         </div>

//         <div className="ipod-caption row">
//             <div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
//             <div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
//         </div>
//     </div>
// </section>
// <!-- First section starts here -->
// <!-- Second section starts here -->
// <section className="second-hightlight-wrapper">
//     <div className="container">

//         <div className="new-alert">
//             New
//         </div>

//         <div className="title-wraper bold black">
//             MacBook Air 
//         </div> 

//         <div className="description-wrapper black">
//             Twice the speed. Twice the storage.
//         </div>

//         <div className="price-wrapper grey">
//             From $999.
//         </div>

//         <div className="links-wrapper">
//             <ul>
//                 <li><a href="">Learn more</a></li>
//                 <li><a href="">Buy</a></li>
//             </ul> 
//         </div>
//     </div>
// </section>
// <!-- Second section starts here -->

// <!-- Third section starts here -->
// <section className="third-hightlight-wrapper">
//     <div className="container">
//         <div className="title-wraper bold">
//             iPhone 11 Pro 
//         </div> 

//         <div className="description-wrapper">
//             Pro cameras. Pro display. Pro performance.
//         </div>

//         <div className="price-wrapper">
//             From $24.95/mo. or $599 with trade‑in.
//         </div>

//         <div className="links-wrapper">
//             <ul>
//                 <li><a href="">Learn more</a></li>
//                 <li><a href="">Buy</a></li>
//             </ul> 
//         </div>
//     </div>
// </section>
// <!-- Third section ends here -->

// <!-- Fourth section starts here -->
// <section className="fourth-heghlight-wrapper">
//     <div className="container-fluid">
//         <div className="row">
//             <div className="left-side-wrapper col-sm-12 col-md-6">
//                 <div className="left-side-container">
//                     <div className="title-wraper">
//                         iPhone 11 
//                     </div> 
//                     <div className="description-wraper">
//                         Just the right amount of everything.
//                     </div>
//                     <div className="price-wrapper">
//                         From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
//                     </div>

//                     <div className="links-wrapper">
//                         <ul>
//                             <li><a href="">Learn more</a></li>
//                             <li><a href="">Apply now</a></li>
//                         </ul> 
//                     </div>
//                 </div>
//             </div>
//             <div className="right-side-wrapper col-sm-12 col-md-6">
//                 <div className="right-side-container">
//                     <div className="title-wraper white">
//                         Get the latest CDC response to COVID-19. 
//                     </div> 

//                     <div className="links-wrapper white">
//                         <ul>
//                             <li><a href="">Watch the PSA</a></li>
//                         </ul> 
//                     </div>
//                 </div>
//             </div>					
//         </div>
//     </div> 
// </section>
// <!-- Fourth section ends here -->

// <!-- Fifth section starts here -->
// <section className="fifth-heghlight-wrapper">
//     <div className="container-fluid">
//         <div className="row">
//             <div className="left-side-wrapper col-sm-12 col-md-6">
//                 <div className="left-side-container">
//                     <div className="top-logo-wrapper">
//                         <div className="logo-wrapper">
//                             <img src={appleTv}/>
//                         </div>
//                     </div>

//                     <div className="tvshow-logo-wraper">
//                         <img src={banker}/>
//                     </div>

//                     <div className="watch-more-wrapper">
//                         <a href="#">Watch now on the Apple TV App</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="right-side-wrapper col-sm-12 col-md-6">
//                 <div className="right-side-container">
//                     <div className="top-logo-wrapper">
//                         <div className="logo-wrapper">
//                             <img src={watch}/>
//                         </div>
//                     </div>
//                     <div className="description-wraper">
//                         With the Always-On Retina display.<br>
//                         You’ve never seen a watch like this.
//                     </div>
//                     <div className="links-wrapper">
//                         <ul>
//                             <li><a href="">Learn more</a></li>
//                             <li><a href="">Buy</a></li>
//                         </ul> 
//                     </div>
//                 </div>
//             </div>					
//         </div>
//     </div> 
// </section>
// <!-- Fifth section ends here -->

// <!-- Sixth section starts here -->
// <section className="sixth-heghlight-wrapper">
//     <div className="container-fluid">
//         <div className="row">
//             <div className="left-side-wrapper col-sm-12 col-md-6">
//                 <div className="left-side-container">
//                     <div className="top-logo-wrapper">
//                         <div className="logo-wrapper">
//                             <img src={arcade}/>
//                         </div>
//                     </div>
//                     <div className="description-wraper white">
//                         Agent 8 is a small hero on a big mission.
//                     </div>
//                     <div className="links-wrapper">
//                         <ul>
//                             <li><a href="">Play now<sup>2</sup></a></li>
//                             <li><a href="">Learn about Apple Arcade</a></li>
//                         </ul> 
//                     </div>						
//                 </div>
//             </div>
//             <div className="right-side-wrapper col-sm-12 col-md-6">
//                 <div className="right-side-container">
//                     <div className="title-wraper">
//                         Apple Card Monthly Installments 
//                     </div> 
//                     <div className="description-wraper">
//                         Pay for your next iPhone over time, interest-free with Apple Card.
//                     </div>
//                     <div className="links-wrapper">
//                         <ul>
//                             <li><a href="">Learn more</a></li>
//                             <li><a href="">Apply now</a></li>
//                         </ul> 
//                     </div>
//                 </div>
//             </div>					
//         </div>
//     </div> 
// </section>
// </div>