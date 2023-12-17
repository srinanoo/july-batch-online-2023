import { useState } from "react";

export function MarksComponent(props) {

    const [marksObj, setMarksObj] = useState({
        subject: props.subject,
        mark: props.mark
    });
    const handleMarks = () => {
        setMarksObj({
            subject: "NodeJs",
            mark: 50,
        });
    }

    console.log("Marks Component");
    return (
        <>
            <h2>Marks Component</h2>
            <p>Subject: {marksObj.subject}</p>
            <p>Mark: {marksObj.mark}</p>
            <p><button onClick={handleMarks}>Change Mark</button></p>
            <hr />
        </>
    )
}