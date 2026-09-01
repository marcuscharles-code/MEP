import { useParams, useNavigate } from "react-router-dom";
import '../assets/css/ServicesPage.css'
import weldhead from '../assets/images/weldhead.webp';
import pipe from '../assets/images/pipe.webp';
import equipment from '../assets/images/equipment.webp'
import globalimg from '../assets/images/globalimg.webp'
import technicalSupport from '../assets/images/technicalSupport.webp'
import manpower from '../assets/images/manpower.webp'


const serviceDetails = {
  "mechanical-hvac": {
    title: "Mechanical & HVAC",
    description: "We provide complete mechanical and HVAC solutions for residential, commercial, industrial, and institutional facilities. Our services cover air-conditioning installation, split and VRF/VRV systems, central air-conditioning, chillers, AHU and FCU systems, ductwork, ventilation, extract systems, refrigeration, cold rooms, pumps, and mechanical equipment installation. We combine proper system selection, professional installation, testing, and commissioning to deliver efficient, reliable, and comfortable environments. Our preventive maintenance services also help extend equipment life, reduce energy consumption, minimize unexpected failures, and maintain consistent system performance.",
    img: weldhead,
  },
  "electrical-services": {
    title: "Electrical Services",
    description: "We deliver reliable electrical engineering and installation services designed to provide safe, efficient, and dependable power throughout a facility. Our services include building electrical installations, lighting systems, power distribution, distribution boards, cable installation, earthing, lightning protection, generator installation, ATS and changeover systems, transformer-related works, electrical testing, and maintenance. We also support solar and inverter systems for improved energy reliability. Every installation is carefully planned and executed to meet project requirements, promote safety, and ensure long-term electrical performance.",
    img: pipe,
  },
  "plumbing-services": {
    title: "Plumbing Services",
    description: "Our plumbing division provides complete water supply, drainage, and sanitary solutions for modern buildings and facilities. We install cold and hot water systems, soil and waste pipework, drainage and sewage systems, water storage tanks, booster pumps, pressure systems, sanitary fittings, water treatment systems, borehole plumbing, and swimming-pool plumbing. From new installations to repairs and maintenance, our team focuses on efficient water distribution, proper drainage, leak prevention, hygiene, and dependable system performance. We deliver practical plumbing solutions that support the comfort, safety, and functionality of every facility.",
    img: equipment,
  },
  "fire-protection": {
    title: "Fire Protection",
    description: "We design, install, test, and maintain fire protection and fire alarm systems that help safeguard people, property, and critical building infrastructure. Our services include fire hydrants, fire hose reels, sprinkler systems, fire pumps, fire water tanks, fire extinguishers, fire alarm systems, smoke detectors, emergency lighting, and fire-rated installations. We approach every project with a strong focus on early detection, effective fire response, system reliability, and compliance with applicable safety requirements. Our maintenance and testing services help ensure that fire protection systems remain ready to perform when required.",
    img: technicalSupport,
  },
  "elv-building-technology": {
    title: "ELV & Building Technology",
    description: "We provide Extra Low Voltage (ELV) and smart building solutions that improve security, communication, connectivity, and facility management. Our services include CCTV surveillance, access control, intercom systems, structured cabling, data networks, public-address systems, security systems, Building Management Systems (BMS), and smart-building technologies. We integrate these systems to create connected and efficient environments that provide better visibility, control, communication, and security. Our solutions are designed around the specific operational needs of each building while allowing room for future expansion and technology upgrades.",
    img: globalimg,
  },
  "facility-maintenance": {
    title: "Facility Maintenance",
    description: "We provide dependable building maintenance and facility management services that keep essential systems operating safely, efficiently, and reliably. Our maintenance coverage includes air-conditioning and HVAC systems, generators, electrical systems, plumbing, pumps, fire protection systems, CCTV, and other building equipment. We provide preventive and corrective maintenance, routine inspections, troubleshooting, repairs, and system support to minimize downtime and extend equipment life. By taking a proactive approach to facility maintenance, we help clients maintain comfortable, safe, functional, and well-performing buildings throughout their operational life.",
    img: manpower,
  },
};

function ServicesDetails
  () {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  const handleBack = () => {
    navigate(-1);
  };


  return (

    <div className="service-detail">
      <h1>{service.title}</h1>
      <div className="con-div">
        <div className="sub-service-image">
          <img src={service.img} alt={service.title} />
        </div>
        <p>{service.description}</p>
      </div>

    </div>

  );
}

export default ServicesDetails
  ;
