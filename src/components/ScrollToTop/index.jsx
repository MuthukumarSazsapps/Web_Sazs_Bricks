// import { useEffect } from 'react';
// import scrollToTop from '@common/scrollToTop';

// const ScrollToTop = ({ topText }) => {
//   useEffect(() => {
//     scrollToTop();
//   }, []);

//   return (
//     <>
//     <a href="#" className={`to_top ${topText ? '':'bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center'}`}>
//       <i className={`bi bi-chevron-up ${topText ? '':'fs-6 text-dark'}`}></i>
//       { topText && <small>Top</small> }
//     </a>
//     <>
//         <a
//           href="https://api.whatsapp.com/send?phone=917666628000&text=I am intersted in Quarry Product. Please get in touch"
//           className="ifloat"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src="/assets/img/icons/whatsapp.png" alt=""></img>
//         </a>
//       </>
//       </>
//   );
// };

// export default ScrollToTop;
import { useEffect } from "react";
import scrollToTop from "@common/scrollToTop";

const ScrollToTop = ({ topText }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <a
        href="#"
        className={`to_top ${
          topText
            ? ""
            : "bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"
        }`}
      >
        <i
          className={`bi bi-chevron-up ${topText ? "" : "fs-6 text-dark"}`}
        ></i>
        {topText && <small>Top</small>}
      </a>
      <>
        <a
          href="https://api.whatsapp.com/send?phone=917666628000&text=I am intersted in Quarry Product. Please get in touch"
          className="ifloat"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/img/icons/whatsapp.png" alt=""></img>
          
        </a>
      </>
    </>
  );
};

export default ScrollToTop;
