import {useState} from "react";


function FloorPlanSelector(props:any) {
const [activeFloor, setActiveFloor] = useState('1');
return (
    <div>
        {props.floors.map((floor: string) =>
        <button key={floor} className={activeFloor === floor ? 'active floor-buttons':'floor-buttons'} onClick={() => setActiveFloor(floor)}>Floor {floor}</button>
        )}
    </div>
)
}

export default FloorPlanSelector;