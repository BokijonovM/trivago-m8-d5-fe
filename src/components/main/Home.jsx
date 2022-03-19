import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {useQueryParameter} from "../hooks/index.js";
import Loader from "./Loader.jsx";

function Home() {


  const token = useQueryParameter({defaultValue:null,key:'token'}) || localStorage.getItem("token")
  
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState()
    const [authorized, setAuthorized] = useState()
    const [accommodations, setAccommodations] = useState([])
    const [isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
      if(token){
        localStorage.setItem("token",token);
        setTimeout(()=>setAuthorized(true),200)
      }
      else{
        setTimeout(()=>{
          if(!localStorage.getItem("token")){
            // navigate("/")
          }
        },1000)
      }
      getAccommodations()
    },[])
    
    const getAccommodations = async() => {
      try {
        const response = await fetch(`http://localhost:3001/accommodations`)
        console.log(process.env.REACT_APP_BE_URL)
        console.log(response)
        if(response.ok){
          const data = await response.json()
          console.log(location.pathname)
              console.log(data)
              setAccommodations(data)
              setIsLoading(false)
            } else{
              console.log("error on getting accommodations")
              setIsLoading(false)
            }
          } catch (error) {
            console.log("error on getting accommodations")
            setIsLoading(false)
          }
        }

    return ( 
      <div>
        <h1>Welcome home</h1>
        {isLoading? <Loader/> : accommodations?.map(acc => 
        <Card>
        <Card.Title>{acc.name.toUpperCase() }</Card.Title>
          <Card.Body></Card.Body>
        </Card>
          )}
      </div>
     );
}

export default Home;