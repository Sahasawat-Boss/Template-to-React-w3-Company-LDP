import React from 'react'

const Promo = () => {
    return (
        <div>
            {/* Promo Section - "We know design" */}
            <div className="w3-container w3-light-grey" style={{ padding: "128px 16px" }}>
                <div className="w3-row-padding">
                    <div className="w3-col m6">
                        <h3>We know design.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore.</p>
                        <p><a href="#work" className="w3-button w3-black"><i className="fa fa-th"> </i> View Our Works</a></p>
                    </div>
                    <div className="w3-col m6">
                        <img className="w3-image w3-round-large"
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmdzfGVufDB8fDB8fHww"
                            alt="Buildings" width="700" height="394" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo