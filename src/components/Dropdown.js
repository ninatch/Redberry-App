const Dropdown = ({info, getData, handleChange, skills}) => {

    const displayOptions = info.map(item => {
        return <option
                    value={item.id} 
                    key={item.id}
                    disabled={skills.map(skill => skill.id).includes(item.id)}
                >
                    {item.title}
                </option>
    })

    return (
        <select className="text-input" name="id" onClick={getData} onChange={handleChange}>
            <option value="selected" hidden>Skills</option>
            {displayOptions}
        </select>
    )
}

export default Dropdown