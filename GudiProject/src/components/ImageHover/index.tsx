import styles from "./index.module.scss";


const ImageHover = () => {
  return (
      <div className={styles.container}>
        <div className={styles.Box_img}>
          <img src="./public/img/cristoredentor.png" alt="Imagem do cristo redentor" />
          <button className={styles.btn_state}>Rio de Janeiro</button>
        </div>
        <div className={styles.Box_img}>
          <img src="./public/img/two-friends.png" alt="imagem de duas amigas na praia se divertindo" />
          <button className={styles.btn_state}>Rio das Ostras</button>
        </div>
        <div className={styles.Box_img}>
          <img src="./public/img/boy.png" alt="imagem de um garoto em uma tirolesa" />
          <button className={styles.btn_state}>Caldas Novas</button>
        </div>
        <div className={styles.Box_img}>
          <img src="./public/img/woman.png" alt="imagem de uma mulher" />
          <button className={styles.btn_state}>Amazônia</button>
        </div>
      </div>
  );
};

export default ImageHover;
