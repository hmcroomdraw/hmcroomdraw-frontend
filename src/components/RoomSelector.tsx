import React, {useState} from "react";
import '../styles/Home.css';
import ImageMapper from 'react-img-mapper';
import RoomInformationModal from "./RoomInformationModal";


function RoomSelector(props: any) {
    const [activeRoom, setActiveRoom] = useState('room1');
    const [modalOn, setModalOn] = useState(false);
    const [confirmedRoom, setConfirmedRoom] = useState('');
    const [confirmedFLoor, setConfirmedFloor] = useState(0);
    const [confirmedReshall, setConfirmedReshall] = useState('');
    const [roomInfo, setRoomInfo] = useState({});

    function handleClick(room: any) {
        console.log(room);
        setActiveRoom(room.name);
        toggleModal();
    }

    function toggleModal() {
        setModalOn(!modalOn);
    }

    function handleOk(id: string, reshall: string, floor: number) {
        console.log(id, reshall, floor);
        setConfirmedRoom(id);
        setConfirmedReshall(reshall);
        setConfirmedFloor(floor);
    }

    const URL = props.floorData.image ? props.floorData.image.url : '';
    const MAP = {
        name: 'room-map',
        areas : [
            {
                name: "room1",
                shape: "circle",
                coords: [100, 200, 20],
                preFillColor: "red",
            },
            {
                name: "room2",
                shape: "circle",
                coords: [250, 200, 20],
                preFillColor: "red",
            }
        ]
    }

    return (
        <div>
            <h2>You have selected {confirmedRoom} in floor {confirmedFLoor} of {confirmedReshall}! </h2>
            <div className={modalOn ? 'hide': ''}>
                {props.floorData.image && <ImageMapper src={URL} map={MAP} height={400} width={400}
            onClick={(area) => {handleClick(area)}}/>}
            </div>
            {modalOn && <RoomInformationModal roomInfo={props.floorData.rooms.filter((room: any) => room.id === activeRoom)}
            onClose={toggleModal} onOK={handleOk}/>}
        </div>
    )
}

export default RoomSelector;