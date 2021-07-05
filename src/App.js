import React, { useState } from 'react';
import styles from './App.module.css';
import gallery from './gallaryData';




function App() {

  const [data] = useState(gallery);
  const [catagory, setCatagory] = useState('');

  const changeCategory = (value) => {
    if (value === "All") {
      setCatagory('');
    } else {
      setCatagory(value);
    }

  }


  return (
    <div className={styles.containerBackground}>
      <p className={styles.title}>Animal Gallery</p>
      <div className={styles.buttonBorder}>
        <div className={`${styles.buttonContainer} ${catagory ? '' : styles.color}`} onClick={() => { changeCategory("All") }} >All</div>
        <div className={`${styles.buttonContainer} ${catagory === 'Lion' ? styles.color : ''}`} onClick={() => { changeCategory("Lion") }} >Lion</div>
        <div className={`${styles.buttonContainer} ${catagory === 'Monkey' ? styles.color : ''}`} onClick={() => { changeCategory("Monkey") }} >Monkey</div>
        <div className={`${styles.buttonContainer} ${catagory === 'Zebra' ? styles.color : ''}`} onClick={() => { changeCategory("Zebra") }} >Zebra</div>
      </div>
      <div className={styles.imageContainer}>
        {data.filter((item) => {
          if (catagory) {
            return item.category === catagory;
          } else {
            return true;
          }
        }).map((item) => {
          return (<img className={styles.image} src={item.url} alt="" />);
        })}.
      </div>
    </div>
  );

}

export default App;