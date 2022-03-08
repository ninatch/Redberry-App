const DateInput = ({text, name, value, onChange}) => {
    return (
        <div>
            <label>{text}</label>
            <input className="text-input date-input" type="date" placeholder="Date" name={name} value={value} onChange={onChange} required></input>
        </div>
    )
}

export default DateInput