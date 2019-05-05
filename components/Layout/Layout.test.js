import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

jest.mock('../../components/Header/Header', () => 'Header');

describe('Layout', () => {
  it('Layout basic render snapshoot', () => {
    const component = renderer.create(<Layout> <h1>Fake content </h1></Layout>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
