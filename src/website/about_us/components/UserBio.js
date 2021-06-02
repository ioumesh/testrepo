import React from "react";

const UserBio = ({
    name,
    role,
    image,
    about,
    linkedin
    // socialMediaDetails = [
    //     {
    //         link: "http://linkedin.com/",
    //         image: "aboutus/linkd.png",
    //     },
    // ],
}) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="teams">
                <img src={image} align="Saurabh Kumar" alt="saurabhkumar" />
                {/* {socialMediaDetails.map((media) => ( */}
                    <a href={linkedin} target="_blank">
                        <img src="aboutus/linkd.png" />
                    </a>
                {/* ))} */}
                <h4>{name}</h4>
                <span>{role}</span>
                <b>About:</b>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default UserBio;
