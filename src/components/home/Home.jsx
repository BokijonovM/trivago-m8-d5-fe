import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useQueryParameter} from "../hooks/index.js";

function Home() {


    const token = useQueryParameter({defaultValue:null,key:'token'}) || localStorage.getItem("token")
    
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState()
    const [authorized, setAuthorized] = useState()

    useEffect(() => {
        console.log(location.pathname)
        if(token){
          localStorage.setItem("token",token);
          setTimeout(()=>setAuthorized(true),200)
        }
        else{
          setTimeout(()=>{
           if(!localStorage.getItem("token")){
            navigate("/")
           }
          },1000)
        }
        })


    return ( 
        <h1>Welcome home</h1>
     );
}

export default Home;