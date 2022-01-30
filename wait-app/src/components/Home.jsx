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



        // const { Client } = require('postgres')
        // const client = new Client({
        //   connectionString: 'ec2-3-224-157-224.compute-1.amazonaws.com',
        //   ssl: {
        //     rejectUnauthorized: false
        //   }
        // });

        // client.connect();

        //var psql = require('postgres')
        // var connection = psql.createConnection({
        // host     : 'ec2-3-224-157-224.compute-1.amazonaws.com',
        // user     : 'aqyutaslgzofpz',
        // password : '1771ae5c038865278d28925bbd8fba53aa1215dd39a877116bce56bf509624a2',
        // database : 'dc4a6puqtcu1ku'
        // });

        // connection.connect()


        // connection.query(
        //   'SELECT * FROM user_messages WHERE dest = DFW' , function (err, rows, fields) 
        //   {
        //     if (err) throw err
            
        //     console.log('The solution is: ', rows[0].solution)
        //   }
        // )
        
        // connection.end()

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

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
    
  return(
      <div className="app">
        <main>
          <div>
            <Navigation/>
            <div className="weather-box">
              <div className="temp">Please Enter your Flight Number</div>
            </div>
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
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
            </div> */}
            <div className="search-box">
              <input 
                onSubmit={getSearch}
                name="topic"
                value={search}
                onChange={handleSearch}
                type="text"
                className="search-bar"
                placeholder="Search..."
                // onChange={e => setQuery(e.target.value)}
                // value={query}
                // onKeyPress={search}
              />
            </div>
          </div>

        
          {/* <div className="location-box">

            <div className="location">New York City</div>

            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              45

            </div>

            <div className="weather">Sunny</div>
          </div> */}
        </main>

      </div>

  )
}

export default Home;
