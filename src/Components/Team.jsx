import React from 'react'

const Team = () => {

    const TeamPics ={
        firstPerson: "https://img.freepik.com/free-photo/bussiness-people-working-team-office_1303-22863.jpg?semt=ais_hybrid&w=740",
        secondPerson: "https://img.freepik.com/free-photo/confident-business-team-with-leader_1098-3228.jpg?semt=ais_hybrid&w=740",
        thirdPerson: "https://img.freepik.com/premium-photo/two-smiling-businessmen-shaking-hands-while-standing-office_109710-1799.jpg",
        forthPerson: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3A7JSlWA0SnnsOjya8qdnlkwbA8PDgAGJYG77jwFlIGEKxt7y9GzvP3BdzKICZGydCA&usqp=CAU",
    }
    return (
        <div>
            {/* Team Section */}
            <div className="w3-container" style={{ padding:"128px 16px"}} id="team">
                <h3 className="w3-center">THE TEAM</h3>
                <p className="w3-center w3-large">The ones who runs this company</p>
                <div className="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}
>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={TeamPics.firstPerson} alt="John" style={{ width:"100%"}}/>
                                <div className="w3-container">
                                    <h3>John Doe</h3>
                                    <p className="w3-opacity">CEO & Founder</p>
                                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                                </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={TeamPics.secondPerson} alt="Jane" style={{ width:"100%"}}/>
                                <div className="w3-container">
                                    <h3>Anja Doe</h3>
                                    <p className="w3-opacity">Art Director</p>
                                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                                </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={TeamPics.thirdPerson} alt="Mike" style={{ width:"100%"}}/>
                                <div className="w3-container">
                                    <h3>Mike Ross</h3>
                                    <p className="w3-opacity">Web Designer</p>
                                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                                </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img src={TeamPics.forthPerson} alt="Dan" style={{ width:"100%"}}/>
                                <div className="w3-container">
                                    <h3>Dan Star</h3>
                                    <p className="w3-opacity">Designer</p>
                                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                                    <p><button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team