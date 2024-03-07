import Link from 'next/link';

const Content = ({ list, rtl }) => {
  return (
    <div className="content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="img main-img2">
              <img src="/assets/img/about/about_s5_2_1.png" alt="" />
              <img src="/assets/img/about/about_s5_2_2.png" alt="" className="img-body" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section-head mb-30 style-5">
              <h2>60+ REPORTS <span>MANAGEMENT</span> </h2>
            </div>
            <p>
               Our Software Reports Track Sales, Purchases, And Stocks, Providing Vital Business Insights. They Optimize Inventory, Manage Expenses, And Assess Financial Health, Allowing Businesses To Streamline Operations And Make Informed Decisions For Success.

              {/* { rtl ? 'مع سوق Iteck ، اختر من بين مئات بوابات الدفع لعملائك. من PayPal إلى Stripe إلى Skrill ، Visa Debit ، Master Card ، إلخ' : 'With Iteck Marketplace, choose from hundreds of payment gateways for your customers. From PayPal to Stripe to Skrill, Visa Debit, Master Card, etc' } */}
            </p>
            <ul className="list-icon">
              {
                list.map((item, index) => (
                  <li key={index}>
                    <span className="icon">
                      <i className={item.icon}></i>
                    </span>
                    <h6>{ item.title }</h6>
                  </li>
                ))
              }
            </ul>
            {/* <Link href="/page-contact-5">
              <a className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-50">
                <span>reach us for demo</span>
              </a>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content