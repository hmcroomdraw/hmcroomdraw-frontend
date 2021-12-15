import React, {useState} from "react";
import '../styles/Home.css';
import ImageMapper from 'react-img-mapper';
import RoomInformationModal from "./RoomInformationModal";


function RoomSelector(props: any) {
    const [activeRoom, setActiveRoom] = useState('room1');
    const [modalOn, setModalOn] = useState(false);
    const [confirmedRoom, setConfirmedRoom] = useState('');
    const [roomInfo, setRoomInfo] = useState({});

    function handleClick(room: any) {
        setActiveRoom(room.name);
        setRoomInfo(props.floorData.rooms.filter((Room: any) => Room.id === activeRoom));
        toggleModal();
    }

    function toggleModal() {
        setModalOn(!modalOn);
    }

    function handleOk(id: string) {
        setConfirmedRoom(id);
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

    console.log(confirmedRoom);
    return (
        <div>
            <h2>You have selected {confirmedRoom} ! </h2>
            <div className={modalOn ? 'hide': ''}>
            <ImageMapper src={URL} map={MAP} height={400} width={400}
            onClick={(area) => {handleClick(area)}}/>
            </div>
            {modalOn && <RoomInformationModal roomInfo={roomInfo}
            onClose={toggleModal} onOK={handleOk}/>}
        </div>
    )
}

export default RoomSelector;