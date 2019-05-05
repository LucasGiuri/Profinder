import React from 'react';
import renderer from 'react-test-renderer';
import Selectors from './Selectors';

jest.mock('../Button/Button', () => 'Buttno');

describe('Selectors', () => {
  it('Selectors with required params, basic render snapshoot', () => {
    const selectors = [{id: 'FakeSelector1', services: [{id: 'FakeOption1', title: 'FakeOption'}]}];
    const component = renderer.create(<Selectors selectors={selectors} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Selectors prop onClick is triggered. onClick prop should be called as expected', () => {
    const onClick = jest.fn();
    const selectors = [{id: 'FakeSelector1', services: [{id: 'FakeOption1', title: 'FakeOption'}]}];
    const componentToTest = (
      <Selectors selectors={selectors} onClick={onClick} />
    );
    const tree = renderer.create(componentToTest);
    const buttno = tree.root.findByType("Buttno");
    buttno.props.onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith("FakeSelector1");
  })
})
