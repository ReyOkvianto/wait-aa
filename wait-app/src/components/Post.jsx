import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom"
import { NavigationPost } from ".";
import TLcard from './TLcard.js';


function Post() {
  
  const { state } = useLocation();
  const { Location } = state; // Read values passed on state

  const [TL, setTL] = useState([]);
  
  useEffect(() =>{
    getDbInfo();
  },[]); //REFRESH ON POST

  const getDbInfo = async () => {
    fetch('https://wait-aa-api.herokuapp.com/destination/' + Location).then(function(response) {
      return response.text();
    }).then(function(data) {
      const dataDB = JSON.parse(data);
      console.log(dataDB)
      setTL(dataDB);
    });
  }

  return (
    <div className="app">
        <NavigationPost/>
        
        {TL.map(card => (
          <TLcard Title={card.title} 
          Image={card.image_url}
          PostContent={card.post_content}
          Tags={card.tags}/> 
        ))}
    </div>
  );
}

export default Post;
