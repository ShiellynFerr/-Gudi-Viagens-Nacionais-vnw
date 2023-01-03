import styles from './index.module.scss';

const SectionBenefit = () => {
  return (
    <section className={styles.container}>
         <div className={styles.content_text}>
          <span>use a hashtag #brasilisverigudi</span>
          <h3>Nosso mural de Experiências</h3>
         </div>
         <div className={styles.section_img}>
           <figure>
            <img src="./public/img/father.png" alt="" />
           </figure>
           <figure>
            <img src="./public/img/friends-jump.png" alt="" />
           </figure>
           <figure>
            <img src="./public/img/selfie-man-and-dog.png" alt="" />
           </figure>
         </div>
         <div className={styles.section_img}>
           <figure>
            <img src="./public/img/selfie-man.png" alt="" />
           </figure>
           <figure>
            <img src="./public/img/woman-bici.png" alt="" />
           </figure>
           <figure>
            <img src="./public/img/womans.png" alt="" />
           </figure>
         </div>
         <div className={styles.box_info}>
               <div className={styles.box_icon_grey}>
                <img src="./public/img/icon-coco.svg" alt="" />
                <h5>O melhor do Brasil</h5>
               </div>
               <div className={styles.box_icon_blue}>
                  <img src="./public/img/icon-1.svg" alt="" />
                  <h5 className={styles.title_city}> Cidades mais bem frequentadas</h5>
                </div>
               <div className={styles.box_icon_grey}>
               <img src="./public/img/icon-location.svg" alt="" />
                <h5> Pontos Turisticos</h5>
                </div>
               <div className={styles.box_icon_blue}>
               <img src="./public/img/icon-2.svg" alt="" />
               <h5>Restaurantes</h5>
                </div>
         </div>
    </section>
  )
}

export default SectionBenefit;