import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout from './Layout';

storiesOf('Layout')
  .add('Layout default', () => (
    <Layout>
        <h1>Fake Layout</h1>
    </Layout>
  ))
