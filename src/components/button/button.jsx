import styles from './button.module.css';
import { useState } from 'react';
const Button = ({outline, fill, children}) => {
  const [clicked, setClick] = useState(false);

  return(
  <button
    onMouseDown={()=> setClick(true)} 
    onMouseUp={()=> setClick(false)}
    className={`${styles.button} ${outline && styles.outline} ${fill && styles.fill} ${clicked && styles.clicked}`}>
    <div className={styles.overlay}/>
    {children}
  </button>
)}

export default Button;