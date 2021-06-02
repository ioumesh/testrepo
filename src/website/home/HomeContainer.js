import React, { Component } from "react";
import Helmet from "react-helmet";
import WebBase from "../components/WebBase";
import { Link } from 'react-router-dom';

class HomeContainer extends Component {

    state = {
        firstContainerImage: "features/home/onq.png",
        secondContainerImage: "features/home/case.png",
        thirdContainerImage: "features/home/kanban.png"
    }

    firstImageChange = (e) => {
        switch (e.target.id) {
            case "a1":
                this.setState({ firstContainerImage: "features/home/onq.png" })
                break;
            case 'a2':
                this.setState({ firstContainerImage: "features/home/two.png" })
                break;
            case 'a3':
                this.setState({ firstContainerImage: "features/home/three.png" })
                break;
            case 'a4':
                this.setState({ firstContainerImage: "features/home/four.png" })
                break;
            default:
                this.setState({ firstContainerImage: "features/home/onq.png" })
        }
    }

    secondImageChange = (e) => {
        switch (e.target.id) {
            case "b1":
                this.setState({ secondContainerImage: "features/home/case.png" })
                break;
            case 'b2':
                this.setState({ secondContainerImage: "features/home/Group 269.png" })
                break;
            case 'b3':
                this.setState({ secondContainerImage: "features/home/Group 269 (1).png" })
                break;
            case 'b4':
                this.setState({ secondContainerImage: "features/home/Group 269 (2).png" })
                break;
            default:
                this.setState({ secondContainerImage: "features/home/Group 269 (3).png" })
        }
    }

    thirdImageChange = (e) => {
        switch (e.target.id) {
            case "c1":
                this.setState({ thirdContainerImage: "features/home/kanban.png" })
                break;
            case 'c2':
                this.setState({ thirdContainerImage: "features/home/List.png" })
                break;
            case 'c3':
                this.setState({ thirdContainerImage: "features/home/Gantt chart.png" })
                break;
            case 'c4':
                this.setState({ thirdContainerImage: "features/home/Calendar.png" })
                break;
            default:
                this.setState({ thirdContainerImage: "features/home/kanban.png" })
        }
    }

