import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../assets/css/Work.css";
import images from "../assets/image.json"; 

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className="pics"
            style={{ cursor: "pointer" }}
            onClick={() => handleImageClick(index)}
          >
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              className="lazy-load-image"
              effect="blur"
              width="100%"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        currentIndex={currentIndex}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          width: 3840,
          height: 2560,
        }))}
        zoom={true}
      />
    </>
  );
}











// import * as React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import '../assets/css/Work.css';

// // Import images
// import frontgate from '../assets/images/frontgate.webp';
// import tools1 from '../assets/images/tools1.webp';
// import tools2 from '../assets/images/tools2.webp';
// import tools3 from '../assets/images/tools3.webp';
// import tools4 from '../assets/images/tools4.webp';
// import tools5 from '../assets/images/tools5.webp';
// import tools6 from '../assets/images/tools6.webp';
// import tools7 from '../assets/images/tools7.webp';
// import tools8 from '../assets/images/tools8.webp';
// import tools9 from '../assets/images/tools9.webp';
// import tools10 from '../assets/images/tools10.webp';
// import tools11 from '../assets/images/tools11.webp';
// import tools12 from '../assets/images/tools12.webp';
// import tools14 from '../assets/images/tools14.webp';
// import tools15 from '../assets/images/tools15.webp';
// import warehouse from '../assets/images/warehouse.webp';
// import testbay from '../assets/images/testbay.webp';
// import exitgate from '../assets/images/exitgate.webp';
// import equipimg from '../assets/images/equipimg.webp';
// import rickinternationalservices from '../assets/images/rickinternationalservices.webp';
// import rickinternationalservices2 from '../assets/images/rickinternationalservices2.webp';
// import rickinternationalservices3 from '../assets/images/rickinternationalservices3.webp';
// import rickinternationalservices4 from '../assets/images/rickinternationalservices4.webp';
// import rickinternationalservices5 from '../assets/images/rickinternationalservices5.webp';
// import rickinternationalservices6 from '../assets/images/rickinternationalservices6.webp';
// import rickinternationalservices7 from '../assets/images/rickinternationalservices7.webp';
// import rickinternationalservices8 from '../assets/images/rickinternationalservices8.webp';
// import rickinternationalservices9 from '../assets/images/rickinternationalservices9.webp';

// export default function Gallery() {
//   const [open, setOpen] = React.useState(false);
//   const [currentIndex, setCurrentIndex] = React.useState(0);

//   const images = [
//     { src: rickinternationalservices, alt: 'Men at work' },
//     { src: rickinternationalservices2, alt: 'Men at work' },
//     { src: rickinternationalservices3, alt: 'Men at work' },
//     { src: rickinternationalservices4, alt: 'Men at work' },
//     { src: rickinternationalservices5, alt: 'Men at work' },
//     { src: rickinternationalservices6, alt: 'Men at work' },
//     { src: rickinternationalservices7, alt: 'Men at work' },
//     { src: rickinternationalservices8, alt: 'Men at work' },
//     { src: rickinternationalservices9, alt: 'Men at work' },
//     { src: frontgate, alt: "Front Gate" },
//     { src: tools1, alt: "Tools 1" },
//     { src: tools2, alt: "Tools 2" },
//     { src: tools3, alt: "Tools 3" },
//     { src: tools4, alt: "Tools 4" },
//     { src: tools5, alt: "Tools 5" },
//     { src: tools6, alt: "Tools 6" },
//     { src: tools7, alt: "Tools 7" },
//     { src: tools8, alt: "Tools 8" },
//     { src: tools9, alt: "Tools 9" },
//     { src: tools10, alt: "Tools 10" },
//     { src: tools11, alt: "Tools 11" },
//     { src: tools12, alt: "Tools 12" },
//     { src: tools14, alt: "Tools 14" },
//     { src: tools15, alt: "Tools 15" },
//     { src: warehouse, alt: "Warehouse" },
//     { src: testbay, alt: "Test Bay" },
//     { src: exitgate, alt: "Exit Gate" },
//     { src: equipimg, alt: "Equipment" },
//   ];

//   const handleImageClick = (index) => {
//     setCurrentIndex(index);
//     setOpen(true);
//   };

//   return (
//     <>
//       <div className="gallery">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="pics"
//             style={{ cursor: 'pointer' }}
//             onClick={() => handleImageClick(index)}
//           >
//             <LazyLoadImage
//               src={image.src}
//               alt={image.alt}
//               className="lazy-load-image"
//               effect="blur"
//               width="100%"
//             />
//           </div>
//         ))}
//       </div>

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         currentIndex={currentIndex}
//         slides={images.map(image => ({
//           src: image.src,
//           alt: image.alt,
//           width: 3840,
//           height: 2560,
//         }))}
//         zoom={true}
//       />
//     </>
//   );
// }