import { expect, renderComponent } from '../helpers/test_helper';
import React from 'react';
import GalleryContainer from '../../containers/GalleryContainer';
console.log(GalleryContainer);
describe('GalleryContainer', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(GalleryContainer);
  });
  it('should exist', () => {
    expect(component).to.have.class('gallery-container');
  });

  it('should have a header with a class of gallery-header', () => {
    expect(component.find('header')).to.have.class('gallery-header');
  });

  it('should have a div with the value of Gallery', () => {
    expect(component.find('.gallery-header-title')).to.have.text('Gallery');
  });

});
