import { useState, useEffect } from "react"
import axios from "axios"

const useRequestData = (initialData, url)=>{
    const [data, setData] = useState(initialData)
    // const [login, setLogin] = useState(false);
    // const [error, setError] = useState("");

    useEffect(() => {
      // setLogin(true);
      //const headers = {Authorization: localStorage.getItem("token"),};
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token")
        }
      })
        .then((response) => {
          
          setData(response.data);
        })
        .catch((error) => {
          // setLogin(false);
          console.log(error)
        });
    }, [url]);
    
    return (data);
}

export default useRequestData