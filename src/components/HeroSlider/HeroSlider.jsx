import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import styles from './HeroSlider.module.css';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Warehouse exterior at night',
      title: 'A warehouse you can trust.',
      subtitle: 'Reliable wholesale distribution for your business needs'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Interior warehouse racking system',
      title: 'Modern Storage Solutions',
      subtitle: 'Efficient inventory management and order fulfillment'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Forklift in warehouse',
      title: 'Fast & Efficient',
      subtitle: 'Quick turnaround times for all your wholesale orders'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Packaged pallets ready for delivery',
      title: 'Ready to Ship',
      subtitle: 'Same-day delivery within the greater Milwaukee area'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=1080&fit=crop&crop=center',
      alt: 'Team of warehouse workers',
      title: 'Family-Owned & Operated',
      subtitle: 'Midwestern values with modern logistics solutions'
    }
  ];

  return (
    <div className={styles.heroSlider}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles.slideImage}
              />
              <div className={styles.slideOverlay}></div>
              <div className={styles.slideContent}>
                <div className="container">
                  <h1 className={styles.slideTitle}>{slide.title}</h1>
                  <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                  <div className={styles.slideActions}>
                    <a href="/services" className="btn btn-primary">
                      Our Services
                    </a>
                    <a href="/contact" className="btn btn-secondary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider; 