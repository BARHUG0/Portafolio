import Image from "@components/Image.jsx";

import style from "@components/ImageWithDescription.module.css";

function ImageWithDescription({ img, text }) {
  return (
    <div className={style.normal}>
      <Image src={img.src} alt={img.alt} variant="normal" />
      <p>{text}</p>
    </div>
  );
}

export default ImageWithDescription;
