import React, { Component } from "react";
import Helmet from "react-helmet";
import WebBase from "../components/WebBase";

class CustomersContainer extends Component {
    render() {
        return (
            <>
                <WebBase>
                    <div className="container-xl">
                        <div className="bannerRow">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-6">
                                    <div className="bannerText">
                                        <h1>500+</h1>
                                        <h3>
                                            teams across the world are with us
                                            already.
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                    <div className="bannerImg">
                                        <img src="customers/customerBanner.png" alt="custom" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl">
                        <div className="customer-row">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-7">
                                    <div className="customer-details py-5">
                                        {/* <img
                                            className="user-background"
                                            src="customers/customerBg3.png"
                                        /> */}
                                        <p>
                                            The solution was deployed in record
                                            time for one of our important
                                            onboarding processes. The strength
                                            of the platform lies in it’s
                                            business flow adaptation with
                                            impressive turnaround. The team is
                                            customer focused and have worked
                                            hard to ensure a high quality
                                            product in a short period of time.
                                            It's been wonderful to work with
                                            such a dedicated team of
                                            individuals.’
                                        </p>
                                        <b>
                                            Mahesh Mathur
                                            <br />
                                            Vice President IT, DLF Limited
                                        </b>
                                        {/* <img className="user-img" src="customers/customerimg1.png" /> */}
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="customer-logos">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/uberlogo.png" alt="uberlogo" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/travenues.png" alt="travenues" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/apprize.png" alt="apprize" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/LAW-logo.png" alt="law" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/drvaidyas.png" alt="drvaidyas" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/bloggeroundup.png" alt="bloggerround" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/whirlpool.png" alt="whirlpool" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/digitalprofile.png" alt="digital" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/graffitecs.png" alt="graffitecs" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/henkel.png" alt="henkel" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/dlf.png" alt="dlf" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/carrentals.png" alt="carrentals" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/rootandleaves.png" alt="root" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/zomato.png" alt="zomato" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/cigna.png" alt="cigna" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/red2digital.png" alt="customers" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/roomsxpert.png" alt="rooms" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/HEADER-AA-DPS-2020Y.png" alt="header" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl">
                        <div className="customer-row">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-5 order-last order-col-last order-md-first">
                                    <div className="customer-logos-left">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second1.png" alt="sec1" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second2.png" alt="sec2" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second3.png" alt="sec3" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second4.png" alt="sec4" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second5.png" alt="sec5" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second6.png" alt="sec6" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second7.png" alt="sec7" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second8.png" alt="sec8" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second9.png" alt="sec9" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second10.png" alt="sec10" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second11.png" alt="sec11" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second12.png" alt="sec12" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second13.png" alt="sec13" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second14.png" alt="sec14" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second15.png" alt="sec15" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second16.png" alt="sec16" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second17.png" alt="sec17" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/second18.png" alt="sec18" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="customer-details-right py-5">
                                        {/* <img
                                            className="user-background2"
                                            src="customers/customerBg2.png"
                                        /> */}
                                        <p>
                                            ‘‘We have been working on
                                            Reconciliation tool for quite some
                                            time now and given the complexity of
                                            the requirement we have come a long
                                            way. Daily reconciliation time will
                                            be under 10 minutes. More
                                            importantly, user engagement to
                                            perform this will be under 2
                                            minutes.
                                        </p>
                                        <b>
                                            Mabel Pereira,
                                            <br />
                                            Senior Manager Finance, Manipal
                                            Cigna Insurance
                                        </b>
                                        {/* <img className="user-img2" src="customers/customerimg2.png" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl">
                        <div className="customer-row">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-7">
                                    <div className="customer-details py-5">
                                        {/* <img
                                            className="user-background"
                                            src="customers/customerBg3.png"
                                        /> */}
                                        <p>
                                            I don’t think my team and I can back
                                            to any other task management &
                                            productivity tools out there. Simply
                                            love how holistic this entire thing
                                            is. We are not going back to
                                            anything else.
                                        </p>
                                        <b>
                                            Annirudha Sen ,
                                            <br />
                                            Founder, Kenko Insurance
                                        </b>
                                        {/* <img className="user-img" src="customers/customerimg3.png" /> */}
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="customer-logos">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd1.png" alt="thrd1" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd2.png" alt="thrd2" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd3.png" alt="thrd3" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd4.png" alt="thrd4" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd5.png" alt="thrd5" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd6.png" alt="thrd6" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd7.png" alt="thrd7" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd8.png" alt="thrd8" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd9.png" alt="thrd9" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd10.png" alt="thrd10" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd11.png" alt="thrd11" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd12.png" alt="thrd12" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd13.png" alt="thrd13" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd14.png" alt="thrd14" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd15.png" alt="thrd15" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd16.png" alt="thrd16" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd17.png" alt="thrd17" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-4">
                                                <div className="custmr-log">
                                                    <img src="customers/thrd18.png" alt="customer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="container-xl"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <div className="getStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-7">
                                    <p>
                                        Ready for a quantum shift in
                                        productivity?
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <a href="https://app.procezo.com/signup">Get Started now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </WebBase>

                <Helmet>
                    <link rel="stylesheet" href="customers/css/customers.css" />
                    <title>Procezo : Customers</title>
                </Helmet>
            </>
        );
    }
}

export default CustomersContainer;
