import Covid from "./routes/Covid"
import Insights from "./routes/Insights"
import LandingPage from "./routes/LandingPage"
import PersonalInfo from "./routes/PersonalInfo"
import Submit from "./routes/Submit"
import TechnicalSkillSet from "./routes/TechnicalSkillSet"
import Thanks from "./routes/Thanks"
import "./styles/styles.css"

import { Routes, Route, Link } from "react-router-dom";

import { useState } from "react";
import SubmittedApplications from "./routes/SubmittedApplications"

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

const [info, setInfo] = useState([])
    const getData = () => {
    fetch("https://bootcamp-2022.devtest.ge/api/skills")
        .then(response => response.json())
        .then(data => setInfo(data))
    }
const [skills, setSkills] = useState([])

    const addSkills = skill => {
      if (skills.find(s => s.id == skill.id) == null){
        setSkills(prevSkills => [...prevSkills, skill])
      }
    }
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



//page 4
/////////////////////////////////////////////////
const [insight, setInsight] = useState({
  will_organize_devtalk: "",
  devtalk_topic: "",
  something_special: ""
})

const handleInsightChange = event => {
  const {name, value} = event.target
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


  return (
    <>
    <Routes>
      <Route path="/" element={
        <LandingPage 
            Link = {Link}
              />} />
      <Route path="/info" element={
        <PersonalInfo 
              user={user} 
              handleChange={handleUserChange}
              />}/>
      <Route path="/skills" element={
        <TechnicalSkillSet 
              addSkills={addSkills} 
              deleteSkills={deleteSkills} 
              skills={skills}
              info={info}
              getData={getData}
              user={user}
              />} />
      <Route path="/covid" element={
        <Covid 
              radio={radio} 
              handleChange={handleRadioChange}
              skills={skills.length}
              />} />
      <Route path="/insights" element={
        <Insights 
              insight={insight} 
              handleChange={handleInsightChange}
              radio={radio}
              />} />
      <Route path="/submit" element={
        <Submit 
              user={user} 
              skills={skills} 
              radio={radio} 
              insight={insight}
              />} />
      <Route path="/thanks" element={
        <Thanks 
              /> } />
      <Route path="/applications" element={
        <SubmittedApplications
              /> } />
    </Routes>
    </>
  )
}

export default App