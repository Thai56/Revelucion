import React from 'react';
import { expect, renderComponent } from '../helpers/test_helper';
import AdminGalleryContainer from '../../containers/AdminGalleryContainer';

let component;

describe('AdminGalleryContainer', () => {
  beforeEach(() => {
    const props = {banner:['gal1','gal2','gal3']};
    component = renderComponent(AdminGalleryContainer, props, null);
    });
  it('to have class', () => {
    expect(component).to.have.class('admin-gallery-container');
  });

  describe('should render the child component', () => {
    it('should render the child compnent', () => {
      expect(component.find('section')).to.have.class('gallery-container');
    });
  });

  it('should have a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  describe('it shows text in that textarea', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change','new comment');
    });

    it('should display text in textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted should clear the textarea', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });

  });
});
