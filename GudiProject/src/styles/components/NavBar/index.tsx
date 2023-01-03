import Button from '../Button-home';
import styles from './index.module.scss';

const NavBar = () => {
  return (
    <div className={styles.header}>
          <div>
            <img className={styles.logo} src="./public/img/logo-footer.svg" alt="logo" />
          </div>
          <div className={styles.box}>
            <nav className={styles.nav}>
               <a className={styles.nav_item} href="#">Sobre</a>
               <a className={styles.nav_item}  href="#">Beneficios</a>
               <a className={styles.nav_item}  href="#">Contato</a>
            </nav>
            <div>
           <button>Agendar</button>
          </div>
          </div>
    </div>
  )
}

export default NavBar