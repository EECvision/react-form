import ToggleButton from '../toggle-button/toggle-button';
import { useContext } from 'react';
import styles from './additional-services.module.css';
import { FormContext } from '../../form-state/form.context';
import { setExportForwarding, setCargoInsurance, setTransportDelivery, setImportCustom } from '../../form-state/form.actions';

const AdditionalServices = () => {
  const { dispatch } = useContext(FormContext);

  return (
    <section className={styles.container}>
      <h3 className={styles.header}>Additional Services</h3>

      <div className={styles.wrapper}>
        <div className={styles.service}>
          <div className={styles.button}>
            <ToggleButton handleClick={value => dispatch(setExportForwarding(value))} />
          </div>
          <div className={styles.text}>
            <h4 className={styles.title}>Export Forwading</h4>
            <p className={styles.description}>
              We handle customs clearance and documentation.
            </p>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.button}>
            <ToggleButton handleClick={value => dispatch(setCargoInsurance(value))} />
          </div>
          <div className={styles.text}>
            <h4 className={styles.title}>Cargo Insurance</h4>
            <p className={styles.description}>
              We handle customs clearance and documentation.
            </p>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.button}>
            <ToggleButton handleClick={value => dispatch(setImportCustom(value))} />
          </div>
          <div className={styles.text}>
            <h4 className={styles.title}>Import Customs Clearance</h4>
            <p className={styles.description}>
              We handle customs clearance and documentation.
            </p>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.button}>
            <ToggleButton handleClick={value => dispatch(setTransportDelivery(value))} />
          </div>
          <div className={styles.text}>
            <h4 className={styles.title}>Transposrt Delivery</h4>
            <p className={styles.description}>
              We handle customs clearance and documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdditionalServices;