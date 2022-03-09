import { useState } from "react"

const Application = ({
    first_name,
    last_name,
    email,
    phone,
    skills,
    work_preference,
    had_covid,
    had_covid_at,
    vaccinated,
    vaccinated_at,
    will_organize_devtalk,
    devtalk_topic,
    something_special,
    applications,
    data
}) => {
    const [pop, setPop] = useState(false)
    console.log(pop);

    const handleClick = (event) => {
        event.preventDefault()
        console.log("GOT");
        setPop(prev=>!prev)
    }

    const userSkills = (prop, prop1) => prop.map(s => {
        console.log(prop, prop1);
        const skillTitle = prop1.find(first => first.id == s.id)
        const exp = prop.find(first => first.id == s.id)
        return (
            <div style={{display:"flex"}}>
            <p className="label-application" key={prop.id}>{skillTitle.title}</p>
            <p className="label-application">Years of Experience:{exp.experience}</p>
            </div>
            
        )
    })

    return (
        <div>
            <div className="tab tab-inactive" onClick={handleClick}>
                <p className="num-application">{applications}</p>
                <span className="arrow arrow-down"></span>
            </div>
        {pop && (<div className="body-applications">
                <div className="boxes-application">
                    <h1 className="header-application">Personal Information</h1>
                    <p className="label-application">{first_name}</p>
                    <p className="label-application">{last_name}</p>
                    <p className="label-application">{email}</p>
                    <p className="label-application">{phone}</p>
                </div>
                <div className="boxes-application">
                    <h1 className="header-application">Skillset</h1>
                    {userSkills(skills, data)}
                </div>
                <div className="boxes-application">
                    <h1 className="header-application">Covid Situation</h1>
                    <p className="question question-application">{work_preference}</p>
                    <p className="question question-application">{had_covid}</p>
                    <p className="question question-application">{had_covid_at}</p>
                    <p className="question question-application">{vaccinated}</p>
                    <p className="question question-application">{vaccinated_at}</p>
                </div>
                <div className="boxes-application">
                    <h1 className="header-application">Insights</h1>
                    <p className="question question-application">{will_organize_devtalk}</p>
                    <p className="question question-application">{devtalk_topic}</p>
                    <p className="question question-application">{something_special}</p>
                </div>
            </div>)}
            </div>
    ) 
}

export default Application