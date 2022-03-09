import { useState } from "react"
import { Navigate, NavLink, useNavigate } from "react-router-dom"

const Submit = ({user, skills, radio, insight}) => {
    const checkFormValidation = prop => {
        if(prop.will_organize_devtalk === "") return false
        if(prop.will_organize_devtalk === true && prop.devtalk_topic==="") return false
        if(prop.something_special === "") return false
        return true
    }
    console.log(user, skills, radio, insight, " ITEMS");

    const navigate = useNavigate();

    const data = {token:"6c00963e-d8c6-4975-9c7f-c5ccce7b4872", ...user, skills, ...radio, ...insight}
   
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const submitData = () => {
        fetch("https://bootcamp-2022.devtest.ge/api/application", requestOptions)
        .then(response => console.log(response))
}

    const onSubmit = event => {
        event.preventDefault()
            submitData()
            navigate("/thanks")
    }

    

    return checkFormValidation(insight) ? (
        <div className="container submit-container">
            <NavLink to="/thanks"><button className="btn-main btn-submit" onClick={onSubmit}>Submit</button></NavLink>
            <NavLink to="/insights" className="tag tag-back">go back</NavLink>
        </div>
    ) : <Navigate to="/insights"/>
}

export default Submit