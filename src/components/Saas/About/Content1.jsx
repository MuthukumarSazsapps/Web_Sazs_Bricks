import React from 'react'

const Content = ({ links, rtl }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 order-2 order-lg-0">
            <div className="section-head  style-5">
              <h2>Responsive User <span>Interfaces</span> </h2>
            </div>
            <p><br/><br/>Responsive User Interfaces redefine software dashboards, offering adaptability across devices for a cohesive and visually pleasing experience. From comprehensive data visualization to intuitive navigation, these dashboards dynamically adjust layouts, ensuring optimal functionality on diverse screens. With a focus on responsive design principles, software dashboards become not only informative but also effortlessly accessible, providing users with a streamlined and interactive interface for efficient decision-making across platforms.<br/><br/>     This adaptability positions software dashboards as powerful tools for real-time decision-making, empowering users to stay connected and informed, regardless of the device they choose.</p>
            {/* <div className="line-links">
              {
                links.map((link, index) => (<a href="#" key={index}>{ link }</a>))
              }
            </div> */}
          </div>
          <div className="col-lg-8 order-0 order-lg-2">
            <div className="img main-img1">
              <img src="/assets/img/about/about_s5_1_1.png" alt="" className="sm-circle" />
              <img src="/assets/img/about/about_s5_1_2.png" alt="" className="img-body" />
              {/* <img src="/assets/img/about/about_s5_1_3.png" alt="" className="card1" /> */}
              {/* <img src="/assets/img/about/about_s5_1_4.png" alt="" className="card2" /> */}
              <img src="/assets/img/about/about_s5_1_5.png" alt="" className="lg-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content