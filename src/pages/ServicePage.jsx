import { useState, useRef } from "react";
import "../assets/css/ServicesPage.css";
import weldhead from '../assets/images/weldhead.webp';
import pipe from '../assets/images/pipe.webp';
import equipment from '../assets/images/equipment.webp';
import globalimg from '../assets/images/globalimg.webp';
import technicalSupport from '../assets/images/technicalSupport.webp';
import manpower from '../assets/images/manpower.webp';

const serviceList = [
    { id: "mechanical-hvac", title: "Mechanical & HVAC", img: weldhead, description: "We provide complete mechanical and HVAC solutions for residential, commercial, industrial, and institutional facilities. Our services cover air-conditioning installation, split and VRF/VRV systems, central air-conditioning, chillers, AHU and FCU systems, ductwork, ventilation, extract systems, refrigeration, cold rooms, pumps, and mechanical equipment installation. We combine proper system selection, professional installation, testing, and commissioning to deliver efficient, reliable, and comfortable environments. Our preventive maintenance services also help extend equipment life, reduce energy consumption, minimize unexpected failures, and maintain consistent system performance." },
    { id: "electrical-services", title: "Electrical Services", img: pipe, description: "We deliver reliable electrical engineering and installation services designed to provide safe, efficient, and dependable power throughout a facility. Our services include building electrical installations, lighting systems, power distribution, distribution boards, cable installation, earthing, lightning protection, generator installation, ATS and changeover systems, transformer-related works, electrical testing, and maintenance. We also support solar and inverter systems for improved energy reliability. Every installation is carefully planned and executed to meet project requirements, promote safety, and ensure long-term electrical performance." },
    { id: "plumbing-services", title: "Plumbing Services", img: equipment, description: "Our plumbing division provides complete water supply, drainage, and sanitary solutions for modern buildings and facilities. We install cold and hot water systems, soil and waste pipework, drainage and sewage systems, water storage tanks, booster pumps, pressure systems, sanitary fittings, water treatment systems, borehole plumbing, and swimming-pool plumbing. From new installations to repairs and maintenance, our team focuses on efficient water distribution, proper drainage, leak prevention, hygiene, and dependable system performance. We deliver practical plumbing solutions that support the comfort, safety, and functionality of every facility." },
    { id: "fire-protection", title: "Fire Protection", img: technicalSupport, description: "We design, install, test, and maintain fire protection and fire alarm systems that help safeguard people, property, and critical building infrastructure. Our services include fire hydrants, fire hose reels, sprinkler systems, fire pumps, fire water tanks, fire extinguishers, fire alarm systems, smoke detectors, emergency lighting, and fire-rated installations. We approach every project with a strong focus on early detection, effective fire response, system reliability, and compliance with applicable safety requirements. Our maintenance and testing services help ensure that fire protection systems remain ready to perform when required." },
    { id: "elv-building-technology", title: "ELV & Building Technology", img: globalimg, description: "We provide Extra Low Voltage (ELV) and smart building solutions that improve security, communication, connectivity, and facility management. Our services include CCTV surveillance, access control, intercom systems, structured cabling, data networks, public-address systems, security systems, Building Management Systems (BMS), and smart-building technologies. We integrate these systems to create connected and efficient environments that provide better visibility, control, communication, and security. Our solutions are designed around the specific operational needs of each building while allowing room for future expansion and technology upgrades." },
    { id: "facility-maintenance", title: "Facility Maintenance", img: manpower, description: "We provide dependable building maintenance and facility management services that keep essential systems operating safely, efficiently, and reliably. Our maintenance coverage includes air-conditioning and HVAC systems, generators, electrical systems, plumbing, pumps, fire protection systems, CCTV, and other building equipment. We provide preventive and corrective maintenance, routine inspections, troubleshooting, repairs, and system support to minimize downtime and extend equipment life. By taking a proactive approach to facility maintenance, we help clients maintain comfortable, safe, functional, and well-performing buildings throughout their operational life." },
];

export default function ServicesPage() {
    // Desktop sidebar selection — always a valid id, never null
    const [activeId, setActiveId] = useState(serviceList[0].id);
    const activeService = serviceList.find((s) => s.id === activeId) || serviceList[0];

    // Mobile accordion — independent state, CAN be null (all closed)
    const [openId, setOpenId] = useState(null);
    const triggerRefs = useRef({});

    const toggleAccordion = (id) => {
        const isClosing = openId === id;
        setOpenId(isClosing ? null : id);

        if (!isClosing) {
            // Wait for the panel to render, then scroll the trigger into view
            requestAnimationFrame(() => {
                triggerRefs.current[id]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            });
        }
    };

    return (
        <div className="services-page">
            <div className="services-page-heading">
                <h1>Our <mark>Services</mark></h1>
                <p>Explore our full range of MEP engineering and facility solutions</p>
            </div>

            <div className="services-page-layout">
                <div className="services-list">
                    {serviceList.map((service) => (
                        <button
                            key={service.id}
                            className={`services-list-item ${activeId === service.id ? "active" : ""}`}
                            onClick={() => setActiveId(service.id)}
                        >
                            <span>{service.title}</span>
                        </button>
                    ))}
                </div>

                <div className="services-detail">
                    <div className="services-detail-image">
                        <img src={activeService.img} alt={activeService.title} />
                    </div>
                    <div className="services-detail-content">
                        <h2>{activeService.title}</h2>
                        <p>{activeService.description}</p>
                    </div>
                </div>
            </div>

            <div className="services-accordion">
                {serviceList.map((service) => (
                    <div key={service.id} className="accordion-item">
                        <button
                            ref={(el) => (triggerRefs.current[service.id] = el)}
                            className={`accordion-trigger ${openId === service.id ? "open" : ""}`}
                            onClick={() => toggleAccordion(service.id)}
                        >
                            {service.title}
                            <span className="accordion-icon">{openId === service.id ? "−" : "+"}</span>
                        </button>
                        {openId === service.id && (
                            <div className="accordion-panel">
                                <div className="accordion-image">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <p>{service.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}