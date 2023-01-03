import styles from "./index.module.scss";

interface IpropsCard {
  img: string;
  title:string;
  text:string;
}

const CardBlue = (props:IpropsCard) => {
  const {img, title, text} = props;
  return (
    <div className={styles.container}>
        <img className={styles.img} src={img} alt="" />
    <div className={styles.Box_card_blue}>
      <div className={styles.Box_title}>
        <span className={styles.separator}></span>
        <p className={styles.travel_titlte}>Viagens Nacionais</p>
      </div>
      <div>
        <h2 className={styles.title_lg}>{title}</h2>
      </div>
      <div>
        <p className={styles.travel_text}>{text}</p>
      </div>
      <div>
        <button className={styles.btn}>Agendar</button>
      </div>
    </div>
    </div>
  );
};

export default CardBlue;
