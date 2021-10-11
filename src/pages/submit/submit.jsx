import styles from './submit.module.css';
import { FormContext } from '../../form-state/form.context';
import { useContext } from 'react';

const Submit = () => {

  const state = useContext(FormContext);
  const {
    service,
    mode,
    from,
    to,
    readyDate,
    incoterms,
    totalCargo,
    totalVolume,
    totalWeight,
    warning,
    exportForwarding,
    importCustomClearance,
    cargoInsurance,
    transportDelivery
  } = state;

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Thank you for submission</h1>

      <div className={styles.wrapper}>

        <h2 className={styles.header}>Service Means</h2>

        <div className={styles.input}>
          <div className={styles.name}>Service: </div>
          {
            service ? <div className={styles.value}>{service}</div> : <div className={styles.noValue}>nill</div>
          }        
        </div>

        <h2 className={styles.header}>Shipping Information</h2>

        <div className={styles.input}>
          <div className={styles.name}>Shipment: </div>
          {
            mode ? <div className={styles.value}>{mode}</div> : <div className={styles.noValue}>nill</div>
          }        
        </div>

        <div className={styles.input}>
          <div className={styles.name}>From (location): </div>
          {
            from ? <div className={styles.value}>{from}</div> : <div className={styles.noValue}>nill</div>
          }        
        </div>

        <div className={styles.input}>
          <div className={styles.name}>To (location): </div>
          {
            to ? <div className={styles.value}>{to}</div> : <div className={styles.noValue}>nill</div>
          }        
        </div>

        <div className={styles.input}>
          <div className={styles.name}>Ready Date: </div>
          {
            readyDate ? <div className={styles.value}>{readyDate}</div> : <div className={styles.noValue}>-- : --</div>
          }        
        </div>

        <div className={styles.input}>
          <div className={styles.name}>Incoterms: </div>
          {
            incoterms ? <div className={styles.value}>{incoterms}</div> : <div className={styles.noValue}>0</div>
          }        
        </div>

        <h2 className={styles.header}>Cargo Details</h2>

        <div className={styles.input}>
          <div className={styles.name}>Total Cargo: </div>
          {
            totalCargo ? <div className={styles.value}>{totalCargo}</div> : <div className={styles.noValue}>0</div>
          }        
        </div>

        <div className={styles.input}>
          <div className={styles.name}>Total Volume: </div>
          {
            totalVolume ? <div className={styles.value}>{totalVolume}</div> : <div className={styles.noValue}>0</div>
          }        
        </div>

        <div className={styles.input}>
          <div className={styles.name}>Total Weight: </div>
          {
            totalWeight ? <div className={styles.value}>{totalWeight}</div> : <div className={styles.noValue}>0</div>
          }        
        </div>

        <div className={styles.input}>
          <div className={styles.name}>Dangerous Cargo: </div>
          {
            warning ? <div className={styles.value}>{warning && 'yes'}</div> : <div className={styles.noValue}>no</div>
          }        
          </div>

        <h2 className={styles.header}>Additional Services</h2>

        <div className={styles.input}>
          <div className={styles.name}>Export Forwarding: </div>
          {
            exportForwarding ? <div className={styles.value}>{exportForwarding && 'yes'}</div> : <div className={styles.noValue}>no</div>
          }
        </div>

        <div className={styles.input}>
          <div className={styles.name}>Import Custom Clearance: </div>
          {
            importCustomClearance ? <div className={styles.value}>{importCustomClearance && 'yes'}</div> : <div className={styles.noValue}>no</div>
          }
        </div>

        <div className={styles.input}>
          <div className={styles.name}>Cargo Insurance: </div>
          {
            cargoInsurance ? <div className={styles.value}>{cargoInsurance && 'yes'}</div> : <div className={styles.noValue}>no</div>
          }
        </div>

        <div className={styles.input}>
          <div className={styles.name}>Transport Delivery: </div>
          {
            transportDelivery ? <div className={styles.value}>{transportDelivery && 'yes'}</div> : <div className={styles.noValue}>no</div>
          }
        </div>

      </div>
    </div>
  )
}

export default Submit;