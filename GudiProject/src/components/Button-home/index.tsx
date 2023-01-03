import React from 'react'
import styles from './index.module.scss';

interface Iprops {
  textButton:string;
}

const Button = (props: Iprops) => {
  const {textButton} = props;
  return (
    <button className={styles.button}>{textButton}</button>
  )
}

export default Button;