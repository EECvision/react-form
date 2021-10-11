import Button from '../button/button';
import SearchBar from '../searchbar/searchbar';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../../form-state/form.context';
import { setSubmit } from '../../form-state/form.actions';

const Navbar = () => {
  const { submit } = useContext(FormContext);
  const { dispatch } = useContext(FormContext);

  return (
    <>
      {
        !submit
          ?
          <div className={styles.navbarContainer}>
            <div className={styles.logo_search_}>
              <Link to="/">
                <div className={styles.logo}>send FREIGHT</div>
              </Link>
              <SearchBar />
            </div>

            <div className={styles.link}>
              <Button outline>Request Quote</Button>
              <Button fill>Book Shipment</Button>
            </div>
          </div>
          :
          <div className={styles.navbarContainer}>
            <div className={styles.logo_search_}>
              <Link to="/" onClick={()=> dispatch(setSubmit(false))}>
                <div className={styles.logo}>send FREIGHT</div>
              </Link>
            </div>
          </div>
      }
    </>
  )
}

export default Navbar