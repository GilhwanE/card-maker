import React from 'react';
import Button from '../button/button';
import Img_file_input from '../img_file_input/img_file_input';
import styles from './card_add_form.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const CardAddForm = ({ card }) => {
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
        placeholder={company}
      />
      <select className={styles.select} name="theme" placeholder={theme}>
        <option placeholder="light">Light</option>
        <option placeholder="dark">Dark</option>
        <option placeholder="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder={message}
      ></textarea>
      <div className={styles.fileinput}>
        <Img_file_input />
      </div>

      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
