
/** 
HMC Room Draw Frontend
=====================
CS181AA Software Engineering Class Project
------------------------------------------

The HMC Room Draw Frontend uses React with a TypeScript template. It is responsible for rendering
the floor maps, room information and user information that is pulled from the backend.
**/


export default function MapDisplay() {
/*
*  input: the floorplan to be displayed fetched from the backend
*  output: renders the floorplan map display
*/
}

export default function ResHallSelector() {
    /* 
    * displays the Res Halls that are available to be selected
    * input: the list of residence halls Available
    * output: processes the click event and sends the information over to the 
    * MapDisplay component to display
    * will display first floor by default
    */
}

export default function FloorPlanSelector() {
    /* 
    * displays the Floors on the selected Res Hall that are available to be selected
    * input: the list of floors available
    * output: processes the click event and sends the information over to the ResHallSelector component
    * which will pass it along to the MapDisplay component to display
    * will be fist floor initially
    */
}

export default function RoomSelector() {
    /*
    * is going to be embedded into the map display as clickable areas on the image
    * mapped to different coordinates for different rooms
    * input: room information from the res hall and floor selected
    * output: will process the click event and pass it along to the RoomInformationModal
    * which will display the relevant room information through the App component
    */
}

export default function RoomInformationModal () {
    /* displayed when a room is selected
    * input: a selected room
    * output: renders a modal to be displayed with relevant room information through the App component
    */ 
}