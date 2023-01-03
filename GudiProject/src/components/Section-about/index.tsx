import CardBlue from '../Card-blue';
import CardWhite from '../Card-white';
import styles from './index.module.scss';

const SectionAbout = () => {
  return (
    <section className={styles.section_about}>
    <CardBlue img="./public/img/couple.png" title="O clima perfeito, no lugar perfeito" text="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço." />
    <CardWhite />
    <CardBlue img="./public/img/friends-beach.png" title="Algumas experiências são inexplicáveis" text="Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural." />
    </section>
  )
}

export default SectionAbout;