import { Navigate } from "react-router-dom"
import Navigation from "../components/Navigation"
import RadioInput from "../components/RadioInput"
import Textarea from "../components/Textarea"

const Insights = ({insight, handleChange, radio}) => {
    const checkFormValidation = prop =>{
        console.log(prop.had_covid=="", "prop.work_preference.length == 0");
        if(prop.work_preference.length < 1) return false
        if(prop.had_covid === "" || (prop.had_covid && prop.had_covid_at.length == 0)) return false
        if(prop.vaccinated === "" || (prop.vaccinated && prop.vaccinated_at == 0)) return false
        return true
    }

    return checkFormValidation(radio) ? (
        <div className="container">
            <div className="panel-left">
                <h1 className="title title-left">What about you?</h1>
                <div className="input-box input-box-big">
                <fieldset className="radio-box">
                    <legend className="input-label">Would you attend Devtalks and maybe also organize your own?</legend>
                    <RadioInput
                            type="radio" 
                            id="yes-attend" 
                            name="will_organize_devtalk" 
                            value={true}
                            onChange={handleChange}
                    />
                    <label htmlFor="yes-attend">Yes</label>
                    <br />                    
                    <RadioInput
                            type="radio" 
                            id="no-attend" 
                            name="will_organize_devtalk" 
                            value={false}
                            onChange={handleChange}
                    />
                    <label htmlFor="no-attend">No</label>
                    <br />
                </fieldset>
                {insight.will_organize_devtalk && (
                <>
                <label htmlFor="speak" className="input-label">What would you speak about at Devtalk?</label>
                <Textarea
                    className="textarea-big"
                    value={insight.devtalk_topic}
                    placeholder="I would..."
                    onChange={handleChange}
                    name="devtalk_topic"
                    id="speak"
                />
                </>)}
                <br />
                <label htmlFor="special" className="input-label">Tell us something special</label>
                <Textarea
                    className="textarea-small"
                    value={insight.something_special}
                    placeholder="I..."
                    onChange={handleChange}
                    name="something_special"
                    id="special"
                />
                </div>
            </div>
            <div className="panel-right">
                <h1 className="title title-right">Redberrian Insights</h1>
                <p className="text-main">We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!</p>
            </div>
            <Navigation prev="/covid" next="/submit"/>
        </div>
    ) : <Navigate to="/covid"/>
}

export default Insights