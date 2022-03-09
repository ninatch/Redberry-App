import { useEffect, useState } from "react"
import Application from "../components/Application";

const SubmittedApplications =({dataSkills})=>{
    const [applications, setApplications] = useState([]);
    useEffect(()=>{
            fetch("https://bootcamp-2022.devtest.ge/api/skills")
                .then(response => response.json())
                .then(data => setData(data))
        fetch("https://bootcamp-2022.devtest.ge/api/applications?token=6c00963e-d8c6-4975-9c7f-c5ccce7b4872")
            .then(response => response.json())
            .then(data => setApplications(data))
    },[])

    const [data, setData] = useState([])
    

    return(
        <div className="container-applications">
            <h1 className="header-applications">Submitted Applications</h1>
            {applications.map(app => {
                return(
                    <Application key={applications.indexOf(app)}
                        first_name={app.first_name}
                        last_name={app.last_name}
                        email={app.email}
                        phone={app.phone}
                        skills={app.skills}
                        work_preference={app.work_preference}
                        had_covid={app.had_covid}
                        had_covid_at={app.had_covid_at}
                        vaccinated={app.vaccinated}
                        vaccinated_at={app.vaccinated_at}
                        will_organize_devtalk={app.will_organize_devtalk}
                        devtalk_topic={app.devtalk_topic}
                        something_special={app.something_special}
                        applications={applications.indexOf(app) +1}
                        data={data}
                    />
                )
            })}
        </div>
    )
}

export default SubmittedApplications