import React from 'react';
import { storiesOf } from '@storybook/react';
import Selectors from './Selectors';

storiesOf('Selectors')
  .add('Selectors default', () => {
    const selectors = [{id: 'FakeSelector1', services: [{id: 'FakeOption1', title: 'FakeOption'}]}];
    
    return <Selectors selectors={selectors} />
  })
