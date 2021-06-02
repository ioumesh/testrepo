import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import WebBase from "../components/WebBase";

class ContactUsContainer extends Component {
    render() {
        return (
            <>
                <WebBase>
                    <div className="container-xl">
                        <div className="contact-us">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="contact-left">
                                        <h1>Contact Us</h1>
                                        <p>
                                            Looking for more information? Can’t
                                            find the answers you need in our
                                            Support Center? Just want to say hi?
                                            We’re always here to chat.
                                        </p>
                                    </div>
                                    <div className="contact-left">
                                        <h2>Support:</h2>
                                        <a href="mailto:hi@procezo.com">
                                            hi@procezo.com
                                        </a>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <div className="addressRow">
                                                <h6>London</h6>
                                                <p>+44 7448-484-149</p>
                                                <p>
                                                    7-8 Stratford Place
                                                    <br />
                                                    London W1C 1AY <br /> United
                                                    Kingdom
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <div className="addressRow">
                                                <h6>Gurugram</h6>
                                                <p>+91 99586 88955</p>
                                                <p>
                                                    Springhouse Co-Working
                                                    <br /> LG 006, Grand Mall,
                                                    <br />
                                                    Gurugram, Haryana
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="formRow">
                                        <form>
                                            <div className="form-group">
                                                <label>Full Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Company name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email Address:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id=""
                                                />
                                            </div>
                                            {/* <div className="form-group">
                                                <label>Select Category</label>
                                                <select className="form-control">
                                                    <option>Category 1</option>
                                                    <option>Category 2</option>
                                                    <option>Category 3</option>
                                                    <option>Category 4</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group">
                                                <label>
                                                    What can we help you with?
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control textareaHe"
                                                    id=""
                                                />
                                            </div>
                                            <div style={{textAlign:'center'}}>
                                                <button
                                                    type="submit"
                                                    className="btn send-message"
                                                >
                                                    Send message
                                                </button>
                                            </div>
                                        </form>
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
                                    <Link to='/signup'>
                                        Get Started now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </WebBase>

                <Helmet>
                    <title>Procezo : Contact Us</title>
                </Helmet>
            </>
        );
    }
}

export default ContactUsContainer;
