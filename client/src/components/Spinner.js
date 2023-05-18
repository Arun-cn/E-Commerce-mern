import React  from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


function Spinner() {
    const [count,setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000);
        count === 0 && navigate("/login",{
           state: location.pathname 
        });

        return ()=> clearInterval(interval)
    },[count,navigate,location])
  return (
    <>
        <div className="d-flex flex-colum justify-content-center align-items-center " style={{height: "100vh"}}>
            <h1>{count}</h1>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </div>
    </>
  )
}

export default Spinner