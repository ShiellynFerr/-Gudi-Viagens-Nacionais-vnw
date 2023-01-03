import Button from "../../components/Button-home";
import CardBlue from "../../components/Card-blue";
import CardWhite from "../../components/Card-white";
import ImageHover from "../../components/ImageHover";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_bg_img}>
        <div className={styles.content}>
          <h1 className={styles.title}>Para qual estado você deseja viajar?</h1>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Pesquisar"
            />
          </div>
          <div className={styles.box_btn}>
            <Button textButton="Buscar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
