import styles from "./index.module.scss";

const SectionBenefit = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content_text}>
        <span>use a hashtag #brasilisverigudi</span>
        <h3>Nosso mural de Experiências</h3>
      </div>
      <div className={styles.section_img}>
        <figure>
          <img src="./public/img/father.png" alt="Um pai brincando com seu filho bebê" />
        </figure>
        <figure>
          <img src="./public/img/friends-jump.png" alt="Amigos pulando em uma pedra" />
        </figure>
        <figure>
          <img src="./public/img/selfie-man-and-dog.png" alt="Homem tirando uma selfie com seu cachorro" />
        </figure>
      </div>
      <div className={styles.section_img}>
        <figure>
          <img src="./public/img/selfie-man.png" alt="Selfie de um homem" />
        </figure>
        <figure>
          <img src="./public/img/woman-bici.png" alt="Mulher andando de bicicleta" />
        </figure>
        <figure>
          <img src="./public/img/womans.png" alt="Mulheres amigas tirando uma foto juntas" />
        </figure>
      </div>
      <div className={styles.box_info}>
        <div className={styles.box_icon_grey}>
          <img src="./public/img/icon-coco.svg" alt="Icon de um coco" />
          <h5>O melhor do Brasil</h5>
        </div>
        <div className={styles.box_icon_blue}>
          <img src="./public/img/icon-1.svg" alt="Icon de uma cidade" />
          <h5 className={styles.title_city}> Cidades mais bem frequentadas</h5>
        </div>
        <div className={styles.box_icon_grey}>
          <img src="./public/img/icon-location.svg" alt="Icon localização" />
          <h5> Pontos Turisticos</h5>
        </div>
        <div className={styles.box_icon_blue}>
          <img src="./public/img/icon-2.svg" alt="Icon cárdapio" />
          <h5>Restaurantes</h5>
        </div>
      </div>
    </section>
  );
};

export default SectionBenefit;
