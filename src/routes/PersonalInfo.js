import Input from "../components/Input";
import { useState } from "react";


const PersonalInfo = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const onInputChange = event => {
        const name = event.target.name
        const value = event.target.value

        setState(prevState => {
            return {...prevState,
                    [name] : value}
        })
    }
    return (
        <div className="container">
            <div className="left-panel center">            
                <p className="title">Hey, Rocketeer, what are your coordinates?</p>
                <Input placeholder={"First Name"} name={"firstName"} state={state.firstName} change={onInputChange}/>
                <Input placeholder={"Last Name"} name={"lastName"} state={state.lastName} change={onInputChange}/>
                <Input placeholder={"E-mail"} name={"email"} state={state.email} change={onInputChange}/>
                <Input placeholder={"+995 5"} name={"phone"} state={state.phone} change={onInputChange}/>
            </div>
            <div className="right-panel center">
                <p className="title">Redberry Origins</p>
                <p className="paragraph">You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇</p>
            </div>
        </div>
    )
}


export default PersonalInfo;