import React from "react";
// import Typed from "react-typed";
import square from "../img/shapes/square.png";
import circle from "../img/shapes/circle.png";
import halfCircle from "../img/shapes/half-circle.png";
import x from "../img/shapes/x.png";
import wave from "../img/shapes/wave.png";
import triangle from "../img/shapes/triangle.png";
import my from "../img/2.png";
import point2 from "../img/shapes/points2.png";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <img src={square} className="shape square" alt="" />
                <img src={circle} className="shape circle" alt="" />
                <img src={halfCircle} className="shape half-circle1" alt="" />
                <img src={halfCircle} className="shape half-circle2" alt="" />
                <img src={x} className="shape xshape" alt="" />
                <img src={wave} className="shape wave wave1" alt="" />
                <img src={wave} className="shape wave wave2" alt="" />
                <img src={triangle} className="shape triangle" alt="" />
            </div>
        </div>
    )
}

export default Header;