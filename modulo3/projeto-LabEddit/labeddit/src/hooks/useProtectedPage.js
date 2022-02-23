import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomeFeed } from "../Router/Coordinator";

const useUnprotectedPage = () => {
    const history = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToHomeFeed(history)
        }
    }, [history])

}

export default useUnprotectedPage