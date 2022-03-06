import { useState } from "react"
import RadioInput from "../components/RadioInput"
import Textarea from "../components/Textarea"

const Insights = () => {

    const [insight, setInsight] = useState({
        attend: "",
        speak: "",
        special: ""
    })

    const handleChange = event => {
        const {name, value} = event.target

        setInsight(prevInsight => {
            return {
                ...prevInsight,
                [name]: value
            }
        })
    }

    return (
        <div className="container">
            <div className="panel-left">
                <h1 className="title-left">What about you?</h1>
                <div className="input-box2">
                <fieldset className="radio-box">
                    <legend className="question">Would you attend Devtalks and maybe also organize your own?</legend>
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="yes-attend" 
                            name="attend" 
                            value={true}
                            onChange={handleChange}
                    />
                    <label htmlFor="yes-attend">Yes</label>
                    <br />
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="no-attend" 
                            name="attend" 
                            value={false}
                            onChange={handleChange}
                    />
                    <label htmlFor="no-attend">No</label>
                    <br />
                </fieldset>

                <label htmlFor="speak" className="question">What would you speak about at Devtalk?</label>
                <Textarea
                    value={insight.speak}
                    placeholder="I would..."
                    onChange={handleChange}
                    name="speak"
                    id="speak"
                />
                <br />
                
                <label htmlFor="special" className="question">Tell us something special</label>
                <Textarea
                    value={insight.special}
                    placeholder="I..."
                    onChange={handleChange}
                    name="special"
                    id="special"
                />
                <p className="pageBar">A pageBar is going to be right here</p>
                </div>
            </div>
            <div className="panel-right">
                <h1 className="title-right">Redberrian Insights</h1>
                <p className="p-main">We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!</p>
            </div>
        </div>
    )
}

export default Insights