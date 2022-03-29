import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_editor_form.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const CardEditForm = ({ FileInput, card, updateCard, deletedCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, title, email, message, theme, fileName } = card;

  const onSubmit = () => {
    deletedCard(card);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileUrl: file.url,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
        ref={companyRef}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue={theme}
        ref={themeRef}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        defaultValue={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        ref={messageRef}
        defaultValue={message}
        onChange={onChange}
      ></textarea>

      <div className={styles.fileinput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>

      <Button name="Delete" type="button" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
