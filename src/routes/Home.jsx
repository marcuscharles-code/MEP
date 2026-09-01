import Hero from '../pages/Hero';
import { Helmet } from 'react-helmet-async';
import AboutPage from '../pages/AboutPage';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import LearnMore from '../pages/LearnMore';
import useDocumentTitle from '../helpers/useDocumentTitle';
import LogoScroll from '../pages/LogoScroll';

export default function Home() {
  useDocumentTitle('Home - MEP Engineering');

  return (
    <main>
      <Helmet>
        <title>MEP Engineering | MEP Engineering, Construction & Facility Services</title>

        <meta
          name="description"
          content="MEP Engineering provides professional mechanical, electrical and plumbing engineering services, HVAC and refrigeration, fire protection, ELV systems, engineering construction, facility management, procurement, installation, testing and commissioning."
        />

        <meta
          name="keywords"
          content="MEP Engineering, MEP engineering services, mechanical engineering, electrical engineering, plumbing engineering, HVAC services, air conditioning, refrigeration, ventilation systems, fire protection, fire alarm systems, CCTV, access control, ELV systems, building maintenance, facility management, engineering construction, engineering procurement, electrical installation, plumbing and drainage, fire safety, building services, testing and commissioning, engineering contracting, Nigeria"
        />

        <meta
          name="author"
          content="MEP Engineering"
        />

        <meta
          property="og:title"
          content="MEP Engineering | Engineering, Construction & Facility Services"
        />

        <meta
          property="og:description"
          content="Professional MEP engineering, construction and facility services delivered with quality, safety and reliability."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Hero />
      <AboutPage />
      <Services />
      <LearnMore />
      <ContactUs />
      {/* <LogoScroll /> */}
    </main>
  );
}