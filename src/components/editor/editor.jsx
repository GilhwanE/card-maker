import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard }) => {
  return (
    <>
      <section className={styles.editor}>
        <h1> Card Main </h1>
        {cards.map((card) => (
          <CardEditForm card={card} key={card.id} />
        ))}
        <CardAddForm onAdd={addCard} />
      </section>
    </>
  );
};

export default Editor;
