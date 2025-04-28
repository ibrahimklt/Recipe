import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

function useFetch(url){
    
    const [error, seterror] = useState(null)
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    const fetchData= async()=>{
        try {
            const {data: responseData} = await axios.get(url);
            setdata(responseData)
            setloading(false)
        } catch (err) {
            seterror(err.message)
            setloading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[url])

    return {error,loading,data}

}

export default useFetch