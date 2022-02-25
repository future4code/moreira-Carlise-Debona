import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomeFeed, goToHome } from "../Router/Coordinator";

export default function useProtectedPage() {
    const navigate = useNavigate()

    useEffect(()=>{
      const token = localStorage.getItem("token")
         if (token === null){
          goToHome(navigate)
      }
    },[navigate])

}

