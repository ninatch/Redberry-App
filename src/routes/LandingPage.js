const LandingPage = ({Link}) => {
    return (
        <div className="landing-container">
            <h1 className="title-big">Welcome Rocketeer !</h1>
            <Link to="/info" type="button" className="btn">Start Questionnaire</Link>
            <Link to="/applications" className="applications">Submitted Applications</Link>
            <img src={require("../images/rocketman.png")}></img>
        </div>
    )
}

export default LandingPage