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
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
      />
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option defaultValue="light">light</option>
        <option defaultValue="dark">dark</option>
        <option defaultValue="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
      ></textarea>
      <div className={styles.fileinput}>
        <Img_file_input />
      </div>

      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
