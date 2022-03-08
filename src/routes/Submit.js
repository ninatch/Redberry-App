import { useState } from "react"

const Submit = ({user, addSkills, radio, insight}) => {

    const [final, setFinal] = useState({
            token: "",
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


    return (
        <div className="submit-container">
            <input type="submit" className="btn btn-last" value="Submit"></input>
            <a href="#" className="applications link-last">go back</a>
        </div>
    )
}

export default Submit