import React from 'react'

const Navbar = () => {

function w3_open(){
    console.log("Open Function");
}


    return (
        <div>
            {/* Navbar (sit on top) */}
            <div className="w3-top">
                <div className="w3-bar w3-white w3-card" id="myNavbar">
                    <a href="#home" className="w3-bar-item w3-button w3-wide">W.CSS Template to React</a>
                    {/* Right-sided navbar links */}
                    <div className="w3-right w3-hide-small">
                        <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
                        <a href="#team" className="w3-bar-item w3-button"><i className="fa fa-user"></i> TEAM</a>
                        <a href="#work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> WORK</a>
                        <a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> PRICING</a>
                        <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
                    </div>
                    {/* Hide right-floated links on small screens and replace them with a menu icon */}

                    <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={w3_open}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar