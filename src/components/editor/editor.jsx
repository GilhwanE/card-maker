import React from 'react';
import CardEditForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <>
      <section className={styles.editor}>
        <h1> Card Main </h1>
        {cards.map((card, index) => (
          <CardEditForm card={card} key={index} />
        ))}
      </section>
    </>
  );
};

export default Editor;
