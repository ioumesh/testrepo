import React, { useEffect } from "react";
import Helmet from "react-helmet";
import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";
import * as $ from "jquery";

const WebBase = ({ children, containerClassName }) => {
    const preload = () => {
        $('body').scrollTop(0)
        // $(window).on('scroll', function (){
        //     var scroll = $(window).scrollTop();

        //     if (scroll >= 100) {
        //         $(".headerSection").addClass("sticky");
        //     } else {
        //         $(".headerSection").removeClass("sticky");
        //     }
        //  });

        $('.jquery_accordion_title').on('click', function () {
            $(this).closest('.jquery_accordion_item').siblings().removeClass('active').find('.jquery_accordion_content').slideUp(200);
            $(this).closest('.jquery_accordion_item').toggleClass('active').find('.jquery_accordion_content').slideToggle(200);
            return false;
        });
    }

    useEffect(() => {
        preload();
    }, []);


    return (
        <div>
            <div className="mainContainer">
                <WebHeader />

                <div className={containerClassName} style={{height:'calc(100vh - 95px)', marginTop:95, overflowY:'auto', overflowX:'hidden'}}>
                    {children}
                    <WebFooter />
                </div>

            </div>

            <Helmet>
                {/* <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>

                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400&display=swap"
                    rel="stylesheet"
                />

                {/* <link rel="stylesheet" href="css/style.css" /> */}
            </Helmet>
        </div>
    );
};

export default WebBase;