    render() {
        return (
            <>
                <Helmet>
                    <link rel="stylesheet" href="homepage/css/home.css" />
                    <title>Procezo</title>
                </Helmet>
                <WebBase>
                    <div className="container-xxl">
                        <div className="pricing-cls">
                            <div className="row">
                                <div
                                    className="col-lg-12"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <div className="pricing-text">
                                        <h3>
                                            procezo helps you note down your
                                        </h3>
                                        <h1 className="mb-5">
                                            ideas and track them till completion
                                        </h1>
                                        {/* <div className="text-left">
                                            <div className="input-group w-50 mx-auto emailInput" >
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Enter your email"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        className="btn btn-dark"
                                                        type="button"
                                                    >
                                                        Try Now
                                                </button>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                            </div>

                            <div className="row p-5 align-items-center justify-content-center">
                                <div
                                    className="col-xl-4  "
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <div className="mt-2">
                                        <h1>Never lose an idea again </h1>
                                        <p>Whether you are in a meeting, or in the park, pen down without missing any details whatsoever.</p>
                                        <p>Capture it in the way you want</p>
                                    </div>
                                    <div >
                                        <p id="a1" className="leftBorder" onClick={(e) => this.firstImageChange(e)}><img alt='' src="features/home/tick.png" className="pl-2 pr-2" />Create a checklist</p>
                                        <p id="a2" className="leftBorder" onClick={(e) => this.firstImageChange(e)}><img alt='' src="features/home/camera.png" className="pl-2 pr-2" />Click a picture</p>
                                        <p id="a3" className="leftBorder" onClick={(e) => this.firstImageChange(e)}><img alt='' src="features/home/brush.png" className="pl-2 pr-2" />Scribble  an errand</p>
                                        <p id="a4" className="leftBorder" onClick={(e) => this.firstImageChange(e)}><img alt='' src="features/home/mike.png" className="pl-2 pr-2" />Record your voice</p>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-6  text-right"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <img alt='' className="img-fluid" src={this.state.firstContainerImage} />
                                </div>
                            </div>

                            <div className="row p-3 text-center">
                                <div
                                    className="col-xl-12"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <h1>Transform ideas into actionables</h1>
                                    <p className="my-4">Use notes to create tasks. Anytime, anywhere.</p>
                                    <div className="row justify-content-center " >
                                        <div id="b1" className="bottomBorder p-3" onClick={(e) => this.secondImageChange(e)}><img alt='' className="p-1" src="features/home/Task.png" />Convert a note into a task</div>
                                        <div id="b2" className="bottomBorder p-3" onClick={(e) => this.secondImageChange(e)}><img alt='' className="p-1" src="features/home/boardpen.png" />Assign to the right person</div>
                                        <div id="b3" className="bottomBorder p-3" onClick={(e) => this.secondImageChange(e)}><img alt='' className="p-1" src="features/home/date 2.png" />Set deadline & priority</div>
                                        <div id="b4" className="bottomBorder p-3" onClick={(e) => this.secondImageChange(e)}><img alt='' className="p-1" src="features/home/project 1.png" />Move it to a project</div>
                                    </div>
                                    <img alt='' className="img-fluid my-4" src={this.state.secondContainerImage} />
                                </div>
                            </div>

                            <div className="row p-5 align-items-center justify-content-center">
                                <div
                                    className="col-xl-4 "
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <h1>A project to track ideas in motion</h1>
                                    <p>Track all related tasks together in projects. Toggle between project views as required</p>
                                    <div>
                                        <p id="c1" className="leftBorder" onClick={(e) => this.thirdImageChange(e)}><img alt='' src="features/home/tick.png" className="pl-2 pr-2" />Kanban</p>
                                        <p id="c2" className="leftBorder" onClick={(e) => this.thirdImageChange(e)}><img alt='' src="features/home/camera.png" className="pl-2 pr-2" />List</p>
                                        <p id="c3" className="leftBorder" onClick={(e) => this.thirdImageChange(e)}><img alt='' src="features/home/brush.png" className="pl-2 pr-2" />Gantt Chart</p>
                                        <p id="c4" className="leftBorder" onClick={(e) => this.thirdImageChange(e)}><img alt='' src="features/home/mike.png" className="pl-2 pr-2" />Calender</p>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-6 text-right "
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <img alt='' className="img-fluid" src={this.state.thirdContainerImage} />
                                </div>
                            </div>

                            <div className="row p-3 text-center">
                                <div
                                    className="col-xl-12"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <h1 >Know how far you’ve come</h1>
                                    <p className="my-4">Track progress in real time. Go from intuitive to informed decisions</p>
                                    <div className="justify-content-center" >
                                        <img alt='' className="img-fluid" src="features/home/Group 295.png" />
                                    </div>
                                </div>
                            </div>

                            <div className="row p-3 text-center">
                                <div
                                    className="col-xl-12"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <h1>Powerful features to supercharge task management</h1>
                                    <p className="my-5">Procezo is a digital workspace with several unique features that are not found elsewhere. </p>
                                    <div className="row p-3 justify-content-around">
                                        <div className="col-sm-2">
                                            <img alt='' src="features/home/pencil.png" />
                                            <h5 >Custom Fields</h5>
                                            <p>Go beyond task names and descriptions. Use custom fields to communicate structured data in your tasks</p>
                                        </div>
                                        <div className="col-sm-2">
                                            <img alt='' src="features/home/rocket.png" />
                                            <h5 >Automated Projects</h5>
                                            <p>Rid your teams from those redundant emails and clicks. </p>
                                        </div>
                                        <div className="col-sm-2">
                                            <img alt='' src="features/home/graph.png" />
                                            <h5 >Insights</h5>
                                            <p>Take informed decisions by using out of the box reports. Explore our report builder to build custom reports for yourself</p>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-5">
                                        <Link to="/features">
                                            <button type="button" className="btn btn-outline-dark p-2 mr-3">See all features</button>
                                        </Link>
                                        {/* <button type="button" className="btn btn-dark p-2 mr-3">Get a demo</button> */}
                                    </div>
                                </div>
                            </div>

                            <div className="row text-center p-5 ">
                                <div
                                    className="col-xl-12"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <h1>We are overwhelmed by the response</h1>
                                    <p className="my-5">Teams use procezo to increase productivity</p>
                                    <div className="row justify-content-center p-3">
                                        <div >
                                            <img alt='' className="img-fluid trusted-logos" src="features/home/uber.png" />
                                        </div>
                                        <div >
                                            <img alt='' className="img-fluid trusted-logos" src="features/home/dlf.png" />
                                        </div>
                                        <div >
                                            <img alt='' className="img-fluid trusted-logos" src="features/home/henkel.png" />
                                        </div>
                                        <div >
                                            <img alt='' className="img-fluid trusted-logos" src="features/home/whirlpool.png" />
                                        </div>
                                        <div >
                                            <img alt='' className="img-fluid trusted-logos" src="features/home/zomato.png" />
                                        </div>
                                    </div>
                                    <div className="align-items-center p-3 " className="my-5">
                                        <Link to="/customers">
                                            <button type="button" className="btn btn-outline-dark">Our Customers</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row p-3 align-items-center justify-content-center">


                                <div
                                    className="col-xl-4 smallCenter"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <h1>Here’s what our early adopters have to say about us</h1>
                                    <p>‘I don’t think  my team and I can back to any other task managment & productivity tools out there. Simply love how wholistic this entire thing is. THANK YOU for this! ‘</p>
                                    <button type="button" className="btn btn-dark ">
                                        <a className="nav-link" style={{ color: 'inherit' }} target="_blank" href="https://medium.com/procezo-blogs/user-story-kenko-63cf6728e162">Read Kenko’s success story</a>
                                    </button>
                                </div>
                                <div
                                    className="col-xl-6  text-right"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <img alt='' className="img-fluid" src="features/home/man.png" />
                                </div>
                            </div>

                            <div className="row border border-dark m-5 pt-5 pb-5 align-items-center justify-content-around text-center ">
                                <div
                                    className="col-lg-8 col-md-7 "
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <h1>Executing ideas has never been this streamlined</h1>
                                </div>
                                <div
                                    className=" col-lg-4 col-md-5 text-center my-auto"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <Link to="/signup">
                                        <button type="button" className="btn btn-dark p-3">Get Started now</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="row text-center p-3">
                                <div
                                    className="col-xl-12 mt-3"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <h1 className="mb-5">Get to know us better</h1>
                                    <div className="row justify-content-around">
                                        <div className="col-xl-4 text-center">
                                            <img alt='' className="img-fluid" src="features/home/blog1.png" />
                                            <h1>Must-Have Free Tools For Every Startup</h1>
                                            <p>Starting a business is tough. From office space and legal requirements to budgeting, creating content and everything in between, the workload of a startup doesn’t end, with the fear of running out of funding ever-present... </p>
                                        </div>

                                        <div className="col-xl-4 text-center">
                                            <img alt='' className="img-fluid" src="features/home/blog2.png" />
                                            <h1>Teaching and studying in the era of coronavirus</h1>
                                            <p>The current global pandemic has changed the world in the blink of an eye, forcing every sector to begin working remotely. One of the industries most hit has been the education sector, with teachers having to transition rapidly to remote teaching ... </p>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <button type="button" className="btn btn-dark">
                                            <a className="nav-link" style={{ color: 'inherit' }} target="_blank" href="https://medium.com/procezo-blogs">Read our blogs</a>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </WebBase>
            </>
        );
    }
}

export default HomeContainer;
