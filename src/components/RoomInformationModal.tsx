
import '../styles/Modal.css'

function RoomInformationModal(props:any) {
    const roomInfo = props.roomInfo[0];
    return (
        <div className={"backdrop"}>
            <div className={"modal"}>
                <h2>{roomInfo.id}</h2>
            <div className={"list-info"}>
                <ul>
                    <li key={"room-name"}>Room: {roomInfo.id}</li> <br/>
                    <li key={"suite"}>Suite: {roomInfo.suite}</li> <br/>
                    <li key={"reshall"}>ResHall: {roomInfo.residence_hall_name}</li> <br/>
                    <li key={"floor-num"}>Floor Number: {roomInfo.floor_number}</li>
                </ul>
            </div>
            <div className={"alert-buttons"}>
                <button className={"alert-button"} type={"button"}
                        onClick={props.onClose}>
                    Cancel
                </button>
                <button className={"alert-button"} type={"button"}
                        onClick={() => {
                            props.onClose();
                            props.onOK(roomInfo.id);
                        }}>
                    OK
                </button>
            </div>
            </div>
        </div>
    )

}

export default RoomInformationModal;