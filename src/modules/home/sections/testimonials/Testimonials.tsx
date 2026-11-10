import SectionHeader from '@/modules/home/components/SectionHeader';
import { TestimonialsList } from './TestimonialsList';
import { cn } from 'cn';
import styles from "./Testimonials.module.css";

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <SectionHeader>
          <SectionHeader.Title>Testimonials</SectionHeader.Title>
          <SectionHeader.EyeBrow>What people say</SectionHeader.EyeBrow>
          <SectionHeader.Description>
            Check reviews and opinions<br />
            from my colleges about my skills.
          </SectionHeader.Description>
        </SectionHeader>
        <div className={styles.testimonialsBackground}>
          <div className={cn(styles.testimonialsContainer, 'animate-move-left')}>
            {['a','b'].map((list) => (<TestimonialsList key={list} />))}
          </div>
        </div>
      </div>
    </section>
  );
};
