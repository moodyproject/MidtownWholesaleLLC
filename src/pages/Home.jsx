import HeroSlider from '../components/HeroSlider/HeroSlider';
import ServicesGrid from '../components/ServicesGrid/ServicesGrid';
import FAQAccordion from '../components/FAQAccordion/FAQAccordion';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      
      {/* Services Section */}
      <section className="section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From bulk candy to local delivery, we've got your wholesale needs covered
          </p>
          <ServicesGrid showAll={false} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--surface-primary)' }}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Everything you need to know about working with Midtown Wholesale LLC
          </p>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
};

export default Home; 