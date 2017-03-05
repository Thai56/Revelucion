import { expect, renderComponent } from '../helpers/test_helper';
import React from 'react';
import DirectionsContainer from '../../containers/DirectionsContainer';
import {Header} from '../../containers/DirectionsContainer';
// console.log('this is header before render', Header);
// describe('DirectionsContainer', () => {
//   let component;
//   beforeEach(() => {
//     component = renderComponent(DirectionsContainer);
//   });
// //  =  =  Cannot find map could possible be due to async  =  =  =  =  =  =
// // ** Warning: Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.
// // If you're looking for built-in support to load it for you, use the "async/ScriptjsLoader" instead.
// // See https://github.com/tomchentw/react-google-maps/pull/168 **
//
//   // it('should have class Directions-container',() => {
//   //   expect(component.find('header')).to.exist;
//   // });
//
//   // =  =  I will add the header anyways and have to find a way to test for this later =  =  =  =
//
//
// });
// //   =  =  Have a seperate Describe function here because Directions Container
//             // cannot identify maps from google maps see error above  =  =  =  =
// describe('Header from DirectionsContainer', () => {
//   let component;
//   beforeEach(() => {
//     component = renderComponent(Header);
//   });
//   it('should have class directions-header', () => {
//     expect(component).to.exist;
//   });
// });
