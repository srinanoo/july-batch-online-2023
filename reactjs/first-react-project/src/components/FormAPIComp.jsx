import { useState } from "react";
import axios from "axios";

export default function FormAPIComponent() {

    const [country, setCountry] = useState("India");
    const [universitiesList, setUniversitiesList] = useState([]);

    const handleSearch = async () => {
        console.log(country);

        // Always Recommended. Because "axios" is a ReactJs library. PURE REACT COMPONENT.
        axios.get(`http://universities.hipolabs.com/search?country=${country}`)
            .then(res => {
                console.log(res.data);
                setUniversitiesList(res.data.slice(0, 20));

            });

        // LEAST Recommended. Because "fetch" is a JS method. IMPURE REACT COMPONENT.
        // fetch(`http://universities.hipolabs.com/search?country=${country}`)
        //     .then(res => console.log(res, "FETCH"));

        // fetch(`http://universities.hipolabs.com/search?country=${country}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data); // for India - 431
        //         console.log(data.slice(0, 20));
        //         setUniversitiesList(data.slice(0, 20));

        //         // console.log(universitiesList);
        //         // let temp = [];
        //         // for(let i=0; i<10; i++) {
        //         //     temp.push(data[i]);
        //         // }
        //         // console.log(temp, "top 10 universities"); // for

        //         // let temp1 = [];
        //         // temp1 = data.slice(0, 10);
        //         // console.log(temp1, "top 10 - SLICE");
        //     })
        //     .then(() => {
        //         console.log(universitiesList);
        //     });
    }

    console.log("Country component...");
    return (
        <>
            <h1>List of Universities - {country}</h1>

            <p><input type="text" onChange={(e) => setCountry(e.target.value)} /> <button onClick={handleSearch}>Search</button></p>

            <div className="flex">
                {
                    universitiesList.length > 0
                        ?
                            universitiesList.map((v, i) => {
                                return (
                                    <div key={i}>
                                        <p>{v.name}</p>
                                        <p>{v.web_pages[0]}</p>
                                    </div>
                                )
                            })
                        :
                            <p className="error">No Universities Found for - {country}</p>
                }
            </div>
        </>
    )
}