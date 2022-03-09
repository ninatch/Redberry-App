import { useState } from "react"
import Dropdown from "../components/Dropdown"
import TextInput from "../components/TextInput"
import SkillComponent from "../components/SkillComponent"
import { Navigate } from "react-router-dom"
import Navigation from "../components/Navigation"


const TechnicalSkillSet = ({addSkills, deleteSkills, skills, info, getData, user}) => {
    const checkFormValidation = prop => {
        const emailValidator = /\S+@\S+\.\S+/
        if( 
          prop.first_name.length >= 2 &&
          prop.last_name.length >= 2 &&
          emailValidator.test(prop.email) && 
          ((prop.phone.startsWith("+9955") && prop.phone.length == 13) || prop.phone.length==0)
        ){
              return true
          }else{
            return false
          }
      }


    const [skill, setSkill] = useState({
        id: "",
        experience: ""
    })
    
    const handleChange = event => {
        const {name, value} = event.target
        const valueInNumber = parseInt(value)
        setSkill(prevSkill => {
            return {
                ...prevSkill,
                [name]: valueInNumber
            }
        })
    }
    
    const onSubmit = event => {
        event.preventDefault()
        addSkills(skill)
    }

    const userSkills = (prop, prop1) => prop.map(s => {
        const skillTitle = prop1.find(first => first.id == s.id)
        return (
            <SkillComponent key={s.id} title={skillTitle.title} experience={s.experience} deleteSkills={deleteSkills} 
            id={s.id}/>
        )
    })
    return checkFormValidation(user) ? (
        <div className="container">
            <div className="panel-left">
                <h1 className="title-left">Tell us about your skills</h1>
                    <form className="experience-form" onSubmit={onSubmit}>
                        <Dropdown info={info} getData={getData} handleChange={handleChange} skills={skills}/>
                        <TextInput name="experience" type="number" change={handleChange} placeholder="Experience Duration in Years" />
                        <input type="submit" className="btn btn-small" value="Add Programming Language" />
                    </form>
                        {
                        userSkills(skills, info)
                        }
                <p className="pageBar">A pageBar is going to be right here</p>
            </div>
            <div className="panel-right">
                <h1 className="title-right">A bit about our battles</h1>
                <p className="p-main">As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.</p>
            </div>
            <Navigation prev="/info" next="/covid"/>
        </div>
    ) : <Navigate to="/info"/>
}

    export default TechnicalSkillSet