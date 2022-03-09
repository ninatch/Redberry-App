import { useNavigate  } from "react-router-dom"

const Thanks = () => {
    const navigate = useNavigate();
    const redirect = () => {
        setTimeout(()=>{
            navigate("/")
        },3000)
    }
    return (
        <>
        <div className="submit-container">
            <h1 className="title-thanks">Thanks for Joining 😊</h1>
            
        </div>
        {redirect()}
        </>
    )
}

export default Thanks