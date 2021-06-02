import React, { Component } from "react";
import Helmet from "react-helmet";
import WebBase from "../components/WebBase";

class GdprContainer extends Component {
    render() {
        return (
            <>
                <WebBase>
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-xl-12" data-aos="fade-up" data-aos-duration="3000">
                                <div className="headingRow">
                                    <h1>GDPR</h1>
                                </div>
                                <div className="textRow">
                                    <p>PLEASE READ THIS SOFTWARE END-USER LICENSE AGREEMENT ("AGREEMENT") CAREFULLY. BY DOWNLOADING AND/OR USING Procezo SCANNER ("LICENSED SOFTWARE"), YOU ARE AGREEING TO BE BOUND BY THE TERMS OF THIS AGREEMENT. IF YOU ACCESS THE LICENSED SOFTWARE USING YOUR PROCEZO USER ACCOUNT, YOU ARE AGREEING TO BE BOUND BY PROCEZO TERMS OF SERVICE (“PROCEZO TERMS”), IN ADDITION TO THE TERMS OF THIS AGREEMENT. IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT OR PROCEZO TERMS (WHEREVER APPLICABLE), DO NOT DOWNLOAD OR USE THE LICENSED SOFTWARE. </p>
                                </div>
                                <div className="textRow">
                                    <h3>LICENSE GRANT</h3>
                                    <p>Envigo Marketing Limited (“Procezo”) grants you a limited, non-exclusive, non-transferrable, revocable license to use the Licensed Software on an Android Phone, Tablet or other Android device that you own or control and as permitted by the Play Store Terms of Service. The terms of this Agreement will govern any upgrades provided by Procezo that replace and/or supplement the Licensed Software, unless such upgrade is accompanied by a separate agreement in which case the terms of that agreement will govern.</p>
                                </div>
                                <div className="textRow">
                                    <h3>IN APP PURCHASE</h3>
                                    <p>The use of the Licensed Software is free of charge. However, in order to access some features/functionalities of the Licensed Software, you must purchase a paid plan (“Paid Features”). While all the Paid Features are offered on a subscription basis of varying durations (“Subscription Plan”), some of the Paid Features are offered on a one-time payment basis. Payments will be processed through the Play Store from which the Licensed Software was originally downloaded and are subject to the Play Store Terms of Service. From time to time, we may change the price of any Subscription Plan, one-time fee or charge for use of any of the features that are currently available free of charge. Any increase in charges of any Subscription Plan will not apply until the expiry of your then-current billing cycle.</p>
                                </div>
                                <div className="textRow">
                                    <h3>THIRD-PARTY SOFTWARE</h3>
                                    <p>The Licensed Software may contain software which originated with third-party vendors and without limiting the general applicability of the other provisions of this Agreement, you agree that (a) the title to any third-party software incorporated in the Licensed Software shall remain with the third party which supplied the same; and (b) you will not distribute any such third party software available with the Licensed Software, in any manner.</p>
                                </div>
                                <div className="textRow">
                                    <h3>INTEGRATION WITH THIRD PARTY APPLICATIONS</h3>
                                    <p>Third-party applications may be integrated with the Licensed Software (hereinafter “Third Party Application(s)”). Access and use of the Third Party Applications may require acceptance of terms of service and privacy policies applicable to such Third Party Applications (hereinafter "Third Party Terms"). You are responsible for reading and understanding the Third Party Terms before accessing or using the Third Party Applications as part of the Licensed Software. You expressly acknowledge and agree that (i) use of Third Party Applications is at your sole risk; and (ii) Procezo shall not be responsible or liable, directly or indirectly, for any damage to or loss of data, caused or alleged to be caused by, or in connection with use of such Third Party Applications as part of the Licensed Software. </p>
                                </div>
                                <div className="textRow">
                                    <h3>RESTRICTIONS ON USE</h3>
                                    <p>In addition to all other terms and conditions of this Agreement, you shall not: (i) install one copy of the Licensed Software on more than one mobile device; (ii) remove any copyright, trademark or other proprietary notices from the Licensed Software or its copies; (iii) modify or enhance the Licensed Software; (iv) use the Licensed Software in a computer-based services business or publicly display visual output of the Licensed Software or use the Licensed Software for the benefit of any other person or entity; (v) reverse engineer, decompile or disassemble the Licensed Software; or (vi) allow any third parties to access, use or support the Licensed Software.</p>
                                </div>
                                <div className="textRow">
                                    <h3>OWNERSHIP AND INTELLECTUAL PROPERTY</h3>
                                    <p>Procezo owns all right, title and interest in and to the Licensed Software. Procezo expressly reserves all rights not granted to you herein, including the right to modify and discontinue the Licensed Software. The Licensed Software is only licensed and not sold to you by Procezo.</p>
                                </div>
                                <div className="textRow">
                                    <h3>CONFIDENTIALITY</h3>
                                    <p>The Licensed Software contains proprietary information of Procezo that are protected by the laws of the United States and you hereby agree to take all reasonable efforts to maintain the confidentiality of the Licensed Software. You agree to reasonably communicate the terms and conditions of this Agreement to those persons who come into contact with or access the Licensed Software, and to use reasonable efforts to ensure their compliance with such terms and conditions, including but not limited to, not knowingly permitting such persons to use any portion of the Licensed Software for a purpose that is not allowed under this Agreement.</p>
                                </div>
                                <div className="textRow">
                                    <h3>WARRANTY DISCLAIMER</h3>
                                    <p>Procezo does not warrant that the Licensed Software will be error-free. Except as provided herein, the Licensed Software is furnished "as is" without warranty of any kind, including the warranties of merchantability and fitness for a particular purpose and without warranty as to the performance or results you may obtain by using the Licensed Software. You are solely responsible for determining the appropriateness of using the Licensed Software and assume all risks associated with the use of it, including but not limited to the risks of program errors, damage to or loss of data, programs or equipment, and unavailability or interruption of operations.</p>
                                </div>
                                <div className="textRow">
                                    <h3>LIMITATION OF LIABILITY</h3>
                                    <p>In no event will Procezo be liable to you or any third party for any special, incidental, indirect, punitive or exemplary or consequential damages, or damages for loss of business, loss of profits, business interruption, damage to or loss of data or loss of business information arising out of the use or inability to use the program or for any claim by any other party even if Procezo has been advised of the possibility of such damages. Procezo's entire liability with respect to its obligations under this Agreement or otherwise with respect to the Licensed Software shall not exceed the amount of the license fee received by Procezo for the Licensed Software.</p>
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

export default GdprContainer;
