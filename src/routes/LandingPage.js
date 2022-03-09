const LandingPage = ({Link}) => {
    return (
        <div className="container landing-container">
            <h1 className="title-main">Welcome Rocketeer !</h1>
            <Link to="/info" type="button" className="btn-main btn-start">Start Questionnaire</Link>
            <Link to="/applications" className="tag tag-applications">Submitted Applications</Link>
            <img src={require("../images/rocketman.png")}></img>
        </div>
    )
}

export default LandingPage