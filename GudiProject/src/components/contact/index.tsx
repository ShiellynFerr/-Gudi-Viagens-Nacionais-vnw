import Input from '../Input-contact';
import styles from './index.module.scss';

interface IContactProps {
  cols:number;
  rows:number;
}

const Contact= (props:IContactProps) => {
  const {cols, rows} = props;
  return (
    <section className={styles.container}>
       <div className={styles.Box_Contact}>
          <h2>Fale conosco</h2>
          <Input placeholder='Digite seu melhor email' />
          <Input placeholder='Assunto' />
          <textarea className={styles.textearea} name=""></textarea>
          <button className={styles.btn}>Enviar</button>
       </div>
    </section>
  )
}

export default Contact;