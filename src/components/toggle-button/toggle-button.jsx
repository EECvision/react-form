import styles from './toggle-button.module.css';
import { useEffect, useState } from 'react';

const ToggleButton = ({handleClick}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle(!toggle)
  }
  
  useEffect(()=> {
    handleClick(toggle)
  },[toggle])

  return (
    <div onClick={handleToggleClick} className={`${styles.container} ${toggle && styles.toggle}`}>
      <div className={styles.knob}/>
    </div>
  )
}

export default ToggleButton;