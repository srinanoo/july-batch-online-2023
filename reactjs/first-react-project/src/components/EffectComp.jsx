import { useEffect, useState } from "react";

export default function EffectComponent() {
    const [fact, setFact] = useState("");

    // useEffect(() => {
    // });

    const fetchData = () => {
        console.log("Fetching data...");
        // setInterval(() => {
            fetch("https://catfact.ninja/fact")
                .then(res => res.json())
                .then(data => {
                    setFact(data.fact);
                });
        // }, 10000);
    }

    // API calls is always limited based on the no. of requests.
        // in 1 sec there is limit 10 requests...

    // http://universities.hipolabs.com/search?country=India

    useEffect(fetchData, []); // componentDidMount of your Class Component
    // useEffect(fetchData); // componentDidUpdate of your Class Component

    console.log("Effect Component rendered...");

    /*
        Explore useEffect = this is for today 23rd and 24th December

        Explore Form Handling in ReactJs = this is for today 23rd and 24th December

        the following is for the weekly task (23rd to 30th)
            react-hook-form - npm package available for ReactJs for Forms
            formik - npm package available for ReactJs for Forms
    */

    return (
        <>
            <h1>Effect Component</h1>

            <h2>Cat Fact</h2>

            <div>
                <p>Fact: {fact}</p>
            </div>
        </>
    )
}