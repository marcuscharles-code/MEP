import React, { useState } from 'react';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import '../assets/css/Work.css';

// Importing all images
import frontgate from '../assets/images/frontgate.webp';
import tools1 from '../assets/images/tools1.webp';
import tools2 from '../assets/images/tools2.webp';
import tools3 from '../assets/images/tools3.webp';
import tools4 from '../assets/images/tools4.webp';
import tools5 from '../assets/images/tools5.webp';
import tools6 from '../assets/images/tools6.webp';
import tools7 from '../assets/images/tools7.webp';
import tools8 from '../assets/images/tools8.webp';
import tools9 from '../assets/images/tools9.webp';
import tools10 from '../assets/images/tools10.webp';
import tools11 from '../assets/images/tools11.webp';
import tools12 from '../assets/images/tools12.webp';
import tools14 from '../assets/images/tools14.webp';
import tools15 from '../assets/images/tools15.webp';
import warehouse from '../assets/images/warehouse.webp';
import testbay from '../assets/images/testbay.webp';
import exitgate from '../assets/images/exitgate.webp';
import equipimg from '../assets/images/equipimg.webp';
import menatwork1 from '../assets/images/menatwork1.webp';


export default function Work() {
    // Data for images and text
    const rows = [
        { img: frontgate, text: '1 Text' },
        { img: tools1, text: '2 Text' },
        { img: tools2, text: '3 Text' },
        { img: tools3, text: '4 Text' },
        { img: tools4, text: '5 Text' },
        { img: tools5, text: '6 Text' },
        { img: tools6, text: '7 Text' },
        { img: tools7, text: '8 Text' },
        { img: tools8, text: '9 Text' },
        { img: tools9, text: '10 Text' },
        { img: tools10, text: '11 Text' },
        { img: tools11, text: '12 Text' },
        { img: tools12, text: '13 Text' },
        { img: tools14, text: '14 Text' },
        { img: tools15, text: '15 Text' },
        { img: testbay, text: '16 Text' },
        { img: warehouse, text: '17 Text' },
        { img: exitgate, text: '18 Text' },
        { img: equipimg, text: '19 Text' },
    ];

    // Mapping rows to Lightbox-compatible format
    const images = rows.map((row) => ({
        src: row.img,
        title: row.text,
        description: row.text,
    }));

    // State to manage the number of images displayed
    const [visibleImages, setVisibleImages] = useState(4);

    // Function to load more images
    const loadMoreImages = () => {
        setVisibleImages((prevVisible) => Math.min(prevVisible + 4, images.length));
    };

    return (
        <section className="work">
            <div className="work-box">
                <div className="work-img-div">
                    <Lightbox
                        images={images.slice(0, visibleImages)} // Display only the visible images
                        thumbnailWidth="100%"
                        thumbnailHeight="20rem"
                    />
                </div>
            </div>
            {visibleImages < images.length && ( // Show "See More" button if there are more images
                <button onClick={loadMoreImages} className="load-more">
                    See More
                </button>
            )}
        </section>
    );
}