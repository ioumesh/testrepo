import React, { Component } from "react";
import WebBase from "../components/WebBase";
import Helmet from "react-helmet";
import UserBio from "./components/UserBio";
import { teamBio } from "./components/teamBio";

class HomeContainer extends Component {
    render() {
        return (
            <>
                <WebBase>
                    <div className="container-xl">
                        <div className="bannerRow">
                            <div className="row">
                                <div
                                    className="col-lg-12"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <div className="bannerText">
                                        <h1>About us</h1>
                                        <p>
                                            Procezo was founded on the belief
                                            that work shouldn’t overwhelm and
                                            control you - you should dictate it.
                                            Our mission is to provide teams with
                                            the tools they need to succeed by
                                            modernising tasks, project work and
                                            productivity to fit the needs of the
                                            modern business world. Organizations
                                            from various industries around the
                                            world are already benefiting from
                                            Procezo to plan everything from
                                            product launches, events, campaigns
                                            and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clientsLogo">
                        <div className="container-xl clientBox">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col">
                                    <div className="no-of-client">
                                        <h5>2000+</h5>
                                        <span>Tasks</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col">
                                    <div className="no-of-client">
                                        <h5>1000+</h5>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col">
                                    <div className="no-of-client">
                                        <h5>500+</h5>
                                        <span>Organisations</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="row"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <div className="col-lg-5 col-md-5 col">
                                    <div className="logo3 text-right">
                                        <img src="aboutus/client-logo1.png" alt="logo1" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col">
                                    <div className="logo3 text-center">
                                        <img src="aboutus/client-logo2.png" alt="logo2"/>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col">
                                    <div className="logo3 text-left">
                                        <img src="aboutus/client-logo3.png" alt="logo3"/>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="row"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <div className="col-lg-4 col-md-4 col">
                                    <div className="logo4 text-right">
                                        <img src="aboutus/client-logo4.png" alt="logo4" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col">
                                    <div className="logo4 text-center">
                                        <img src="aboutus/client-logo5.png" alt="logo5" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col">
                                    <div className="logo4 text-center">
                                        <img src="aboutus/client-logo6.png" alt="logo6" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col">
                                    <div className="logo4 text-left">
                                        <img src="aboutus/client-logo7.png" alt="logo7" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="row"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <div className="col-lg-5 col-md-5 col">
                                    <div className="logo3 text-right">
                                        <img src="aboutus/client-logo8.png" alt="logo8"/>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col">
                                    <div className="logo3 text-center">
                                        <img src="aboutus/client-logo9.png" alt="logo9" />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col">
                                    <div className="logo3 text-left">
                                        <img src="aboutus/client-logo10.png" alt="logo10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-xl">
                        <div
                            className="meet-our-team"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <h2>Meet our team!</h2>
                            <div className="row">
                                {teamBio.map((user) => (
                                    <UserBio
                                        name={user.name}
                                        role={user.role}
                                        image={user.image}
                                        about={user.about}
                                        linkedin={user.linkedin}
                                    />
                                ))}
                                {/* <div className="col-lg-3 col-md-6">
                                    <div className="teams">
                                        <img
                                            src="aboutus/saurabh.png"
                                            align="Saurabh Kumar"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Saurabh Kumar</h4>
                                        <span>Founder</span>
                                        <b>About:</b>
                                        <p>
                                            From the first line of code to real
                                            time dashboards Aakash is the mad
                                            mind behind this automation
                                            powerhouse. Aakash is a pure
                                            enthusiast - watching linus tech
                                            tips videos or traveling and cooking
                                            shows while having breakfast is his
                                            vice.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-md-6">
                                    <div className="teams">
                                        <img
                                            src="aboutus/aman.png"
                                            align="Aman Priyadarshi"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Aman Priyadarshi</h4>
                                        <span>Founder</span>
                                        <b>About:</b>
                                        <p>
                                            From the first line of code to real
                                            time dashboards Aakash is the mad
                                            mind behind this automation
                                            powerhouse. Aakash is a pure
                                            enthusiast - watching linus tech
                                            tips videos or traveling and cooking
                                            shows while having breakfast is his
                                            vice.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-md-6">
                                    <div className="teams">
                                        <img
                                            src="aboutus/akash.png"
                                            align="Aakash Sharma"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Aakash Sharma</h4>
                                        <span>CTO</span>
                                        <b>Bio:</b>
                                        <p>
                                            From the first line of code to real
                                            time dashboards Aakash is the mad
                                            mind behind this automation
                                            powerhouse. Aakash is a pure
                                            enthusiast - watching linus tech
                                            tips videos or traveling and cooking
                                            shows while having breakfast is his
                                            vice.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-md-6">
                                    <div className="teams">
                                        <img
                                            src="aboutus/nitish.png"
                                            align="Nitish Kesarwani"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Nitish Kesarwani</h4>
                                        <span>Senior Web Developer</span>
                                        <b>About:</b>
                                        <p>
                                            From the first line of code to real
                                            time dashboards Aakash is the mad
                                            mind behind this automation
                                            powerhouse. Aakash is a pure
                                            enthusiast - watching linus tech
                                            tips videos or traveling and cooking
                                            shows while having breakfast is his
                                            vice.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div
                                    className="col-lg-3 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <div className="teams">
                                        <img
                                            src="aboutus/garvit.png"
                                            align="Garvit Khatri"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Garvit Khatri</h4>
                                        <span>Product Manager</span>
                                        <b>About:</b>
                                        <p>
                                            From the first line of code to real
                                            time dashboards Aakash is the mad
                                            mind behind this automation
                                            powerhouse. Aakash is a pure
                                            enthusiast - watching linus tech
                                            tips videos or traveling and cooking
                                            shows while having breakfast is his
                                            vice.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div
                                    className="col-lg-3 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <div className="teams">
                                        <img
                                            src="aboutus/sonoo.png"
                                            align="Sonoo Gupta"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Sonoo Gupta</h4>
                                        <span>Full Stack Developer</span>
                                        <b>About:</b>
                                        <p>
                                            From the first line of code to real
                                            time dashboards Aakash is the mad
                                            mind behind this automation
                                            powerhouse. Aakash is a pure
                                            enthusiast - watching linus tech
                                            tips videos or traveling and cooking
                                            shows while having breakfast is his
                                            vice.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div
                                    className="col-lg-3 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <div className="teams">
                                        <img
                                            src="aboutus/punit.png"
                                            align="Punit Vats"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Punit Vats</h4>
                                        <span>Product Designer</span>
                                        <b>About:</b>
                                        <p>
                                            From the first line of code to real
                                            time dashboards Aakash is the mad
                                            mind behind this automation
                                            powerhouse. Aakash is a pure
                                            enthusiast - watching linus tech
                                            tips videos or traveling and cooking
                                            shows while having breakfast is his
                                            vice.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div
                                    className="col-lg-3 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <div className="teams">
                                        <img
                                            src="aboutus/esha.png"
                                            align="Esha Tyagi"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Esha Tyagi</h4>
                                        <span>Software Tester</span>
                                        <b>About:</b>
                                        <p>
                                            From the first line of code to real
                                            time dashboards Aakash is the mad
                                            mind behind this automation
                                            powerhouse. Aakash is a pure
                                            enthusiast - watching linus tech
                                            tips videos or traveling and cooking
                                            shows while having breakfast is his
                                            vice.
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-md-6">
                                    <div className="teams">
                                        <img
                                            src="aboutus/komal.png"
                                            align="Komal Singh"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Komal Singh</h4>
                                        <span>Customer Success Manager</span>
                                        <b>About:</b>
                                        <p>
                                            Dummy text, this text will be
                                            updated once I get the content. This
                                            is just a dummy text. Lorem ipsum
                                            dorem. sit imet ejfe kjfej jfedummy
                                            text doesn’t mean anything so stop
                                            reading. Content will be updated
                                            okay, great design Jahan Ara!
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-md-6">
                                    <div className="teams">
                                        <img
                                            src="aboutus/michael.png"
                                            align="Michael Zoppola"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Michael Zoppola</h4>
                                        <span>Marketing Assistant</span>
                                        <b>About:</b>
                                        <p>
                                            Dummy text, this text will be
                                            updated once I get the content. This
                                            is just a dummy text. Lorem ipsum
                                            dorem. sit imet ejfe kjfej jfedummy
                                            text doesn’t mean anything so stop
                                            reading. Content will be updated
                                            okay, great design Jahan Ara!
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-md-6">
                                    <div className="teams">
                                        <img
                                            src="aboutus/abhay.png"
                                            align="Abhay Vashishtha"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Abhay Vashishtha</h4>
                                        <span>Product Manager</span>
                                        <b>About:</b>
                                        <p>
                                            Dummy text, this text will be
                                            updated once I get the content. This
                                            is just a dummy text. Lorem ipsum
                                            dorem. sit imet ejfe kjfej jfedummy
                                            text doesn’t mean anything so stop
                                            reading. Content will be updated
                                            okay, great design Jahan Ara!
                                        </p>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-3 col-md-6">
                                    <div className="teams">
                                        <img
                                            src="aboutus/jahan.png"
                                            align="Jahan Ara S"
                                        />
                                        <a
                                            href="http://linkedin.com/"
                                            target="_blank"
                                        >
                                            <img src="aboutus/linkd.png" />
                                        </a>
                                        <h4>Jahan Ara S</h4>
                                        <span>UI UX Designer</span>
                                        <b>About:</b>
                                        <p>
                                            Dummy text, this text will be
                                            updated once I get the content. This
                                            is just a dummy text. Lorem ipsum
                                            dorem. sit imet ejfe kjfej jfedummy
                                            text doesn’t mean anything so stop
                                            reading. Content will be updated
                                            okay, great design Jahan Ara!
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* <div
                        className="container-xl"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <div className="getStart">
                            <div className="row">
                                <div className="col-lg-8 col-md-7">
                                    <p>
                                        Want to join our enthusiastic team and
                                        help in creating a great product?
                                    </p>
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <a href="#">We’re Hiring</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div
                        className="container-xl"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <div className="about-banner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img src="aboutus/aboutBanner.png" alt="aboutbanner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </WebBase>

                <Helmet>
                    <link rel="stylesheet" href="aboutus/css/aboutus.css" />
                    <title>Procezo : About Us</title>
                </Helmet>
            </>
        );
    }
}

export default HomeContainer;
