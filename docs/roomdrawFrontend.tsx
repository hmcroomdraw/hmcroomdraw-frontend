//
// /**
// HMC Room Draw Frontend
// =====================
// CS181AA Software Engineering Class Project
// ------------------------------------------
//
// The HMC Room Draw Frontend uses React with a TypeScript template. It is responsible for rendering
// the floor maps, room information and user information that is pulled from the backend.
// **/
//
// import { useState } from 'react';
//
// export function MapDisplay() {
// /*
// *  input: the floorplan to be displayed fetched from the backend
// *  output: renders the floorplan map display
// * will display first floor by default */
//
//     // Map Display component will serve as the central component that receieves
//     // information from the other components and will display it
//     // pull a list of res hall names from the backend and parse the response
//     const listOfResHalls = fetch('www.backend.com/api');
//
//     // passes this list of reshalls to the ResHallSelector component to process
//     return (
//         <div></div>
//     )
//     // Most null checking and error handling of the data we receive is going to be
//     // done in the backend. When the backend is accounted for, we make sure that
//     // correct data is being passed through the different components with some of our tests
//
// }
//
// export function ResHallSelector() {
//     /*
//     * displays the Res Halls that are available to be selected
//     * input: the list of residence halls Available
//     * output: processes the click event and sends the information over to the
//     * MapDisplay component
//     */
//    // ResHall selector will help us manage the selection of different resHalls
//    // and fetch information consistent with the corresponding Res Hall
//     // designate different res halls as states
//     // Case Drinkward North South East Atwood Sontag Linde
//     const [resHalls, setResHalls] = useState('');
//     // map the listofReshalls to horizontally placed buttons,
//     // on click event will set the state to the name of the reshall
//     function handleClick(resHall) {
//         // this method use the target value from the button to
//         // update the resHalls state and pass the state along to the
//         // FloorPlanSelector
//         // using that state fetch the floor plans for that reshall and update
//         // a variable to be passed along to the FloorPlanSelector component
//         const floorPlans = fetch('www.backend/api/reshall?={reshall}') // appropriate API endpoint
//     }
//
//
//     // will return buttons with the names of Reshalls on them
//     // every button will have an on click event which will be passed along to the FloorPlanSelector component to process further
//     return (
//         <div>
//         </div>
//     )
//     // upon click on a res hall button, fetch all the floor plans from the backend
//     // pass it along to the MapDisplay component
// }
//
// export function FloorPlanSelector() {
//     /*
//     * displays the Floors on the selected Res Hall that are available to be selected
//     * input: the list of floors available
//     * output: processes the click event and sends the information over to the ResHallSelector component
//     * which will pass it along to the MapDisplay component
//     * will be fist floor initially
//     */
//    // FloorPlan selector will help us manage the selection of different floors
//    // and fetch information consistent with the corresponding Floor
//     const [floor, setFloor] = useState('1');
//
//     // designate different floors as states
//     // 1, 2, 3
//     // map the listofFloors to horizontally placed buttons,
//     // on click event will set the state to the name of the floor
//     function handleClick(floor) {
//         // this method use the target value from the button to
//         // update the floors state and pass the state along to the
//         // RoomSelector
//         // using that state fetch the rooms in that floor for that reshall and update
//         // a variable/state to be passed along to the RoomSelector component
//         const Rooms = fetch('www.backend/api/reshall/floor?={reshall}/{floor}') // appropriate API endpoint
//     }
//
//
//     // will return buttons with the names of Floors on them
//     // every button will have an on click event which will be passed along to the RoomSelector component to process further
//     return (
//         <div>
//         </div>
//     )
//     // upon click on a res hall button, fetch all the floor plans from the backend
//     // pass it along to the RoomSelector component which will ultimately pass it along to the MapDisplay component
//
// }
//
// export function RoomSelector() {
//     /*
//     * is going to be embedded into the map display as clickable areas on the image
//     * mapped to different coordinates for different rooms
//     * input: room information from the res hall and floor selected
//     * output: will process the click event and pass it along to the RoomInformationModal
//     * which will display the relevant room information through the App component
//     */
//    // Room selector will help us manage the selection of different rooms in a floor
//    // and fetch information consistent with the corresponding floor
//     const [room, setRoom] = useState('');
//    // this component should recieve a list of all the rooms in that particular floor
//    // with their coordinates in the floor display map
//    // It's main task is to display the target areas as target areas on the map
//    // which upon clicked, will pass the state of the Room to the RoomInformationModel
//
// }
//
// export function RoomInformationModal () {
//     /* displayed when a room is selected
//     * input: a selected room
//     * output: renders a modal to be displayed with relevant room information through the App component
//     */
//
//     //RoomInfoModal will handle displaying additional information to the user
//     // This is in sync with the requirement that we provide more information to the user
//     // so that their decision making process is easier
//     // Unlike the other components displayed above, this component is directly connected to the MapDisplay
//     // component and won't be passing information back to the  room, floor, or reshall components
//
//     // roomInformationModel component will render a modal to be displayed on top of the existing display
//     // this should lower the opacity of the other components in the background and render them not clickable
//     // until the modal is closed by clicking on the close button or a change is confirmed
//     // this component will fetch information about that model and render it in the modal
//     // upon confirmation of the selection of this room, it will also have to update the user information
//     // by calling the appropriate api endpoint
//
//     // The information that will be displayed is to be pulled from the Room Object and additionally
//     // we also intend to show if a room is occupied or unoccupied
// }