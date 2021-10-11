import styles from './select-location.module.css';
import { useContext } from 'react';
import InfoIcon from '../../assets/info-icon.svg';
import { FormContext } from '../../form-state/form.context';
import {
  setFromLocation, setIncoterms, setMode, setReadyDate,
  setToLocation, setTotalCargo
} from '../../form-state/form.actions';

const SelectLocation = () => {
  const { readyDate, from, to, incoterms, mode,
    totalCargo, dispatch } = useContext(FormContext);

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value)
    switch (name) {
      case 'readyDate':
        dispatch(setReadyDate(value))
        break;
      case 'from':
        dispatch(setFromLocation(value));
        break;
      case 'to':
        dispatch(setToLocation(value));
        break;
      case 'incoterms':
        dispatch(setIncoterms(value));
        break;
      case 'totalCargo':
        dispatch(setTotalCargo(value));
        break;
      default:
        break;
    }
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.header}>
        <img className={styles.icon} src={InfoIcon} alt="icon" />
      </h3>

      <div className={styles.partOne}>
        <div className={styles.buttons}>
          <div onClick={() => dispatch(setMode('import'))} className={`${styles.button} ${mode === 'import' && styles.active}`}>import</div>
          <div onClick={() => dispatch(setMode('export'))} className={`${styles.button} ${mode === 'export' && styles.active}`}>export</div>
        </div>

        <div className={styles.input}>
          <label htmlFor="location">From</label>
          <input onChange={handleChange} value={from} name="from" type="text" placeholder="City or port" />
        </div>

        <div className={styles.input}>
          <label htmlFor="location">To</label>
          <input onChange={handleChange} value={to} name="to" type="text" placeholder="City or port" />
        </div>
      </div>

      <div className={styles.partTwo}>
        <div className={styles.input}>
          <label htmlFor="readyDate">Ready Date</label>
          <input onChange={handleChange} value={readyDate} name="readyDate" type="date" />
        </div>

        <div className={styles.input}>
          <label>Incoterms</label>
          <select name="incoterms" value={incoterms} onChange={handleChange}>
            <option value="one">Available Option One</option>
            <option value="two">Available Option Two</option>
            <option value="three">Available Option Three</option>
            <option value="four">Available Option Four</option>
          </select>
        </div>

        <div className={styles.input}>
          <label htmlFor="">Total Cargo value</label>
          <input onChange={handleChange} value={totalCargo} name="totalCargo" type="number" min="0" />
        </div>
      </div>


    </section>
  )
}

export default SelectLocation;