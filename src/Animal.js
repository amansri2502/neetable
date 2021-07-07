import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import gallery from './gallaryData';
import { useHistory } from 'react-router-dom';

function Animal(props) {
    const [data] = useState(gallery);
    const [catagory, setCatagory] = useState(props.match.params.name);
    const history = useHistory();
    const changeCategory = (value) => {
        if (value === "All") {
          setCatagory('');
        } else {
          setCatagory(value);
        }
      }

      const resetCategory=()=>{
        history.push(`/`);
      }

      useEffect(() => {
        const { match } = props;
        const { params } = match;
        changeCategory(params.name);   
      }, [props]);


    return (
        <div className={styles.containerBackground}>
            <div className={styles.buttonBorder}>
                <p className={styles.title}>{catagory?catagory:"All"}</p>
            <div className={styles.buttonContainer} onClick={resetCategory} >Back</div> 
            </div>
            <div className={styles.imageContainer}>
                {data.filter((item) => {
                    if (catagory) {
                        return item.category === catagory;
                    } else {
                        return true;
                    }
                }).map((item) => {
                    return (<img key={item.url} className={styles.image} src={item.url} alt="" />);
                })}
            </div>
        </div>
    );

}
export default Animal;
