const SkillComponent = ({title, experience, deleteSkills, id}) => {
    return (
        <div className="output">
            <p className="output-text">{title}</p>
            <p className="output-text">Years of Experience: {experience}</p>
            <div className="btn-remove" onClick={() => deleteSkills(id)}></div>
        </div>
    )
}

export default SkillComponent