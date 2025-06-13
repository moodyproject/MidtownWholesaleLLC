const About = () => {
  return (
    <div style={{ paddingTop: '4.5rem' }}>
      {/* Hero Section */}
      <section 
        className="section gradient-bg-2" 
        style={{
          color: 'white',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 className="section-title" style={{ color: 'white' }} data-aos="fade-up">
            About Midtown Wholesale LLC
          </h1>
          <p className="section-subtitle" style={{ color: 'white', opacity: 0.95 }} data-aos="fade-up" data-aos-delay="100">
            Family-owned and Milwaukee-proud since day one
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" style={{ background: 'var(--surface-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" data-aos="fade-up">Our Story</h2>
            <div 
              style={{ 
                fontSize: '1.25rem', 
                lineHeight: '1.8', 
                color: 'var(--text-secondary)',
                marginBottom: '3rem'
              }}
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <p>
                Midtown Wholesale LLC began as a single-bay storage venture and grew through honesty, 
                integrity, and hard work. Family-owned and Milwaukee-proud, we pair Midwestern values 
                with modern logistics so our customers always receive the inventory they need—on time 
                and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Our Values</h2>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            <div 
              className="card"
              style={{
                padding: '2.5rem',
                textAlign: 'center'
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '1.5rem',
                color: 'var(--accent-purple)'
              }}>
                <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Trust & Integrity</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We build lasting relationships through honest communication and reliable service.
              </p>
            </div>

            <div 
              className="card"
              style={{
                padding: '2.5rem',
                textAlign: 'center'
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '1.5rem',
                color: 'var(--accent-blue)'
              }}>
                <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Family Values</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                As a family-owned business, we treat every customer like part of our extended family.
              </p>
            </div>

            <div 
              className="card"
              style={{
                padding: '2.5rem',
                textAlign: 'center'
              }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '1.5rem',
                color: 'var(--accent-teal)'
              }}>
                <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Modern Efficiency</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We combine traditional Midwestern work ethic with cutting-edge logistics technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: 'var(--surface-primary)', textAlign: 'center' }}>
        <div className="container">
          <div data-aos="fade-up">
            <h2 className="section-title">Ready to Work Together?</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Let's discuss how we can meet your wholesale distribution needs
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/services" className="btn btn-primary">
                View Our Services
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 