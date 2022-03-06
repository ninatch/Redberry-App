const Textarea = ({value, placeholder, onChange, name}) => {
    return (
        <textarea
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
        />
    )
}

export default Textarea