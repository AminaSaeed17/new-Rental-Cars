import axios from 'axios';
import { createContext, useEffect, useState} from "react"
export const carContext = createContext();

export default function carContextProvider({children}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [cars ,setCars] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [loading ,setLoading] = useState(true);

    async function getCars(){
        try{
            let {data} = await axios.get('https://myfakeapi.com/api/cars/')
        setCars(data.cars);
        setLoading(false)
        }catch(err){
            console.log(err);
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getCars();
    },[])

  return <>
    <carContext.Provider value={{cars,loading}}>
        {children}
    </carContext.Provider>
  </>
}