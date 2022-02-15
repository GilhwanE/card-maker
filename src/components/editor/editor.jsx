import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_editor_form/card_editor_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deletedCard }) => {
  return (
    <>
      <section className={styles.editor}>
        <h1> Card Main </h1>
        {Object.keys(cards).map((key) => (
          <CardEditForm
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deletedCard={deletedCard}
          />
        ))}
        <CardAddForm onAdd={addCard} />
      </section>
    </>
  );
};

export default Editor;
