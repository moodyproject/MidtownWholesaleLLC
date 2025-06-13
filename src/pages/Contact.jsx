import OrderInformation from '../components/OrderInformation/OrderInformation';

const Contact = () => {
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
            Contact Us
          </h1>
          <p className="section-subtitle" style={{ color: 'white', opacity: 0.95 }} data-aos="fade-up" data-aos-delay="100">
            Ready to discuss your wholesale needs? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section" style={{ background: 'var(--surface-primary)' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {/* Contact Card */}
            <div 
              className="card"
              style={{
                padding: '3rem 2.5rem',
                textAlign: 'center'
              }}
              data-aos="fade-up"
            >
              <h2 style={{ color: 'var(--text-primary)', marginBottom: '2.5rem' }}>Get In Touch</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginBottom: '1rem',
                  color: 'var(--accent-purple)'
                }}>
                  <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Email</h3>
                <a 
                  href="mailto:midtownwholesalewi@gmail.com"
                  style={{ 
                    color: 'var(--accent-blue)', 
                    textDecoration: 'underline',
                    fontSize: '1.1rem'
                  }}
                >
                  midtownwholesalewi@gmail.com
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginBottom: '1rem',
                  color: 'var(--accent-blue)'
                }}>
                  <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Phone</h3>
                <a 
                  href="tel:+14148288178"
                  style={{ 
                    color: 'var(--accent-blue)', 
                    textDecoration: 'underline',
                    fontSize: '1.1rem'
                  }}
                >
                  (414) 828-8178
                </a>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginBottom: '1rem',
                  color: 'var(--accent-teal)'
                }}>
                  <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Address</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
                  4830 S 10th St<br />
                  Milwaukee, WI 53221
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:midtownwholesalewi@gmail.com" className="btn btn-primary">
                  Send Email
                </a>
                <a href="tel:+14148288178" className="btn btn-secondary">
                  Call Now
                </a>
              </div>
            </div>

            {/* Map with Overlay */}
            <div 
              className="card"
              style={{
                overflow: 'hidden',
                padding: 0,
                minHeight: '600px',
                position: 'relative'
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.1234567890123!2d-87.9234567!3d42.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMilwaukee%2C%20WI!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ 
                  border: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  minHeight: '600px'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Midtown Wholesale LLC Location"
              ></iframe>
              
              {/* Map Overlay Info */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                background: 'rgba(26, 27, 35, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                maxWidth: '280px',
                zIndex: 10
              }}>
                <h3 style={{ 
                  color: 'var(--text-primary)', 
                  marginBottom: '1rem',
                  fontSize: '1.25rem'
                }}>
                  Visit Our Location
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  margin: '0 0 1rem 0',
                  lineHeight: '1.6'
                }}>
                  4830 S 10th St<br />
                  Milwaukee, WI 53221
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a 
                    href="https://maps.google.com/?q=4830+S+10th+St,+Milwaukee,+WI+53221" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: '0.9rem', padding: '0.75rem 1.25rem' }}
                  >
                    Get Directions
                  </a>
                  <a 
                    href="tel:+14148288178" 
                    className="btn btn-secondary"
                    style={{ fontSize: '0.9rem', padding: '0.75rem 1.25rem' }}
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Information Component */}
      <section className="section">
        <div className="container">
          <OrderInformation />
        </div>
      </section>
    </div>
  );
};

export default Contact; 