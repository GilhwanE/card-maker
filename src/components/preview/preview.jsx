import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Pre view </h1>
      <ul className={styles.list}>
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
