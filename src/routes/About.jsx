import Hero from '../pages/Hero';
import AboutPage from '../pages/AboutPage';
import useDocumentTitle from '../helpers/useDocumentTitle';
import Service from '../pages/Services';
import Counter from '../components/Counter';
import ContactBox from '../pages/ContactBox';

export default function About() {
  useDocumentTitle('About - Rick');


  return (
    <>
      <main>
        <Hero text='About Us' />
        <AboutPage isAboutPage={true} />
        <Service />
        <Counter />
        {/* <OurTeam /> */}
        {/* <LogoScroll /> */}
        <ContactBox />
      </main>
    </>
  );
}