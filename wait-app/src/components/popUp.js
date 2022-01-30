import React, {useEffect, useState} from "react";

function Popup(props){
    const [flight, setText] = useState("");
    const [destz, setdest] = useState("");
    const [titles, settitle] = useState("");
    const [image, setimage] = useState("");
    const [reviews, setreview] = useState("");
    const [tag, settag] = useState("");

    const [postInfo, setPost] = useState([]);

    const getPost = async () => {
        setPost([flight, destz, titles, image, reviews, tag]);
        if(postInfo !== []) {
            fetch('http://localhost:3004/post/' + flight+ "/" + destz + "/" + titles + "/" + image + "/" + reviews + "/" + tag).then(function(response) {
                return response.text();
              }).then(function(data) {
                console.log(data)
              });
        }else{
            alert("ERROR: You did not fill out the form")
        }
      };

    const handleText = event => {
        setText(event.target.value);
        console.log(flight,destz,titles,image,reviews,tag)
    };

    const handledest = event => {
        setdest(event.target.value);
        console.log(flight,destz,titles,image,reviews,tag)
    };

    const handletitle = event => {
        settitle(event.target.value);
        console.log(flight,destz,titles,image,reviews,tag)
    };
    const handleimage = event => {
        setimage(event.target.value);
        console.log(flight,destz,titles,image,reviews,tag)
    };
    const handlereview = event => {
        setreview(event.target.value);
        console.log(flight,destz,titles,image,reviews,tag)
    };
    const handletag = event => {
        settag(event.target.value);
        console.log(flight,destz,titles,image,reviews,tag)
    };


    const getSearch = event =>{
        event.preventDefault();
        console.log([flight, destz, titles, image, reviews, tag])
        getPost();
        console.log("NICE")
        setText("");
        setdest("");
        settitle("");
        setimage("");
        setreview("");
        settag("");
    };

    return(props.trigger) ? (
        <div>
            <form onSubmit={getSearch}>
                <label>
                Flight Number: 
                <input type="text" name="flight_num" onChange={handleText}
/>
                </label>
                <label>
                Destination: 
                </label>
                <input type="text" name="dest"                   onChange={handledest}
/>
                <label>
                Title: 
                <input type="text" name="title"                   onChange={handletitle}
/>
                </label>
                <label>
                Image URL: 
                <input type="text" name="image_url"                   onChange={handleimage}
/>
                </label>
                <label>
                Reviews: 
                <input type="text" name="review"                   onChange={handlereview}
/>
                </label>
                <label>
                Tags: 
                <input type="text" name="tags"                   onChange={handletag}
/>
                </label>
                <button >Submit</button>
                <button onClick = {()=> props.setTrigger(false)}>Close</button>
                {props.children}
            </form>
        </div>
        
    ) : "";
}
export default Popup