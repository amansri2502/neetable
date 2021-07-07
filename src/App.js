import React from 'react';
import styles from './App.module.css';
import { useHistory } from 'react-router-dom';




function App() {
  const history = useHistory();
  
  const goToProductDetailsPage = (name) => {
    history.push(`/${name}`);
  };

  return (
    <div className={styles.containerBackground}>
      <p className={styles.title}>Animal Gallery</p>
      <div className={styles.imageContainer}>
      <img className={styles.image} onClick={()=>goToProductDetailsPage('All')} src='https://dl.dropboxusercontent.com/s/e8dso578z1d303n/33582272%20%281%29.jpg?dl=0' alt="All" />
        <img className={styles.image} onClick={()=>goToProductDetailsPage('Lion')} src='https://images.unsplash.com/photo-1567732310772-bb589efdbb03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=20' alt="Lion" />
        <img className={styles.image} onClick={()=>goToProductDetailsPage('Zebra')} src='https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=20' alt="Zebra" />
        <img className={styles.image} onClick={()=>goToProductDetailsPage('Monkey')} src='https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=20' alt="Monkey" />
      </div>
    </div>
  );

}

export default App;