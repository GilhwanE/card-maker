class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file); // file이라는 인자를 받아서 upload 함수를 실행한다. // 서버에 업로드하면 그 결과값을 리턴
    data.append('upload_preset', 'docs_upload_example_us_preset');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/demo/image/upload',

      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
