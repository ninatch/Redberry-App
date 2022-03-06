import TextInput from "../components/TextInput";
import { useState } from "react";

const PersonalInfo = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const onInputChange = event => {
        const {name, value} = event.target

        setUser(prevUser => {
            return {...prevUser,
                    [name]: value}
        })
    }

    return (
        <div className="container">
            <div className="panel-left">            
                <h1 className="title-left">Hey, Rocketeer, what are your coordinates?</h1>
                    <div className="input-box">
                        <TextInput 
                            type="text"
                            name="firstName"
                            placeholder="First Name" 
                            state={user.firstName} // i should change state to value
                            change={onInputChange} 
                        />
                        <TextInput 
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            state={user.lastName} 
                            change={onInputChange} 
                        />
                        <TextInput 
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            state={user.email} 
                            change={onInputChange} 
                        />
                        <TextInput 
                            type="text"
                            name="phone"
                            placeholder="+995 5"
                            state={user.phone} 
                            change={onInputChange}
                        />
                    </div>
                <p className="pageBar">A pageBar is going to be right here</p>
            </div>
            <div className="panel-right">
                <h1 className="title-right">Redberry Origins</h1>
                <p className="p-main">You watch “What? Where? When?” Yeah. Our founders used to play it. That&#39;s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇</p>
            </div>
        </div>
    )
}

export default PersonalInfo;