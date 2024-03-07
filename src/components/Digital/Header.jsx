import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <header className="section-padding style-1" data-scroll-index="0">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-60">
                  <h6 className="color-main text-uppercase">SAZSAPPS presents</h6>
                  <h2>
                    SAZS BRICKS <span className="fw-normal">Software</span>
                  </h2>
                </div>
                <div className="text">
                "Welcome to Bricks Software—where strength meets innovation. Our solutions build the foundation for your digital success, seamlessly blending reliability with cutting-edge technology."
                </div>
                <div className="bttns mt-5">
                  {/* <Link href="/page-services-5">
                    <a className="btn btn-dark">
                      <span>our services</span>
                    </a>
                  </Link> */}
                  <a href="https://www.youtube.com/watch?v=FmLpFO93DPE" className="vid-btn" onClick={openVideo}>
                    <i className="bi bi-play wow heartBeat infinite slow"></i>
                    <span>Promo <br /> video</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="img">
                <img src="/assets/img/header/head.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/head_shape_r.png" alt="" className="head-shape-r wow" />
      <img src="/assets/img/header/head_shape_l.png" alt="" className="head-shape-l wow" />
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="FmLpFO93DPE"
              onClose={() => setOpen(false)}
            />
          )
      }
    </header>
  )
}

export default Header