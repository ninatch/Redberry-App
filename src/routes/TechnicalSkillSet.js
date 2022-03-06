import { useState } from "react"
import Dropdown from "../components/Dropdown"
import Input from "../components/TextInput"


const TechnicalSkillSet = () => {
    const [skill, setSkill] = useState({
        id: "",
        experience: ""
    })

    const handleChange = event => {
        const {name, value} = event.target

        setSkill(prevSkill => {
            return {
                ...prevSkill,
                [name]: value
            }
        })
    }

    return (
        <div className="container">
            <div className="panel-left">
                <h1 className="title-left">Tell us about your skills</h1>
                    <div className="experience-form">
                        <Dropdown onChange={handleChange}/>
                        <Input placeholder="Experience Duration in Years" />
                        <button type="button" className="btn btn-small">Add Programming Language</button>
                    </div>
                <p className="pageBar">A pageBar is going to be right here</p>
            </div>
            <div className="panel-right">
                <h1 className="title-right">A bit about our battles</h1>
                <p className="p-main">As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.</p>
            </div>
        </div>
    )}

    export default TechnicalSkillSet