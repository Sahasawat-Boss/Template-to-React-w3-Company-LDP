import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="w3-center w3-black w3-padding-64">
                <a href="#home" className="w3-button w3-light-grey">
                    <i className="fa fa-arrow-up w3-margin-right"></i>
                    To the top
                </a>
                <div className="w3-xlarge w3-section">
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity"></i>
                    <i className="fa fa-snapchat w3-hover-opacity"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i className="fa fa-twitter w3-hover-opacity"></i>
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                </div>
                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
            </footer>
        </div>
    )
}

export default Footer
