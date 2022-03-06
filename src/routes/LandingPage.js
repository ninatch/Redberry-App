const LandingPage = () => {
    return (
        <div className="landing-container">
            <h1 className="title-big">Welcome Rocketeer !</h1>
            <button type="button" className="btn">Start Questionnaire</button>
            <a href="#" className="applications">Submitted Applications</a>
            <img src={require("../images/rocketman.png")}></img>
        </div>
    )
}

export default LandingPage