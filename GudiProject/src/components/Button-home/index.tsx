import styles from './index.module.scss';

interface IProps {
  textButton:string;
}

const Button = (props: IProps) => {
  const {textButton} = props;
  return (
    <button className={styles.button}>{textButton}</button>
  )
}

export default Button;