import styles from "./index.module.scss";

const CardWhite = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="./public/img/friends.png" alt="" />
      <div className={styles.Box_card_white}>
        <div className={styles.Box_title}>
          <span className={styles.separator}></span>
          <p className={styles.travel_titlte}>Viagens Nacionais</p>
        </div>
        <div>
          <h2 className={styles.title_lg}>Curta uma nova vibe entre amigos</h2>
        </div>
        <div>
          <p className={styles.travel_text}>
            Rachando a conta ou rachando o bico, a melhor hora pra curtir é
            entre amigos. Conheça nossos{" "}
            <span className={styles.bold}>Planos Multi.</span>
          </p>
        </div>
        <div>
          <button className={styles.btn}>Agendar</button>
        </div>
      </div>
    </div>
  );
};

export default CardWhite;
