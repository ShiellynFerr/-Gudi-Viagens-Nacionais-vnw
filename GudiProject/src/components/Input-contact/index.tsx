import styles from './index.module.scss';

interface IPropsInput {
  placeholder:string;
}

const Input = (props:IPropsInput) => {
  const {placeholder} = props;
  return (
  <input className={styles.input} type="text" placeholder={placeholder} />
  )
}

export default Input;