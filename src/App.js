import Covid from "./routes/Covid"
import Insights from "./routes/Insights"
import LandingPage from "./routes/LandingPage"
import PersonalInfo from "./routes/PersonalInfo"
import Submit from "./routes/Submit"
import TechnicalSkillSet from "./routes/TechnicalSkillSet"
import Thanks from "./routes/Thanks"
import "./styles/styles.css"

import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
})

const handleUserChange = event => {
    const {name, value} = event.target

    setUser(prevUser => {
        return {...prevUser,
                [name]: value}
    })
}






//page2
/////////////////////////////////
const [skills, setSkills] = useState([])

    const addSkills = skill => {
      if (skills.find(s => s.id == skill.id) == null){
        setSkills(prevSkills => [...prevSkills, skill])
      }
    }
    console.log(skills)

    const deleteSkills = id => {
      setSkills(prevState => prevState.filter(s => s.id != id))
    }





//page3
///////////////////////////////////////////
   const [radio, setRadio] = useState({
        work_preference: "",
        had_covid: "",
        had_covid_at: "",
        vaccinated: "",
        vaccinated_at: ""
    })

    const handleRadioChange = event => {
        const {name, value} = event.target
        console.log("n" + name, "v" + value)
        let booleanValue = value
        if(value === "true" || value === "false"){
            value === "true" ? booleanValue = true : booleanValue = false
        }

        setRadio(prevRadio => {
            return {...prevRadio,
                [name]: booleanValue}
                })

        if(!booleanValue){
            setRadio(prevState => {
                return {...prevState, had_covid_at:""}
                })
            }

        if(!booleanValue){
            setRadio(prevState => {
                return {...prevState, vaccinated_at:""}
                    })
                }
            }

            console.log(radio)



//page 4
/////////////////////////////////////////////////
const [insight, setInsight] = useState({
  will_organize_devtalk: "",
  devtalk_topic: "",
  something_special: ""
})

const handleInsightChange = event => {
  const {name, value} = event.target
  console.log("n" + name, "v" + value)
  let booleanValue = value
  if(value === "true" || value === "false"){
      value === "true" ? booleanValue = true : booleanValue = false
  }

  setInsight(prevInsight => {
      return {
          ...prevInsight,
          [name]: booleanValue
      }
  })

  if(!booleanValue){
      setInsight(prevState => {
          return {...prevState, devtalk_topic:""}
          })
      }
}
console.log(insight)



  return (
    <div>
      <LandingPage />
      <PersonalInfo user={user} handleChange={handleUserChange}/>
      <TechnicalSkillSet addSkills={addSkills} deleteSkills={deleteSkills} skills={skills}/>
      <Covid radio={radio} handleChange={handleRadioChange}/>
      <Insights insight={insight} handleChange={handleInsightChange}/>
      <Submit user={user} addSkills={addSkills} radio={radio} insight={insight}/>
      <Thanks />
    </div>
  )
}

export default App