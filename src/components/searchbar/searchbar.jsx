import styles from './searchbar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} type="text" placeholder="search" />
      <label className={styles.searchIcon} htmlFor="search"><i className="fas fa-search"></i></label>
    </div>
  )
}

export default SearchBar;