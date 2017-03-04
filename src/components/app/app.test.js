import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import App from './app';

describe('components/app', () => {

  it('should render', () => {
    const item = renderIntoDocument(
      <App />
    );
    // Assertions
    expect(item).toExist;
  });

});
