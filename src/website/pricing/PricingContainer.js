import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import WebBase from "../components/WebBase";

export default class PricingContainer extends Component {
    render() {
        return (
            <>
                <WebBase>
                    <div className="container-xl">
                        <div className="pricing-cls">
                            <div className="row">
                                <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-duration="3000">
                                    <div className="pricing-text">
                                    <h1>Pricing</h1>
                                    <p >Making <i>productivity affordable</i> is a strong motivation for us to do what we do. We figured we do not want to offer partial productivity to anyone.</p>
                                    <p className="sizebig">Hence, all our features are available on a <b>free forever</b> plan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl">
                        <div className="priceing-service">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="service-box">
                                    <h4>Small teams / Startups</h4>
                                    <h2>Free Forever</h2>
                                    <p className="free-service">FREE</p>
                                    <p className="for-team">For up to 10 teammates</p>
                                    <p className="get-started">
                                        <Link to='/signup'>Get Started</Link>
                                    </p>
                                    <p className="no-credit">No credit card required</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="3000">
                                    <div className="service-box2 active">
                                    <h4>Large teams / Enterprises</h4>
                                    <h2>Paid</h2>
                                    <p className="free-service"><span>$</span>7</p>
                                    <p className="for-team">Per user, per month </p>
                                    <p className="get-started">
                                        <Link to='/signup'>Get Started</Link>
                                    </p>
                                    <p className="no-credit"><b>1 month free trial</b> No credit card required</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="explore-all">
                                        <Link to='/features'>
                                            Explore all features
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl">
                        <div className="faq-list"  data-aos="fade-up" data-aos-duration="3000">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="faq-heading">
                                    <h3>Frequently asked questions</h3>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="jquery_accordion_wrapper">
                                    <div className="jquery_accordion_item">
                                        <div className="jquery_accordion_title">How does Procezo’s pricing work?</div>
                                        <div className="jquery_accordion_content">
                                            <p>Procezo is a free-for-life task managing tool (for up to 10 users) with most premium features found on other task managers included at no extra cost. For larger team and ERP: US$7 per user per month when billed monthly.</p>
                                        </div>
                                    </div>
                                    <div className="jquery_accordion_item">
                                        <div className="jquery_accordion_title">What forms of payment do you accept?</div>
                                        <div className="jquery_accordion_content">
                                            <p>
                                                We use Stripe you can purchase the paid features with any major credit card.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="jquery_accordion_item">
                                        <div className="jquery_accordion_title">We need to change the number of people in our team. How will that work?</div>
                                        <div className="jquery_accordion_content">
                                            <p>
                                                For up to 10 users, you won’t be charged a single penny. For a large team, greater than 10 users, you will be charged $11 per user per month.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="jquery_accordion_item">
                                        <div className="jquery_accordion_title">How secure is Procezo?</div>
                                        <div className="jquery_accordion_content">
                                            <p>At Procezo, the security of your data is our highest priority. All communication between you and us is SSL
                                                encrypted, ensuring data security. We regularly back up your data to prevent data loss and aid in
                                                recovery. Additionally, we host data in secure AWS data centres</p>
                                        </div>
                                    </div>
                                    <div className="jquery_accordion_item">
                                        <div className="jquery_accordion_title">Are updates included in my plan?</div>
                                        <div className="jquery_accordion_content">
                                            <p>Yes, You don't need to worry about it. The updates for existing features or any new feature are included in the price.</p>
                                        </div>
                                    </div>
                                    <div className="jquery_accordion_item">
                                        <div className="jquery_accordion_title">We need to change the number of people in our team. How will that work?</div>
                                        <div className="jquery_accordion_content">
                                            <p>For up to 10 users, you won’t be charged a single penny. For a large team, greater than 10 users, you will be charged $11 per user per month.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl" data-aos="fade-up" data-aos-duration="3000">
                        <div className="btn-logo-row">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="trusted-logos">Trusted by some of world’s best teams</div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="logoclients-btm"><img src="images/uber.png" /></div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="logoclients-btm"><img src="images/dlf.png" /></div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="logoclients-btm"><img src="images/whirlpool.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </WebBase>

                <Helmet>
                    <title>Procezo : Pricing</title>
                </Helmet>
            </>
        );
    }
}
