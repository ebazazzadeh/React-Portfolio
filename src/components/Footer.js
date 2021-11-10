import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from "react-share";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">

                        <div className="d-flex">
                            <p>Washington, Seattle </p>
                        </div>

                        {/* <div className="d-flex">
                            <p>ebazazzadeh@gmail.com </p>
                        </div> */}

                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">About Me</a>
                                <br />
                                <a className="footer-nav">Projects</a>
                                <br />
                                <a className="footer-nav">contacts</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/ebazazzadeh"}
                                quote={"FullStack Developer"}
                                hashtag="#React"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"https://github.com/ebazazzadeh"}
                                quote={"FullStack Developer"}
                                hashtag="#React"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>

                            <RedditShareButton
                                url={"https://github.com/ebazazzadeh"}
                                quote={"FullStack Developer"}
                                hashtag="#React"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>

                            <LinkedinShareButton
                                url={"https://github.com/ebazazzadeh"}
                                quote={"FullStack Developer"}
                                hashtag="#React"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; Elham Bazazzadeh | All Right Reserved
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;