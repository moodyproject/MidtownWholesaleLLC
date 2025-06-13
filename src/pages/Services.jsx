import ServicesGrid from '../components/ServicesGrid/ServicesGrid';

const Services = () => {
  return (
    <div style={{ paddingTop: '4.5rem' }}>
      {/* Hero Section */}
      <section 
        className="section gradient-bg-3" 
        style={{
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 className="section-title" style={{ color: 'white' }} data-aos="fade-up">
            Our Services
          </h1>
          <p className="section-subtitle" style={{ color: 'white', opacity: 0.95 }} data-aos="fade-up" data-aos-delay="100">
            Comprehensive wholesale solutions for your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: 'var(--surface-primary)' }}>
        <div className="container">
          <ServicesGrid showAll={true} />
        </div>
      </section>

      {/* Additional Info */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" data-aos="fade-up">Why Choose Midtown Wholesale?</h2>
            
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginTop: '3rem'
              }}
            >
              <div 
                className="card"
                style={{
                  padding: '2rem',
                  textAlign: 'center'
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>$250 Minimum Order</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Low minimum orders make our wholesale pricing accessible to businesses of all sizes.
                </p>
              </div>

              <div 
                className="card"
                style={{
                  padding: '2rem',
                  textAlign: 'center'
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>Same-Day Delivery</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Fast local delivery within the greater Milwaukee area gets you stocked quickly.
                </p>
              </div>

              <div 
                className="card"
                style={{
                  padding: '2rem',
                  textAlign: 'center'
                }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 style={{ color: 'var(--accent-teal)', marginBottom: '1rem' }}>Volume Discounts</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Larger orders automatically unlock better pricing tiers for maximum savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: 'var(--surface-primary)', textAlign: 'center' }}>
        <div className="container">
          <div data-aos="fade-up">
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Contact us today to discuss your wholesale needs and get a custom quote
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
              <a href="mailto:midtownwholesalewi@gmail.com" className="btn btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 