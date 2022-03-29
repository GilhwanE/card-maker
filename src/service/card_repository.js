import { getDatabase, ref, set, remove, onValue } from 'firebase/database';
import { app, firebaseApp } from './firebase';

class CardRepository {
  //   constructor(app) {
  //     this.db = getDatabase(app);
  //   }

  syncCards(userId, onUpdate) {
    const db = getDatabase();
    const syncRef = ref(db, `${userId}/cards`);
    onValue(syncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => syncRef.off();
  }

  saveCard(userId, card) {
    const db = getDatabase();

    set(ref(db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards/${card.id}`);

    remove(cardRef);
  }
}

export default CardRepository;
