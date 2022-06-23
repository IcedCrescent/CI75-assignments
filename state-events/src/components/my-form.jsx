import { useState } from 'react';
import './my-form.css';
function MyForm({submitFormData}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("2000-01-01");

    const handleSubmit = (ev) => {
        const data = {
            username: username, 
            password: password,
            dob: dob
        };
        console.log("Child send data");
        submitFormData(data);
        ev.preventDefault();
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <h4>Child form</h4>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" 
                value={username} 
                onChange={ev => setUsername(ev.target.value)}/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/>
            <label htmlFor="dob">Date of birth:</label>
            <input type="date" id="dob" 
                value={dob} 
                onChange={ev => setDob(ev.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default MyForm;