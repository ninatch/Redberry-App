const SkillComponent = ({title, experience, deleteSkills, id}) => {
    return (
        <div className="skills">
            <p className="p-skills">{title}</p>
            <p className="p-skills">Years of Experience: {experience}</p>
            <div className="btn-remove" onClick={() => deleteSkills(id)}></div>
        </div>
    )
}

export default SkillComponent