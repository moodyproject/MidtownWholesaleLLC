import styles from './OrderInformation.module.css';

const OrderInformation = () => {
  const orderInfo = [
    {
      title: 'Minimum Order',
      value: '$250',
      description: 'Required minimum to unlock wholesale pricing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      color: 'var(--accent-purple)'
    },
    {
      title: 'Delivery Area',
      value: 'Greater Milwaukee',
      description: 'Fast delivery throughout the Milwaukee area',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"/>
        </svg>
      ),
      color: 'var(--accent-teal)'
    },
    {
      title: 'Response Time',
      value: 'Within 24 Hours',
      description: 'Quick turnaround on all inquiries',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      color: 'var(--accent-purple)'
    }
  ];

  return (
    <div className={styles.orderInformation}>
      <div className={styles.header}>
        <h2 className={styles.title} data-aos="fade-up">Business Information</h2>
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
          Everything you need to know about working with us
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {orderInfo.map((item, index) => (
          <div 
            key={index}
            className={styles.infoCard}
            data-aos="fade-up"
            data-aos-delay={index * 100 + 200}
          >
            <div 
              className={styles.iconContainer}
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardValue}>{item.value}</p>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection} data-aos="fade-up" data-aos-delay="600">
        <p className={styles.ctaText}>
          Ready to place an order or have questions about our services? 
          Don't hesitate to reach out – we're here to help your business succeed.
        </p>
        <a href="mailto:midtownwholesalewi@gmail.com?subject=Wholesale Inquiry" className="btn btn-primary">
          Start Your Order Today
        </a>
      </div>
    </div>
  );
};

export default OrderInformation; 