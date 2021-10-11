import styles from './select-service.module.css';
import { useContext } from 'react';
import { FormContext } from '../../form-state/form.context';
import { setAService } from '../../form-state/form.actions';

const SelectService = () => {
  const {service, dispatch} = useContext(FormContext)

  const handleClick = val => {
    dispatch(setAService(val))
  }

  return (
    <section className={styles.container}>

      <h3 className={styles.header}>Select a service</h3>
      
      <div className={styles.services}>
        <div onClick={()=>handleClick('air')} className={`${styles.service} ${service === 'air' && styles.active}`}>
          Air Freight
          <div className={styles.icon}><i className="fas fa-plane"></i></div>
        </div>

        <div onClick={()=>handleClick('sea')} className={`${styles.service} ${service === 'sea' && styles.active}`}>
          Sea Freight
          <div className={styles.icon}><i className="fas fa-ship"></i></div>
        </div>

        <div onClick={()=>handleClick('inland')} className={`${styles.service} ${service === 'inland' && styles.active}`}>
          Inland <br /> (Truck & Barge)
          <div className={styles.icon}><i className="fas fa-truck-moving"></i></div>
        </div>

        <div onClick={()=>handleClick('customs')} className={`${styles.service} ${service === 'customs' && styles.active}`}>
          Customs <br /> Clearance
          <div className={styles.icon}><i className="fas fa-user-nurse"></i></div>
        </div>
      </div>
    </section>
  )
}

export default SelectService;