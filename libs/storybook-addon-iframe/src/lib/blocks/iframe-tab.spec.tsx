import React from 'react';
import renderer from 'react-test-renderer';
import { IFrameTab } from './iframe-tab';
import { EmbeddedIframeLayout, GenericLayout } from '../layouts';
import { NotFoundIcon } from '../icons';


describe('iFrame Tab', () => {


  it('should render an EmbeddedIframeLayout when iframeSrc is provided', () => {
    const parameters: unknown = { iframeSrc: 'https://www.google.com' };
    const tree = renderer.create(<IFrameTab parameters={parameters} />);
    const testInstance = tree.root;
    expect(testInstance.findByProps({ 'data-test-id': 'EmbeddedIframeLayout' })).toBeTruthy();
  });

  it('should render a GenericLayout when iframeSrc is not provided', () => {
    const parameters: unknown = {};
    const tree = renderer.create(<IFrameTab parameters={parameters} />);
    const testInstance = tree.root;
    expect(testInstance.findByType(NotFoundIcon)).toBeTruthy();
    expect(testInstance.findByProps({ 'data-test-id': 'GenericLayout' })).toBeTruthy();
  });

});
