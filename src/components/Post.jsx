import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom"
import { NavigationPost } from ".";
import TLcard from './TLcard.js';
import Popup from "./popUp.js";


function Post() {
  
  const { state } = useLocation();
  const { Location } = state; // Read values passed on state

  const [TL, setTL] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  
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

        <div className="search-box">
          <button className="center-blue" type="submit" onClick = {() => setButtonPopup(true)}>
              Submit A Post!
          </button>
        </div>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        </Popup>
        
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
