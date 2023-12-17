import { useState } from "react";

export default function APIComponent() {

    // let fact = "This is my first initially";

    const [fact, setFact] = useState("");

    const handleShowFact = async () => {
        console.log("1");   
        // fetch("https://catfact.ninja/fact")
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("2");
        //         setFact(data.fact);
        //     });
        
        let res = await fetch("https://catfact.ninja/fact");
        let data = await res.json();
        console.log("2");
        setFact(data.fact);
        console.log("3");
    }

    return (
        <>
            <h2>Cat Fact</h2>

            <div>
                <p>Fact: {fact}</p>
            </div>

            <p><button onClick={handleShowFact}>Show Fact</button></p>
        </>
    )
}