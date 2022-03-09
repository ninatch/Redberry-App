import Navigation from "../components/Navigation";
import TextInput from "../components/TextInput";

const PersonalInfo = ({user, handleChange}) => {

    return (
        <div className="container">
            <div className="panel-left">            
                <h1 className="title title-left">Hey, Rocketeer, what are your coordinates?</h1>
                    <div className="input-box">
                        <TextInput 
                            type="text"
                            name="first_name"
                            placeholder="First Name" 
                            state={user.first_name}
                            change={handleChange} 
                        />
                        <TextInput 
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            state={user.last_name} 
                            change={handleChange} 
                        />
                        <TextInput 
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            state={user.email} 
                            change={handleChange} 
                        />
                        <TextInput 
                            type="text"
                            name="phone"
                            placeholder="+995 5"
                            state={user.phone} 
                            change={handleChange}
                        />
                    </div>
            </div>
            <div className="panel-right">
                <h1 className="title title-right">Redberry Origins</h1>
                <p className="text-main">You watch “What? Where? When?” Yeah. Our founders used to play it. That&#39;s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇</p>
            </div>
            <Navigation prev="/" next="/skills"/>
        </div>
    )
}

export default PersonalInfo;