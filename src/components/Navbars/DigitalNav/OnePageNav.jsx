import { useEffect, useRef } from 'react';
import navbarScrollEffect from "@common/navbarScrollEffect";
import scrollToSection from '@common/scrollToSection';
import Link from 'next/link';

const OnePageNav = () => {
   
  const downloadPdf = () => {
    const pdfUrl = "/assets/pdf/Sazs Broucher.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "sazs bricks doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

   const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  // useEffect(() => {
  //   const sections = document.querySelectorAll('[data-scroll-index]');

  //   window.addEventListener('scroll', () => {
  //     sections.forEach(section => {
  //       const index = section.getAttribute('data-scroll-index');
  //       const offset = section.offsetTop;
  //       const height = section.offsetHeight;
  //       const scroll = window.scrollY;

  //       if (scroll + 200 > offset && scroll + 200 < offset + height) {
  //         document.querySelector(`[data-scroll-nav="${index}"]`).classList.add('active');
  //       } else {
  //         document.querySelector(`[data-scroll-nav="${index}"]`).classList.remove('active');
  //       }
  //     });
  //   });
  // }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light style-1" ref={navbarRef}>
      <div className="container">
      <Link href={"/"}>
        <a className="navbar-brand"   style={{marginTop:"-29px"}}>
          <img src="/assets/img/logo_cd.png" data-scroll-nav="0" alt="" width={180} height={60} />
        </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
             <Link href={"/"}>
              <a className="nav-link">
                Home
              </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
             <Link href={"/AboutUs"}>
              <a className="nav-link">
                About us
              </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
            <Link href={"/ServicesUs"}>
              <a className="nav-link" >
                Services
              </a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href={"/SelectUs"}>
              <a className="nav-link" >
                Select us
              </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" data-scroll-nav="4" onClick={scrollToSection}>
                portfolio
              </a>
            </li> */}
            <li className="nav-item">
            <Link href={"/FeaturesUs"}>
              <a className="nav-link" >
                {/* testimonials */} Features
              </a>
              </Link>
            </li>
            

            <li className="nav-item">
            <Link href={"/ContactUs"}>
              <a className="nav-link" >
                {/* blog */}Contact Us
              </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" data-scroll-nav="6" onClick={scrollToSection}>
                Features
              </a>
            </li> */}

          </ul>
          <div className="nav-side">
            {/* <div className="hotline pe-4">
              <div className="icon me-3">
                <i className="bi bi-telephone"></i>
              </div>
              <div className="cont">
                <small className="text-muted m-0">hotline 24/7</small>
                <h6>(+23) 5535 68 68</h6>
              </div>
            </div> */}
            <div className="qoute-nav ps-4" >
              <a href="#0" className="btn sm-butn butn-gard border-0 text-white" data-scroll-nav="7">
                <span onClick={downloadPdf}>DOWNLOAD BROCHURE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default OnePageNav