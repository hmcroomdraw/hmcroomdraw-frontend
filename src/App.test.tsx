import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignIn from "./components/SignIn";
import MapDisplay from "./components/MapDisplay";
import ResHallSelector from "./components/ResHallSelector";
import FloorPlanSelector from "./components/FloorPlanSelector";

describe('<App/> component test', () => {
  it('Sign In should render', () => {
    const AppComponent = shallow(<App/>);
    AppComponent.setState({signedIn: ''});
    const tree = toJson(AppComponent);
    // eslint-disable-next-line jest/valid-expect,@typescript-eslint/no-unused-expressions
    expect(tree).toMatchSnapshot;
  })

  it('should contains the words "Sign In"', () => {
    const loginComponent = shallow(<SignIn />);
    expect(loginComponent.contains('Sign In')).toBe(true);
  });

  it('app should render', () => {
    const AppComponent = shallow(<App/>);
    AppComponent.setState({signedIn: 'j@j.com'})
    const tree = toJson(AppComponent);
    // eslint-disable-next-line jest/valid-expect,@typescript-eslint/no-unused-expressions
    expect(tree).toMatchSnapshot;
  })

  it('map should display', () => {
    const AppComponent = shallow(<App/>);
    AppComponent.setState({signedIn: 'j@j.com'});
    const MapComponent = shallow(<MapDisplay/>);
    MapComponent.setState({resHalls: ['Drinkward', 'Linde']});
    const ResHallComponent = shallow(<ResHallSelector/>);
    ResHallComponent.setState({activeHall: 'drinkward'});
    const FloorPlanComponent = shallow(<FloorPlanSelector/>);
    FloorPlanComponent.setState({activeFloor: 1});
    const tree = toJson(FloorPlanComponent);
    // eslint-disable-next-line jest/valid-expect,@typescript-eslint/no-unused-expressions
    expect(tree).toMatchSnapshot;
  })


})

