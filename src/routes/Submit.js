import { useState } from "react"

const Submit = ({user, skills, radio, insight}) => {

    const [final, setFinal] = useState({
            token: "354317b7-2c0c-45e0-afa0-4945740a617d",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            skills: [],
            work_preference: "",
            had_covid: "",
            had_covid_at: "",
            vaccinated: "",
            vaccinated_at: "",
            will_organize_devtalk: "",
            devtalk_topic: "",
            something_special: ""
    })

    const submitData = () => {
        fetch("https://bootcamp-2022.devtest.ge/api/application", {method:"POST", body:JSON.stringify(final)})
            .then(response => console.log("post request was sent: ", response))
        }

    const onSubmit = event => {
        event.preventDefault()
        setFinal(prevFinal => ({...prevFinal, ...user, skills, ...radio, ...insight}))
        setTimeout(() => {
            }, 1000)
        submitData()
    }

    
        console.log(final)

    return (
        <div className="submit-container">
            <input type="submit" className="btn btn-last" value="Submit" onClick={onSubmit}></input>
            <a href="#" className="applications link-last">go back</a>
        </div>
    )
}

export default Submit