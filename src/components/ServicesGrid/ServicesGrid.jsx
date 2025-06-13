import styles from './ServicesGrid.module.css';

const ServicesGrid = ({ showAll = false }) => {
  const services = [
    {
      icon: (
        <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M19 7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h14z"/>
          <path d="M7 7V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"/>
          <circle cx="12" cy="14" r="2"/>
        </svg>
      ),
      title: 'Candy & Snacks',
      blurb: 'Bulk sweets and impulse treats delivered by the case.'
    },
    {
      icon: (
        <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
          <path d="m8 7 1-4h6l1 4"/>
          <path d="M9 12v1"/>
          <path d="M15 12v1"/>
          <path d="M12 12v1"/>
        </svg>
      ),
      title: 'Everyday Essentials',
      blurb: 'Paper goods, cleaning supplies, and all-purpose items.'
    },
    {
      icon: (
        <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="9" cy="12" r="1"/>
          <circle cx="15" cy="12" r="1"/>
          <path d="M8 18.5V14a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4.5"/>
          <path d="M4 12a8 8 0 1 1 16 0"/>
          <path d="M12 2v2"/>
          <path d="M12 20v2"/>
        </svg>
      ),
      title: 'Tobacco & Vapes',
      blurb: 'Cigarettes, vapes, rolling papers—age-verified at pickup.'
    },
    {
      icon: (
        <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 2h12l3 7H3l3-7z"/>
          <path d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"/>
          <path d="M10 14h4"/>
        </svg>
      ),
      title: 'Apparel',
      blurb: 'T-shirts, hoodies, and seasonal workwear at wholesale prices.'
    },
    {
      icon: (
        <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="8" cy="21" r="1"/>
          <circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L21 8H6"/>
          <path d="M7 13h10l1-5H6l1 5z"/>
        </svg>
      ),
      title: 'Convenience-Store Mix',
      blurb: 'Hot-sellers for c-stores, from batteries to energy shots.'
    },
    {
      icon: (
        <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
          <path d="M15 18H9"/>
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/>
          <circle cx="8" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
        </svg>
      ),
      title: 'Local Delivery',
      blurb: 'Same-day pallet delivery within the greater Milwaukee area.'
    }
  ];

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <div className={styles.servicesGrid}>
      {displayedServices.map((service, index) => (
        <div key={index} className={styles.serviceCard} data-aos="fade-up" data-aos-delay={index * 100}>
          <div className={styles.serviceIcon}>
            {service.icon}
          </div>
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <p className={styles.serviceBlurb}>{service.blurb}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid; 