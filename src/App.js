import Covid from "./routes/Covid"
import Insights from "./routes/Insights"
import LandingPage from "./routes/LandingPage"
import PersonalInfo from "./routes/PersonalInfo"
import Submit from "./routes/Submit"
import TechnicalSkillSet from "./routes/TechnicalSkillSet"
import Thanks from "./routes/Thanks"
import "./styles/styles.css"

function App() {
  return (
    <div>
      <LandingPage />
      <PersonalInfo />
      <TechnicalSkillSet />
      <Covid />
      <Insights />
      <Submit />
      <Thanks />
    </div>
  )
}

export default App