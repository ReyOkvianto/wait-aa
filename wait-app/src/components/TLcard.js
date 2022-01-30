import React from 'react';
import style from './TLcard.module.css';


const TLcard = ({Destination,Title,Image,PostContent,Tags}) => {
    return(
        <div className={style.card}>
            <h1>{Destination}</h1>
            <p>{Title}</p>
            <img src= {Image} alt="" width = "200" height = "200"></img>
            <p>{PostContent}</p>
            <p>{Tags}</p>
        </div>
    );
}

export default TLcard;