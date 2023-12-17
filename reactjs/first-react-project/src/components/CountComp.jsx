import { useState } from "react";

export function CountComponent() {

    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(1);
    }

    console.log("Count Component");
    return (
        <>
            <h2>Count Component</h2>
            <p>Count: {count}</p>
            <p><button onClick={handleCount}>Change Count</button></p>
            <hr />
        </>
    )
}