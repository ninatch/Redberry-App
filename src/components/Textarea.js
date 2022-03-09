const Textarea = ({className, value, placeholder, onChange, name}) => {
    return (
        <textarea
            className={className}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            required
        />
    )
}

export default Textarea