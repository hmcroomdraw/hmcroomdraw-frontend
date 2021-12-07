import {useState} from "react";
import RoomSelector from "./RoomSelector";


function FloorPlanSelector(props:any) {
    // props.floors -> ['image': {}, 'rooms':{}]
    interface FloorJSON {
        image?: {url?: string,
        height?: number,
        width?: number},
        rooms?: [],
        roomToPositionMap?:{}
    }
const [activeFloor, setActiveFloor] = useState(2);
const [floorData, setFloorData] = useState<FloorJSON>({});

function handleClick(floor_number: number) {
    setActiveFloor(floor_number);
    setFloorData(props.floors.filter((floor: any) => floor.floor_number === floor_number)[0]);
}
    return (
    <div>
        {props.floors.map((floor: any) =>
        <button key={floor.id} className={activeFloor === floor.floor_number ? 'active floor-buttons':'floor-buttons'} onClick={() =>handleClick(floor.floor_number)}>Floor {floor.floor_number}</button>
        )}
        <br/>
        {floorData.image && <img src={floorData.image.url} height={400} width={400}/>}
    </div>
)
}

export default FloorPlanSelector;