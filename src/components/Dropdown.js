import { useState } from "react"

const Dropdown = ({onChange}) => {

    const [info, setInfo] = useState([])

    const getData = () => {
        fetch("https://bootcamp-2022.devtest.ge/api/skills")
            .then(response => response.json())
            .then(data => setInfo(data))
    }
    
    const displayOptions = info.map(item => {
        return <option 
                    value={item.title} 
                    key={item.id} 
                    onClick={onChange}
                >
                    {item.title}
                </option>
    })

    return (
        <select className="text-input" onClick={getData}>
            <option value="selected" hidden>Skills</option>
            {displayOptions}
        </select>
    )
}

export default Dropdown