import { useRef, useState } from "react";

export default function FormComponent() {

    let usernameRef = useRef("");
    let passwordRef = useRef("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleDOM = () => {
        let username = document.getElementById("txtUsername").value;
        let password = document.getElementById("txtPassword").value;
        console.log("DOM WAY.....");
        console.log(username + " " + password);
    }

    const handleUseRef = () => {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        console.log("USEREF WAY.....");
        console.log(username + " " + password);
    }

    const handleUsername = (e) => {
        // console.log(e.target.value);
        console.log(e.target.id);
        setUsername(e.target.value);
    }

    const handleSubmit = () => {
        console.log(username); // state variable
        console.log(password); // state variable
    }

    return (
        <>
            <h1>Form Component</h1>

            <h3>Form Handling</h3>

            <p>1. DOM Way - Impure React Component - LEAST POSSIBLE WAY</p>
            <p><input type="text" id="txtUsername" placeholder="Username:" /></p>
            <p><input type="text" id="txtPassword" placeholder="Password:" /></p>
            <p><button onClick={handleDOM}>Submit</button></p>

            <p>2. Half React / DOM - SOMETIMES / RARELY</p>
            <p><input type="text" ref={usernameRef} placeholder="Username:" /></p>
            <p><input type="text" ref={passwordRef} placeholder="Password:" /></p>
            <p><button onClick={handleUseRef}>Submit</button></p>

            <p>3. Pure React Component Way - MOST RECOMMENDED / USUAL</p>
            <p><input type="text" placeholder="Username:" className="clsInput" id="txtUser" onChange={handleUsername} /></p>
            <p><input type="text" placeholder="Password:" onChange={(e) => setPassword(e.target.value)} /></p>
            <p><button onClick={handleSubmit}>Submit</button></p>
        </>
    )
}