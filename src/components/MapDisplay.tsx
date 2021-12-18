import '../styles/Home.css'
import ResHallSelector from "./ResHallSelector";
import {useEffect, useState} from "react";

function MapDisplay(props: any) {
    // this will be a fetch call to getAllResHalls
    const [resHalls, setResHalls] = useState([]);
    // const resHalls = ['Atwood', 'Case', 'Drinkward', 'East', 'Linde', 'North', 'Sontag', 'South', 'West']

    useEffect(() => {fetch('http://127.0.0.1:5000/display/residence-halls')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then (data => {
            setResHalls(data);
        })
        .catch(err => {
            console.error("error message:", err);
        })}, []);

    return (
        <div className={"home"}>
                <p>Hi {props.user}!</p>
                <input type={"submit"} className={"sign-out"} value={"Sign Out"} onClick={() => props.onClick('')}/>
            <div id={"res-halls"}>
                <br/>
                <ul>
                    <ResHallSelector list={resHalls}/>
                </ul>
            </div>

</div>
    )
}

export default MapDisplay;