// import React from 'react'

// const Work = () => {

//     const WorkImage = {
//         image1: "https://m.media-amazon.com/images/I/51-YL8E2zYL._AC_UF894,1000_QL80_.jpg",
//     };

//     function OpenImage() {
//         console.log("Open Image Function");
//     }

//     return (
//         <div>
//             {/* Work Section */}
//             <div className="w3-container" style={{ padding: "128px 16px" }} id="work">
//                 <h3 className="w3-center">OUR WORK</h3>
//                 <p className="w3-center w3-large">What we've done for people</p>

//                 <div className="w3-row-padding" style={{ marginTop: "64px" }}>
//                     <div className="w3-col l3 m6">
//                         <img src={WorkImage.image1} style={{ width: "100%" }}
//                             onClick={OpenImage}
//                             className="w3-hover-opacity" alt="A microphone" />
//                     </div>
//                     <div className="w3-col l3 m6">
//                         <img src={WorkImage.image1} style={{ width: "100%" }}
//                             onClick={OpenImage}
//                             className="w3-hover-opacity" alt="A phone" />
//                     </div>
//                     <div className="w3-col l3 m6">
//                         <img src={WorkImage.image1} style={{ width: "100%" }}
//                             onClick={OpenImage}
//                             className="w3-hover-opacity" alt="A drone" />
//                     </div>
//                     <div className="w3-col l3 m6">
//                         <img src={WorkImage.image1} style={{ width: "100%" }}
//                             onClick={OpenImage}
//                             className="w3-hover-opacity" alt="Soundbox" />
//                     </div>
//                 </div>

//                 <div className="w3-row-padding w3-section">
//                     <div className="w3-col l3 m6">
//                         <img src={WorkImage.image1} style={{ width: "100%" }}
//                             onClick={OpenImage}
//                             className="w3-hover-opacity" alt="A tablet" />
//                     </div>
//                     <div className="w3-col l3 m6">
//                         <img src={WorkImage.image1} style={{ width: "100%" }}
//                             onClick={OpenImage}
//                             className="w3-hover-opacity" alt="A camera" />
//                     </div>
//                     <div className="w3-col l3 m6">
//                         <img src={WorkImage.image1} style={{ width: "100%" }}
//                             onClick={OpenImage}
//                             className="w3-hover-opacity" alt="A typewriter" />
//                     </div>
//                     <div className="w3-col l3 m6">
//                         <img src={WorkImage.image1} style={{ width: "100%" }}
//                             onClick={OpenImage}
//                             className="w3-hover-opacity" alt="A tableturner" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Work
// =======================================
import React, { useState } from 'react';

const Work = () => {
    const WorkImage = {
        image1: 'https://m.media-amazon.com/images/I/51-YL8E2zYL._AC_UF894,1000_QL80_.jpg',
    };

    const [modalSrc, setModalSrc] = useState('');
    const [modalAlt, setModalAlt] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (e) => {
        setModalSrc(e.target.src);
        setModalAlt(e.target.alt);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const images = [
        { alt: 'A microphone', src: WorkImage.image1 },
        { alt: 'A phone', src: WorkImage.image1 },
        { alt: 'A drone', src: WorkImage.image1 },
        { alt: 'Soundbox', src: WorkImage.image1 },
        { alt: 'A tablet', src: WorkImage.image1 },
        { alt: 'A camera', src: WorkImage.image1 },
        { alt: 'A typewriter', src: WorkImage.image1 },
        { alt: 'A tableturner', src: WorkImage.image1 },
    ];

    return (
        <div>
            {/* Work Section */}
            <div className="w3-container" style={{ padding: '128px 16px' }} id="work">
                <h3 className="w3-center">OUR WORK</h3>
                <p className="w3-center w3-large">What we've done for people</p>

                <div className="w3-row-padding" style={{ marginTop: '64px' }}>
                    {images.map((img, index) => (
                        <div className="w3-col l3 m6" key={index}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{ width: '100%' }}
                                onClick={handleImageClick}
                                className="w3-hover-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    id="modal01"
                    className="w3-modal"
                    style={{ display: 'block', paddingTop: '100px' }}
                    onClick={closeModal}
                >
                    <span
                        className="w3-button w3-hover-red w3-xlarge w3-display-topright"
                        title="Close Modal Image"
                    >
                        &times;
                    </span>
                    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent">
                        <img id="img01" src={modalSrc} style={{ width: '85 %' }} alt={modalAlt} />
                        <p id="caption" className="w3-opacity w3-large">
                            {modalAlt}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Work;
