
import '../styles/Home.css'
import {useEffect, useState} from "react";
import FloorPlanSelector from "./FloorPlanSelector";

function ResHallSelector(props: any) {
    const [activeHall, setActiveHall] = useState('drinkward');
    const [floorData, setFloorData] = useState({});
    const floors = ['1', '2', '3']; // needs to fetch according to the activeHall getFloorbyResHall

    // TODO: fetches a lot of info
    // figure out the length of the 'floors' field
    // might have to change floors state to int instead of str (we'll see)
    // parse info and according to click, send that info over to room selector
    useEffect(() => {fetch(`http://127.0.0.1:5000/display/residence-hall/${activeHall}/floors`)
        .then(response => {
            if (response.ok) {
                console.log('response', response.json);
                return response.json();
            }
            throw response;
        })
        .then (data => {
            setFloorData(data);
        })
        .catch(err => {
            console.error("error message:", err);
        })}, []);
    return (
        <div>
            {props.list.map((resHall: string) =>
                <button key={resHall} className={activeHall === resHall ? "active buttons":"buttons"} onClick={() => setActiveHall(resHall)}>{resHall}</button>
            )}
            <hr className={"between"}/>
            <div className={"floors"}>
            <FloorPlanSelector floors={floors}></FloorPlanSelector>
            </div>
        </div>
    )
}

export default ResHallSelector;