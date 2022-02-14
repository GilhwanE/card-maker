import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  // preview , editor에 뿌려줄 데이터를 정해야한다. preview와 editor의 상위컴포넌트이기 때문에 여기에 작성
  // 일단 useState에 수동적으로 object들을 만든다.
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Hwan',
      company: 'Google',
      theme: 'light',
      title: 'Developer',
      email: 'dyghks123@gmail.com',
      message: 'go for it',
      fileName: ' none ',
      fileURL: 'hwan.png',
    },
    {
      id: '2',
      name: 'Hwan2',
      company: 'Google',
      theme: 'dark',
      title: 'Developer',
      email: 'dyghks123@gmail.com',
      message: 'go for it',
      fileName: ' none ',
      fileURL: 'hwan.png',
    },
    {
      id: '3',
      name: 'Hwan3',
      company: 'Google',
      theme: 'colorful',
      title: 'Developer',
      email: 'dyghks123@gmail.com',
      message: 'go for it',
      fileName: ' none ',
      fileURL: null,
    },
  ]);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
