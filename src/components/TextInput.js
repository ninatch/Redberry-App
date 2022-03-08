const TextInput = ({type, name, placeholder, state, change}) => {
    return (
        <input className="text-input"
            type={type} 
            name={name}
            placeholder={placeholder} 
            value={state} 
            onChange={change}
            required
            />
    )
}

export default TextInput