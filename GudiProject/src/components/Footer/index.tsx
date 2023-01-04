import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container_footer}>
      <div className={styles.Box_footer}>
        <img src="./img/logo-footer.svg" alt="" />
        <a href="#">Sobre nós</a>
        <a href="#">Mural de memórias</a>
        <a href="#">Eventos Gudi</a>
        <a href="#">Nosso blog</a>
      </div>
      <div className={styles.Box_footer}>
        <h4>Contato</h4>
        <a href="#">Chat virtual</a>
        <a href="#">SAC Online</a>
        <a href="#">Ouvidoria</a>
        <a href="#">FAQ</a>
      </div>
      <div className={styles.Box_footer}>
        <h4>Beneficios</h4>
        <a href="#">Conta digital Gudi</a>
        <a href="#">Viaje com Milhas</a>
        <a href="#">C6 Átomos</a>
        <a href="#">ID Jovem</a>
      </div>
      <div className={styles.Box_footer}>
        <h4>Lugares</h4>
        <a href="#">O melhor do Brasil</a>
        <a href="#">Cidades frequentes</a>
        <a href="#">Pontos turísticos</a>
        <a href="#">Restaurantes</a>
      </div>
      <div className={styles.Box_footer}>
        <h4>Curiosidades</h4>
        <a href="#">Cultura e tradições</a>
        <a href="#">Pratos Típicos</a>
        <a href="#">Mitos brasileiros</a>
        <a href="#">Carnaval</a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
