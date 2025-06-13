import { useState } from 'react';
import styles from './FAQAccordion.module.css';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What are your minimum order requirements?',
      a: 'Midtown Wholesale LLC requires a $250 per order minimum so we can extend our best wholesale pricing.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      category: 'Orders'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept cash and checks.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      category: 'Payment'
    },
    {
      q: 'Do you offer wholesale discounts for bulk orders?',
      a: 'Yes. Larger quantities unlock tiered price breaks automatically.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      category: 'Pricing'
    },
    {
      q: 'Can I place a recurring order for my business?',
      a: 'Absolutely—contact us to set up a custom recurring schedule.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 4v6h-6"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
      ),
      category: 'Orders'
    },
    {
      q: 'Do you offer bulk packaging options?',
      a: 'Select products can be repacked in larger or mixed cases on request.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      category: 'Services'
    },
    {
      q: 'Can I request a product catalog or brochure?',
      a: 'Email us and we will send a digital or printed catalog within 24 hours.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      category: 'Information'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <div className={styles.faqAccordion}>
      
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleAccordion(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <div className={styles.questionContent}>
                <div className={styles.questionIcon}>
                  {faq.icon}
                </div>
                <div className={styles.questionText}>
                  <span className={styles.category}>{faq.category}</span>
                  <span className={styles.question}>{faq.q}</span>
                </div>
              </div>
              <div className={styles.expandIcon}>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className={openIndex === index ? styles.rotated : ''}
                >
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </div>
            </button>
            
            {openIndex === index && (
              <div 
                className={styles.faqAnswer}
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className={styles.answerContent}>
                  <p>{faq.a}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className={styles.faqFooter}>
        <p className={styles.footerText}>
          Still have questions? 
          <a href="/contact" className={styles.contactLink}>Contact our team</a>
        </p>
      </div>
    </div>
  );
};

export default FAQAccordion;