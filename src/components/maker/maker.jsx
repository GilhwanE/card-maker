import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService, cardRepository }) => {
  // preview , editor에 뿌려줄 데이터를 정해야한다. preview와 editor의 상위컴포넌트이기 때문에 여기에 작성
  // 일단 useState에 수동적으로 object들을 만든다.
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  });
  //cards 콜백인자
  useEffect(() => {
    if (!userId) {
      return;
    } else {
      const stopSync = cardRepository.syncCards(userId, (cards) => {
        setCards(cards);
      });

      return () => {
        stopSync();
      };
    }
  }, [userId]);

  const CreateOrUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards }; // 기존에 있는 cards를 복사
      updated[card.id] = card; // 업데이트에 있는 id 키를 이용하여 그 오브젝트 전체를 card로 변경
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deletedCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards }; // 기존에 있는 cards를 복사
      delete updated[card.id]; // 업데이트에 있는 id 키를 이용하여 그 오브젝트 전체를 card로 변경
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={CreateOrUpdate}
          updateCard={CreateOrUpdate}
          deletedCard={deletedCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
