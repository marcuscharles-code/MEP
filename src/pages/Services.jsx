import '../assets/css/Services.css';
import { Link } from 'react-router-dom';
import wellheadIcon from '../assets/images/wellheadIcon.png';
import PipeInspection from '../assets/images/PipeInspection.png';
import maintainanceIcon from '../assets/images/maintainanceIcon.png';
import waste from '../assets/images/waste.png';
import globalP from '../assets/images/globalP.png';
import manPower from '../assets/images/manPower.png';

export default function Services() {
  const services = [
    { id: 1, icon: wellheadIcon, url: '/', title: 'Mechanical', subtitle: '& HVAC', description: 'HVAC, refrigeration, ventilation, ductwork and mechanical equipment installation.' },
    { id: 2, icon: PipeInspection, url: '/', title: 'Electrical', subtitle: 'Services', description: 'Electrical installation, lighting, power distribution, generators and testing services.' },
    { id: 3, icon: maintainanceIcon, url: '/', title: 'Plumbing', subtitle: 'Services', description: 'Water supply, drainage, sewage, pumps and sanitary plumbing solutions.' },
    { id: 4, icon: waste, url: '/', title: 'Fire', subtitle: 'Protection', description: 'Fire hydrants, sprinklers, alarms, extinguishers and fire protection systems.' },
    { id: 5, icon: globalP, url: '/', title: 'ELV', subtitle: 'Systems', description: 'CCTV, access control, structured cabling, intercom and smart building systems.' },
    { id: 6, icon: manPower, url: '/', title: 'Facility', subtitle: 'Maintenance', description: 'Maintenance for HVAC, generators, electrical, plumbing and building systems.' }
  ];

  return (
    <section className='services'>
      <span></span>
      <div className='services-heading'>
        <h2>Our <mark>Services</mark></h2>
        <p>MEP Engineering, Construction & Facility Services</p>
      </div>
      <div className='services-container'>
        {services.map((service) => (
          <div key={service.id} className='service-item'>
            <Link to={service.url}>
              <mark>{service.title}</mark> {service.subtitle}
            </Link>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
