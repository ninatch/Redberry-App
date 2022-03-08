const RadioInput = ({type, id, name, value, onChange}) => {
    return (
        <input
            type={type} 
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            />
    )
}

export default RadioInput