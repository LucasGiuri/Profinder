import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form';

jest.mock('../Selectors/Selectors', () => 'Selectors');
jest.mock('../Button/Button', () => 'Button');

describe('Form', () => {
  it('Form basic render snapshoot', () => {
    const selectors = [{}];
    const component = renderer.create(
      <Form selectors={selectors} total={1} onAddClick={jest.fn()} onSelectChange={jest.fn()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })


  it('Form prop onAddClick is triggered. onClick prop should be called as expected', () => {
    const onAddClick = jest.fn();
    const selectors = [{}];
    const componentToTest = (
      <Form selectors={selectors} total={1} onAddClick={onAddClick} onSelectChange={jest.fn()} />
    );
    const tree = renderer.create(componentToTest);
    const button = tree.root.findByType("Button");
    button.props.onClick();
    expect(onAddClick).toHaveBeenCalledTimes(1);
    expect(onAddClick).toHaveBeenCalledWith();
  })
})
