import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('Button recives required props. matchToSnapshot', () => {
    const text = 'FakeText';
    const component = renderer.create(<Button text={text} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Button with isDisabled=true. matchToSnapshot', () => {
    const text = 'FakeText';
    const component = renderer.create(<Button text={text} isDisabled={true}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Button with class button-primary. matchToSnapshot', () => {
    const text = 'FakeText';
    const component = renderer.create(<Button text={text} isDisabled={true} classes={['button-primary']} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Button with class button-danger. matchToSnapshot', () => {
    const text = 'FakeText';
    const component = renderer.create(<Button text={text} isDisabled={true} classes={['button-danger']} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('Button prop onClick is triggered. onClick prop should be called as expected', () => {
    const onClick = jest.fn();
    const text = 'FakeText';
    const componentToTest = (
      <Button text={text} onClick={onClick} />
    );
    const tree = renderer.create(componentToTest);
    const button = tree.root.findByType(Button);
    button.props.onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith();
  })
})