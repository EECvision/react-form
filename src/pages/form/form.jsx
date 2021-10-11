import React from 'react';
import AdditionalServices from '../../components/additional-services/additional-services';
import Button from '../../components/button/button';
import CargoDetails from '../../components/cargo-detail/cargo-details';
import SelectLocation from '../../components/select-location/select-location';
import SelectService from '../../components/select-service/select-service';
import styles from './form.module.css';
import { Link } from 'react-router-dom';
import { FormContext } from '../../form-state/form.context';
import { useContext } from 'react';
import { setSubmit } from '../../form-state/form.actions';

const Form = () => {
  
  const { dispatch } = useContext(FormContext);

  return (
    <div className={styles.formContainer}>
      <Link to="/">
        <div className={styles.arrow}><i className="fas fa-arrow-left"></i></div>
      </Link>
      <header className={styles.formHeader}>
        <h2 className={styles.title}>New Booking</h2>
        <p className={styles.description}>Fill in the information below to get a quote or create booking</p>
      </header>
      <SelectService />
      <SelectLocation />
      <CargoDetails />
      <AdditionalServices />
      <div className={styles.submitBtn}>
        <Link to="/form/submit" onClick={()=> dispatch(setSubmit(true))}>
          <Button fill >Submit</Button>
        </Link>
      </div>
    </div>
  )
}

export default Form;