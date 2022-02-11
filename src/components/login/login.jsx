import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate('/maker', {
      state: { uid: userId },
    });
  };
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login__section}>
      <Header />

      <section className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.btn__login}>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
