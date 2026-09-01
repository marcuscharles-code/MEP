import { Helmet } from 'react-helmet-async';
import Hero from '../pages/Hero';
import useDocumentTitle from '../helpers/useDocumentTitle';
import ServicePage from '../pages/ServicePage';

export default function Service() {
  useDocumentTitle('Services - Rick');

  return (
    <>
      <Helmet>
        <title>Our Services - Rick International</title>
        <meta name="description" content="Rick International Services Ltd, a top Nigerian firm since 2009, provides reliable, cost-effective oil and gas engineering solutions, committed to quality and environmental standards." />
        <meta name="keywords" content="ser wellhead services, tubular goods, oil and gas, engineering solutions, oilfield maintenance, Rick International Services, Nigerian content, installation services, wellhead equipment, xmas tree installation, oil industry support, pipe inspection, upstream services, oilfield solutions, equipment supply, energy solutions, oil and gas Nigeria, maintenance services, oilfield innovation, premium engineering, safety compliance, reliable service, high-quality solutions, technical services, Nigerian oil sector, community engagement, project management, offshore oil, subsea services, industry standards, wellhead maintenance, global procurement, sustainable development, energy equipment, gas solutions, petroleum services, local expertise, Nigerian energy, safety policies, eco-efficiency, oilfield technology, environmental commitment, corporate responsibility, performance excellence, energy infrastructure, wellhead repair, valve repair, oilfield installation, indigenous company, Port Harcourt services, engineering expertise, construction projects, oilfield consulting, experienced professionals, oil and gas supply, trusted partners, pipeline projects, energy equipment supply, oil and gas clients, HSE compliance, wellhead parts, Nigerian market, energy sector, oilfield contractors, community-driven, corporate sustainability, eco-friendly practices, HSE policy, oil industry expertise, stakeholder engagement, engineering workforce, oil equipment rentals, oil and gas contractors, Nigeria energy sector, local business, wellhead accessories, upstream oil sector, proactive solutions, performance-driven, valve maintenance, upstream projects, Nigerian petroleum, experienced engineers, community support, project delivery, well integrity, innovative solutions, oilfield reliability, construction management, corporate values, indigenous oil company, Nigerian resources, service excellence, oilfield projects, local content policy, Nigerian partnerships, oilfield specialists, sustainable oil services, environmental stewardship, responsible oilfield operations, wellhead technology, cost-effective services, performance standards, oil industry partnerships, engineering reliability, safety measures, environmental protection, project efficiency, oil and gas excellence." />
        <meta name="author" content="Rick International" />
      </Helmet>

      <main>
        <Hero text='Services' />
        <ServicePage />
      </main>
    </>
  );
}
