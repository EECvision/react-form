import styles from './cargo-details.module.css';
import { useState, useContext } from 'react';
import ToggleButton from '../toggle-button/toggle-button';
import { FormContext } from '../../form-state/form.context';
import { setTotalWeight, setTotalVolume, setWarning } from '../../form-state/form.actions';

const CargoDetails = () => {
  const [active, setActive] = useState('a');
  const { totalVolume, totalWeight, dispatch} = useContext(FormContext);

  const handleClick = val => {
    setActive(val)
  }

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'volume':
        dispatch(setTotalVolume(value))
        break;
      case 'weight':
        dispatch(setTotalWeight(value))
        break;
      default:
        break;
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h3>Cargo Details</h3>
        <div className={styles.warningNote}>
          <div className={styles.toggleBtn}>
            <ToggleButton handleClick={value => dispatch(setWarning(value))}/>
          </div>
          <div className={styles.warningText}>Dangerous Cargo (ex. Chemical, Battery)</div>
        </div>
      </div>

      <div>
        <div className={styles.buttons}>
          <button onClick={() => handleClick('a')} className={`${styles.button} ${active === 'a' && styles.active}`}>Total Dimensions</button>
          <button onClick={() => handleClick('b')} className={`${styles.button} ${active === 'b' && styles.active}`}>Package Details</button>
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <label htmlFor="volume">Total Volume</label>
          <input onChange={handleChange} type="number" min="0" name="volume" value={totalVolume} />
          <div className={styles.unit}>cbm</div>
        </div>

        <div className={styles.input}>
          <label htmlFor="volume">Total Weight</label>
          <input onChange={handleChange} type="number" min="0" name="weight" value={totalWeight}/>
          <div className={styles.unit}>kg</div>
        </div>
      </div>

    </section>
  )
}

export default CargoDetails;