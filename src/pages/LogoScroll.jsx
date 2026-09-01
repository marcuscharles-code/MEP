import '../assets/css/LogoScroll.css';
import nnpc from '../assets/images/nnpc.webp';
import shell from '../assets/images/shell.webp';
import exon from '../assets/images/exon.webp';
import addax from '../assets/images/addax.webp';
import agip from '../assets/images/agip.webp';
import pan from '../assets/images/pan.webp';
import platformpet from '../assets/images/platformpet.webp';
import npdc from '../assets/images/npdc.webp';
import oarj from '../assets/images/oarj.webp';

function LogoScroll() {
    const brandLogos = [
        { id: 1, name: "Shell", img: shell },
        { id: 2, name: "Exxon", img: exon },
        { id: 3, name: "Addax", img: addax },
        { id: 4, name: "NNPC", img: nnpc },
        { id: 5, name: "Agip", img: agip },
        { id: 5, name: "pan", img: pan },
        { id: 5, name: "platformpet", img: platformpet },
        { id: 5, name: "npdc", img: npdc },
        { id: 5, name: "oarj", img: oarj },
    ];

    return (
        <div className="scroll-container">
            <div className="brand-div">
                {brandLogos.concat(brandLogos).map((logo, index) => (
                    <div key={index} className="brand-logo">
                        <img src={logo.img} alt={logo.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogoScroll;
