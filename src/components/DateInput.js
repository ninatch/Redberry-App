const DateInput = ({text, name, value, onChange}) => {
    return (
        <div className="date-box">
            <label className="date-label input-label">{text}</label>
            <input className="input date-input" type="date" placeholder="Date" name={name} value={value} onChange={onChange} required></input>
        </div>
    )
}

export default DateInput