import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect, renderComponent } from '../helpers/test_helper';
import AdminGalleryContainer from '../../containers/AdminGalleryContainer';
import { shallow } from 'enzyme';

// describe('Component: AdminGalleryContainer', () => {
//   it('renders without exploding', () => {
//     expect(
//       shallow(
//         <AdminGalleryContainer />
//       )
//     ).to.have.class('admin-gallery-container');
//   });
// });

describe('AdminGalleryContainer', () => {
  let component;
  it('should have class admin-gallery-container', () => {
    beforeEach(() => {
      component = renderComponent(AdminGalleryContainer);
    });
    expect(component).to.have.class('admin-gallery-container');
  });
});
