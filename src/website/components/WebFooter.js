import React from 'react'
import { Link } from 'react-router-dom';

const WebFooter = (props) => {
    return (
        <div className="footerRow">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-lg-4 col-md-5 order-last order-sm-last order-md-first">
                        <div className="leftBoxFt">
                            <img src="images/procezo_logo.png" alt="Procezo" title="Procezo" className="logoBtm" />
                            <p>Copyright©  2021 Procezo Inc.<br />All Rights Reserved</p>
                            <ul>
                                <li><a href="https://www.facebook.com/procezoapp/" target="_blank"><img src="images/fb.png" /></a></li>
                                <li><a href="https://www.linkedin.com/company/procezo" target="_blank"><img src="images/linkedin.png" /></a></li>
                                <li><a href="https://instagram.com/app_procezo?igshid=1psvq8kcqv9kn" target="_blank"><img src="images/instagram.png" /></a></li>
                                <li><a href="https://medium.com/procezo-blogs" target="_blank"><img src="images/medium.png" /></a></li>
                                <li><a href="https://twitter.com/procezoapp?s=09" target="_blank"><img src="images/twitter.png" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7">
                        <div className="rightBoxFt">
                            <div className="row">
                                <div className="col-lg-2 col-md-4">
                                    <div className="sublinks">
                                        <h2>Company</h2>
                                        <ul>
                                            <li>
                                                <Link to="/aboutus">About us</Link>
                                            </li>
                                            {/* <li><a href="JavaScript:void(0);">Team</a></li> */}
                                            {/* <li><a href="JavaScript:void(0);">In the news</a></li> */}
                                            <li>
                                                <Link to="/contactus">Contact us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-8">
                                    <div className="sublinks">
                                        <h2>Blogs</h2>
                                        <ul>
                                            <li><a target="_blank" href="https://medium.com/procezo-blogs/how-to-work-from-home-101-must-read-if-you-have-never-done-this-before-e2df74daa330">How to Work from Home</a></li>
                                            <li><a target="_blank" href="https://medium.com/procezo-blogs/top-free-asana-alternatives-68f55acca504">Top FREE Asana Alternatives</a></li>
                                            <li><a target="_blank" href="https://medium.com/procezo-blogs/must-have-free-tools-for-every-startup-f294824857ae">Must have tools in 2020</a></li>
                                            <li><a target="_blank" href="https://medium.com/procezo-blogs/teaching-and-studying-in-the-era-of-coronavirus-d71972c1f584">Teaching and studying in the era of coronavirus</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4">
                                    <div className="sublinks">
                                        <h2>Product</h2>
                                        <ul>
                                            <li>
                                                <Link to="/features">Features</Link>
                                            </li>
                                            {/* <li><a href="JavaScript:void(0);">Cases</a></li> */}
                                            <li>
                                                <Link to="/customers">Customers</Link>
                                            </li>
                                            <li>
                                                <Link to="/pricing">Pricing</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-8">
                                    <div className="sublinks">
                                        <h2>Terms & Policies</h2>
                                        <ul>
                                            <li>
                                                <Link to="/terms-of-service">Terms</Link>
                                            </li>
                                            <li>
                                                <Link to="/privacy">Privacy</Link>
                                            </li>
                                            <li>
                                                <Link to="/gdpr">GDPR</Link>
                                            </li>
                                            <li>
                                                <Link to="/responsible-disclosure">Responsible Disclosure</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="emailId">
                            <a href="mailto:hi@procezo.com">hi@procezo.com</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WebFooter;