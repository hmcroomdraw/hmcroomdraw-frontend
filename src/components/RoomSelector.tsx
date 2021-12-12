import {SetStateAction, useState} from "react";
import '../styles/Home.css';
import * as events from "events";


function RoomSelector(props: any) {
    const [activeRoom, setActiveRoom] = useState('');
    const handleRoomClick = (e: any) => {
        e.preventDefault();
        setActiveRoom(e.currentTarget.value);
    }

    return (<div>
    {props.floorData.image && <img src={props.floorData.image.url} height={400} width={400} alt={`floor plan`}
    useMap={"#floorplan"}/>}
            <map id={"floorplan"} name={"floorplan"}>
                <area className={"buttons"} shape={"rect"} coords={"0,10,0,10"} href={"www.google.com"} alt={"room map"}/>
            </map>
            {/*<map id={"floorplan"} name={"floorplan"}>*/}
            {/*    {props.floorData.room_coordinates.map((room:any) => {*/}
            {/*        <area shape={"rect"} coords={`${room.x+10}, ${room.x-10}, ${room.y+10}, ${room.y-10}`}*/}
            {/*              href="www.google.com" alt={'room mapping'} onClick={handleRoomClick}/>*/}
            {/*    })}*/}
                {/*{room_coords && Object.keys(room_coords).map((room:any) =>*/}
                {/*{*/}
                {/*    <area shape={"rect"} coords={`${room_coords.room.x+10}, ${room_coords.room.x-10}, ${room_coords.room.y+10}, ${room_coords.room.y-10}`}*/}
                {/*    onClick={()=>handleRoomClick(room)} alt={`${room}`} />*/}
                {/*})*/}
                {/*}*/}
            {/*</map>*/}

        </div>
    )
}

export default RoomSelector;