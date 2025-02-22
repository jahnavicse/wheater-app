import React,{useState} from "react";
// import images to use it 
import summer from "./images/summer.jpg"
import winter from "./images/winter.jpg"

const App=()=>{

     const [latitude,setLatitude]=useState(0) // update the varable
     const [longitude,setLongitude]=useState(0)
     const [hemisphere,sethemisphere]=useState("")
    //  
    const[month,setMonth]=useState(11)

    function fetchLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                     
                    if(position.coords.latitude>0){
                       
                        sethemisphere("Northern Hemisphere")
                    }
                    else if (position.coords.latitude<0){
                        sethemisphere("Southern Hemisphere")
                    }

                    else{
                        sethemisphere("Equator")
                    }

                    
                }
            )

        }
    }


return (
    <div>
        <button onClick={fetchLocation}>Get Location </button>
        <h1>latitude:{latitude}</h1>
        <h1>longitude:{longitude}</h1>
        <h1>Hemisphere:{hemisphere}</h1>
        <h1>Month:{month}</h1>
        {
          hemisphere&&(
            (hemisphere=="Northern Hemisphere"&& (month>=3&& month<=10))||
            (hemisphere=="Southern Hemisphere"&&(month<=3||month>=10))
          )
          &&(
            <div>
              <h1>welcome to summer season</h1>
              <img src={summer} alt="summer"/>
              </div>
          )
        }
        {
          hemisphere&&(
            (hemisphere=="Northern Hemisphere"&& (month<4 ||month>=10))||
            (hemisphere=="Southern Hemisphere"&&(month<=4||month<=10))
          )
          &&(
            <div>
              <h1>welcome to winter season</h1>
              <img src={winter} alt="winter"/>
              </div>
          )
        }
    </div>
)




}


export default App;