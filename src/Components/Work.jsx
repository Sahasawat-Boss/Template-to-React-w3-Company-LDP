import React from 'react'

const Work = () => {

    const WorkImage = {
        image1: "https://m.media-amazon.com/images/I/51-YL8E2zYL._AC_UF894,1000_QL80_.jpg",
    }


    return (
        <div>
            {/* Work Section */}
            <div className="w3-container" style={{ padding: "128px 16px" }} id="work">
                <h3 className="w3-center">OUR WORK</h3>
                <p className="w3-center w3-large">What we've done for people</p>

                <div className="w3-row-padding" style={{ marginTop: "64px" }}>
                    <div className="w3-col l3 m6">
                        <img src={WorkImage.image1} style={{ width: "100%" }} className="w3-hover-opacity" alt="A microphone" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src={WorkImage.image1} style={{ width: "100%" }} className="w3-hover-opacity" alt="A phone" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src={WorkImage.image1} style={{ width: "100%" }} className="w3-hover-opacity" alt="A drone" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src={WorkImage.image1} style={{ width: "100%" }} className="w3-hover-opacity" alt="Soundbox" />
                    </div>
                </div>

                <div className="w3-row-padding w3-section">
                    <div className="w3-col l3 m6">
                        <img src={WorkImage.image1} style={{ width: "100%" }} className="w3-hover-opacity" alt="A tablet" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src={WorkImage.image1} style={{ width: "100%" }} className="w3-hover-opacity" alt="A camera" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src={WorkImage.image1} style={{ width: "100%" }} className="w3-hover-opacity" alt="A typewriter" />
                    </div>
                    <div className="w3-col l3 m6">
                        <img src={WorkImage.image1} style={{ width: "100%" }} className="w3-hover-opacity" alt="A tableturner" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work