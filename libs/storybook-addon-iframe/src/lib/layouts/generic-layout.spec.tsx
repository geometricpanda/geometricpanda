import renderer from 'react-test-renderer';
import React from 'react';
import { GenericLayout } from './generic-layout';

describe('GenericLayout', () => {

  const TestIcon = () => <img src={null} alt='test-icon'/>;
  const TestText = () => <p>Lorem Ipsum</p>;

  it('should render and icon and text', () => {
    const layout = (
      <GenericLayout icon={<TestIcon />}>
        <TestText />
      </GenericLayout>
    );

    const tree = renderer.create(layout);
    const testInstance = tree.root;

    expect(testInstance.findByType(TestIcon)).toBeTruthy();
    expect(testInstance.findByType(TestText)).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  it('should render text', () => {
    const layout = (
      <GenericLayout>
        <TestText />
      </GenericLayout>
    );

    const tree = renderer.create(layout);
    const testInstance = tree.root;

    expect(testInstance.findByType(TestText)).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

});
