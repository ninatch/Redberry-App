import DateInput from "../components/DateInput"
import RadioInput from "../components/RadioInput"
import { Navigate } from "react-router-dom"
import Navigation from "../components/Navigation";

const Covid = ({radio, handleChange, skills}) => {
        
    return skills >= 1 ? (
    <div className="container">
        <div className="panel-left">
            <h1 className="title-left">Covid Stuff</h1>
            <form>
            <div className="radio-box">
                <legend className="question">how would you prefer to work?</legend>
                    <RadioInput 
                            className="answer"
                            type="radio" 
                            id="office" 
                            name="work_preference" 
                            value="from_office"
                            onChange={handleChange}
                    />
                    <label htmlFor="office">From Sairme Office</label>
                    <br />
                    <RadioInput 
                            className="answer"
                            type="radio" 
                            id="home" 
                            name="work_preference" 
                            value="from_home"
                            onChange={handleChange}
                    />
                    <label htmlFor="home">From Home</label>
                    <br />
                    <RadioInput 
                            className="answer"
                            type="radio" 
                            id="hybrid" 
                            name="work_preference" 
                            value="hybrid "
                            onChange={handleChange}
                    />
                    <label htmlFor="hybrid">Hybrid</label>
                    <br />
            </div>
            <div className="radio-box">
                <legend className="question">Did you contact covid 19? :(</legend>
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="yes-had-covid" 
                            name="had_covid" 
                            value={true}
                            onChange={handleChange}
                    />
                    <label htmlFor="yes-had-covid">Yes</label>
                    <br />
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="no-had-covid" 
                            name="had_covid" 
                            value={false}
                            onChange={handleChange}
                    />
                    <label htmlFor="no-had-covid">No</label>
                    <br />
                    {radio.had_covid && (<DateInput text="When?" name="had_covid_at" value={radio.had_covid_at} onChange={handleChange}/>)}
            </div>
            <div className="radio-box">
                <legend className="question">Have you been vaccinated?</legend>
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="yes-is-vaccinated" 
                            name="vaccinated" 
                            value={true}
                            onChange={handleChange}
                    />
                    <label htmlFor="yes-is-vaccinated">Yes</label>
                    <br />
                    <RadioInput
                            className="answer"
                            type="radio" 
                            id="no-is-vaccinated" 
                            name="vaccinated" 
                            value={false}
                            onChange={handleChange}
                    />
                    <label htmlFor="no-is-vaccinated">No</label>
                    <br />
                    {radio.vaccinated && (<DateInput text="When did you get your last covid vaccine?" name="vaccinated_at" value={radio.vaccinated_at} onChange={handleChange}/>)}
            </div>
            </form>
            <p className="pageBar">A pageBar is going to be right here</p>
        </div>
        <div className="panel-right">
            <h1 className="title-right">Redberry Covid Policies</h1>
            <p className="p-main">As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications &gt; Zoom meetings. Both on the fun and productivity scales.</p>
        </div>
        <Navigation prev="/skills" next="/insights"/>
    </div>) : <Navigate to="/skills"/>
}

export default Covid