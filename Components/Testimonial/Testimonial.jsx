import React from 'react';
import styles from './Testimonial.module.css';

const testimonials = [
  {
    name: 'Rahul Singh',
    designation: 'Business Development Associate at FlytBase',
    message:
      'Basil showed discipline and clear thinking. His balanced approach of creativity and technical skill makes him effective across multiple domains.',
  },
  {
    name: 'Neel Sharma',
    designation: 'Solutions Engineer Lead at FlytBase',
    message:
      'Basil’s detail-oriented approach and technical skills created outstanding websites. His structured thinking and commitment to mastering new skills inspired our entire team.',
  },
  {
    name: 'Utsav Chopra',
    designation: 'Head of Product Marketing, Uniqkey',
    message:
      'Basil has the perfect mix of skills for startups – turning website visitors into customers and creating smart growth strategies.',
  },
  {
    name: 'Kaushal Kulkarni',
    designation: 'Business Development Manager, FlytBase',
    message:
      'Basil implemented a CRM workflow that boosted our team’s efficiency by 50%. His ideas are always backed by solid research.',
  },
  {
    name: 'Daanesh Bhathena',
    designation: 'Founder at Weave Studios',
    message:
      'Basil breaks down complex marketing concepts into actionable steps. His technical skills pushed our team to higher standards.',
  },
  {
    name: 'Ashraful',
    designation: 'Manager at Kalfoot Inc',
    message:
      'Basil excels at turning complex tech products into clear, effective web experiences.',
  },
];

const Column = ({ items, direction }) => {
  return (
    <div className={`${styles.column} ${styles[direction]}`}>
      <div className={styles.scroll}>
        {[...items, ...items].map((item, idx) => (
          <div className={styles.card} key={idx}>
            <p className={styles.message}>“{item.message}”</p>
            <div className={styles.profile}>
              <img
                src={`https://i.pravatar.cc/48?img=${(idx % 10) + 1}`}
                alt={item.name}
                className={styles.avatar}
              />
              <div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.designation}>{item.designation}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  const chunked = [
    testimonials.slice(0, 5),
    testimonials.slice(1, 6),
    testimonials.slice(0, 5),
  ];

  return (
    <div className={styles.container}>
      <Column items={chunked[0]} direction="up" />
      <Column items={chunked[1]} direction="down" />
      <Column items={chunked[2]} direction="up" />
    </div>
  );
};

export default Testimonial;
