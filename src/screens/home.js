import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function Home()
{
    const navigate = useNavigate();

    const data = useSelector((a)=>a.login)
    console.log(data)

    const moveToHome = ()=>{
        navigate("/Home")

    }
    return(
        <>
        <h1>Home</h1>
        <button onClick={moveToHome}>
            Click
        </button>
        </>
        
    )
} 