import { useState,useContext,createContext,useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [auth,setAuth]= useState({
        user:null,
        token:""
    })
     useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data){
            const passedata = JSON.parse(data);
            setAuth({
                ...auth,
                user:passedata.user,
                token:passedata.token
            })
        }
     },[]);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
        {children}
        </AuthContext.Provider>
    )
   
}

// custom hook
const useAuth =() => useContext(AuthContext);
export {useAuth,AuthProvider}