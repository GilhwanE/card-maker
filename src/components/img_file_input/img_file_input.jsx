import React from 'react';
import { useRef } from 'react/cjs/react.development';
import ImageUploader from '../../service/image_uploader';
import styles from './img_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click(); // input을 클릭한것과 같은 효과를 보여주기 위함 why?? input에 style을 주는것이 한계가 있기 때문에
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.orignal_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef} // button이 클릭되면 input이 클릭되는 것처럼 보여야함 그래서 ref설정
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
