import { useState } from "react"
import RadioInput from "../components/RadioInput"

const Covid = () => {

    const [radio, setRadio] = useState({
        workPlace: "",
        hadCovid: "",
        isVaccinated: ""
    })

    const handleChange = event => {
        const {name, value} = event.target
        
        setRadio(prevRadio => {
            return {...prevRadio,
                [name]: value}
                })
            }

    return (
    <div className="container">
        <div className="panel-left">
            <h1 className="title-left">Covid Stuff</h1>
            <fieldset className="radio-box">
                <legend className="question">how would you prefer to work?</legend>
                    <RadioInput 
                            className="answer"
                            type="radio" 
                            id="office" 
                            name="workPlace" 
                            value="office"
                            onChange={handleChange}
                    />
                    <label htmlFor="office">From Sairme Office</label>
                    <br />
                    <RadioInput 
                            className="answer"
                            type="radio" 
                            id="home" 
                            name="workPlace" 
                            value="home"
                            onChange={handleChange}
                    />
                    <label htmlFor="home">From Home</label>
                    <br />
                    <RadioInput 
                            className="answer"
                            type="radio" 
                            id="hybrid" 
                            name="workPlace" 
                            value="hybrid"
                            onChange={handleChange}
                    />
                    <label htmlFor="hybrid">Hybrid</label>
                    <br />
            </fieldset>
            <fieldset className="radio-box">
                <legend className="question">Did you contact covid 19? :(</legend>
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="yes-had-covid" 
                            name="hadCovid" 
                            value={true}
                            onChange={handleChange}
                    />
                    <label htmlFor="yes-had-covid">Yes</label>
                    <br />
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="no-had-covid" 
                            name="hadCovid" 
                            value={false}
                            onChange={handleChange}
                    />
                    <label htmlFor="no-had-covid">No</label>
                    <br />
            </fieldset>
            <fieldset className="radio-box">
                <legend className="question">Have you been vaccinated?</legend>
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="yes-is-vaccinated" 
                            name="isVaccinated" 
                            value={true}
                            onChange={handleChange}
                    />
                    <label htmlFor="yes-is-vaccinated">Yes</label>
                    <br />
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="no-is-vaccinated" 
                            name="isVaccinated" 
                            value={false}
                            onChange={handleChange}
                    />
                    <label htmlFor="no-is-vaccinated">No</label>
                    <br />
            </fieldset>
            <p className="pageBar">A pageBar is going to be right here</p>
        </div>
        <div className="panel-right">
            <h1 className="title-right">Redberry Covid Policies</h1>
            <p className="p-main">As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications &gt; Zoom meetings. Both on the fun and productivity scales.</p>
        </div>
    </div>)
}

export default Covid