import styles from './index.module.scss';

const NavBar = () => {
  return (
    <header className={styles.header}>
          <div>
            <img className={styles.logo} src="./public/img/logo-footer.svg" alt="logo" />
          </div>
          <div className={styles.box}>

            <nav className={styles.nav}>
            <ul className={styles.ul}>
                   <li><a className={styles.nav_item} href="#">Sobre</a></li>
                   <li><a className={styles.nav_item}  href="#">Beneficios</a></li>
                   <li><a className={styles.nav_item}  href="#">Contato</a></li>
                   </ul>
            </nav>
            <div>
           <button className={styles.button}>Agendar</button>
          </div>
          </div>
          
    </header>
  )
}

export default NavBar