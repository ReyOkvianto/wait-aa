import React from 'react';
import style from './TLcard.module.css';


const TLcard = ({Title,Image,PostContent,Tags}) => {
    return(
        <div className={style.card}>
            <h1 className={style.title}>"{Title}"</h1>
            <img src= {Image} className={style.image}></img>
            <p className={style.content}>~ {PostContent}</p>
        </div>
    );
}

export default TLcard;