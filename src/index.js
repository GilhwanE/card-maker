import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/img_file_input/img_file_input';
import CardRepository from './service/card_repository';

// const cardRepository = new CardRespository(firebaseApp);
const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
