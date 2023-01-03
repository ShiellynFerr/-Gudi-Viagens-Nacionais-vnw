import styles from "./index.module.scss";

interface IpropsCard {
  img: string;
  title:string;
  text:string;
}

const BenefitText = (props:IpropsCard) => {
  const {img, title, text} = props;
  return (
    <div className={styles.container}>
        <img className={styles.img} src="./public/img/couple.png" alt="" />
    <div className={styles.Box_card_blue}>
      <div className={styles.Box_title}>
        <span className={styles.separator}></span>
        <p className={styles.travel_titlte}>Viagens Nacionais</p>
      </div>
      <div>
        <h2 className={styles.title_lg}>O clima perfeito, no lugar perfeito</h2>
      </div>
      <div>
        <p className={styles.travel_text}>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
      </div>
      <div>
        <button className={styles.btn}>Agendar</button>
      </div>
    </div>
    </div>
  );
};

export default BenefitText;
