import React from 'react';
import Button from '../button/button';
import Img_file_input from '../img_file_input/img_file_input';
import styles from './card_editor_form.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_IMAGE;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileinput}>
        <Img_file_input />
      </div>

      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
