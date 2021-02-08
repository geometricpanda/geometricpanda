import { EmbeddedIframeLayout } from './embedded-iframe-layout';

jest.mock('../blocks/iframe', () => ({
  IFrame: ({ onLoad }) => <div data-test-id={'iframe-mock'} />,
  default: null
}));

import renderer from 'react-test-renderer';
import React from 'react';
import { IFrame, IFrameContainer } from '../blocks';

describe('EmbeddedIframeLayout', () => {

  it('should show a loading block', () => {
    const tree = renderer.create(<EmbeddedIframeLayout src={'https://www.google.com'} />);
    const testInstance = tree.root;
    const loadingBlocks = testInstance.findAllByProps({ 'data-test-id': 'loading' });
    expect(loadingBlocks.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });

  it('should show an error block if loading has not completed within 10 seconds', () => {
    jest.useFakeTimers();

    const tree = renderer.create(<EmbeddedIframeLayout src={'https://www.google.com'} />);
    const testInstance = tree.root;

    renderer.act(() => jest.advanceTimersByTime(10000));

    const errorBlocks = testInstance.findAllByProps({ 'data-test-id': 'error' });
    expect(errorBlocks.length).toBe(1);
    expect(tree).toMatchSnapshot();

    jest.useRealTimers();
  });

  it('should only show the iframe block on success', () => {
    jest.useFakeTimers();

    const tree = renderer.create(<EmbeddedIframeLayout src={'https://www.google.com'} />);
    const testInstance = tree.root;

    const iFrame = testInstance.findByType(IFrame);

    renderer.act(() => {
      iFrame.props.onLoad();
      jest.advanceTimersByTime(10000);
    });

    const errorBlocks = testInstance.findAllByProps({ 'data-test-id': 'error' });
    const loadingBlocks = testInstance.findAllByProps({ 'data-test-id': 'loading' });

    expect(errorBlocks.length).toEqual(0);
    expect(loadingBlocks.length).toEqual(0);
    expect(iFrame.props['data-test-loaded']).toBeTruthy();
    expect(tree).toMatchSnapshot();

    jest.useRealTimers();
  });


});
