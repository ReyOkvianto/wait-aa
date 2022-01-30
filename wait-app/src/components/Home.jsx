import React, {useEffect, useState} from "react";
import { Navigation } from ".";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { Client } from 'postgres';

function Home() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [falseFlight,setFalseFlight] = useState(false);
  const navigate = useNavigate()

  useEffect(() =>{
      getData();
    }, [query]);

  const getData = async () => {
    if(query !== "") {
      const response = await fetch(`https://aa-api.herokuapp.com/flights?date=2021-02-09&flightNumber=${query}`);
      const data = await response.json();
      console.log(data);
      if(data.length === 0){
        setFalseFlight(true)
        alert("ERROR: Flight info not valid!")
      }else{
        setFalseFlight(false);
        navigate("/Post",{state: { Location: data[0].destination.code}})
      }
    }
  };


  const handleSearch = event => {
      //console.log(event.target.value);
      setSearch(event.target.value);
      console.log(search)
  };
  
  const getSearch = event =>{
      event.preventDefault();
      setQuery(search);
      console.log("NICE")
      setSearch("");
  };
    
  return(
      <container>
          <Navigation/>
          <h2 style={{ textAlign: "center", margin: 20 }}>Please Enter your Plane ID</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={getSearch}>
                <input
                  placeholder="Plane ID"
                  name="topic"
                  value={search}
                  onChange={handleSearch}
                  />
                  <button type="submit" color="green">
                      Search
                  </button>
          </form>
          </div>
      </container>
  )
}

export default Home;
