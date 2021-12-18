# HOW TO INSTALL
1. [Install NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Clone this repo: `git clone https://github.com/hmcroomdraw/hmcroomdraw-frontend.git`
3. Clone the backend repo from `https://github.com/hmcroomdraw/hmcroomdraw-backend.git`
4. Checkout to the server branch using `git checkout server`
5. Follow the instructions to start the server
6. Run `npm install`
7. Run `npm start`


----
## TABLE OF CONTENTS
1. APP -> Handles the Sign In and MapDisplay Components. The center of this app.
2. SIGNIN -> Handles Signing In by a user. As long as the input field is not empty, a user will be provided access. Authorization not implemented.
3. MAPDISPLAY -> Fetches information about the resHalls available from the server and passes it along to the ResHallsSelector component.
4. RESHALLSSELECTOR -> Receives a list of reshalls from MapDisplay, displays it as buttons. Upon the onClick event being fired on one of the buttons, will pass along the list of floors and related information by fetching from the server along to the FloorPlanSelector component.
5. FLOORPLANSELECTOR -> Receives information from the ResHallselector component and displays the floors available as buttons. Upon the onClick event being fired on 6. one of the buttons, will pass along the list of rooms and their information along to the RoomSelector component.
7. ROOMSELECTOR -> Receives information on the rooms available in a particular floor. Displays a floor plan map and has clickable points on the map. Upon the onClick event being fired on these clickable points, it passes the information about the room to the RoomInformationModal component.
8. ROOMINFORMATIONMODAL -> Recieves information about the room which it displays as a model. There are two options OK/Cancel. If clicked on OK, that is the confirmation of the selection of that room, which it will display as a simple HTML text on the main page.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
