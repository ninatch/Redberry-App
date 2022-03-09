const RadioInput = ({type, id, name, value, onChange}) => {
    return (
        <input
            className="input-option"
            type={type} 
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            />
    )
}

export default RadioInput