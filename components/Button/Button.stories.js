import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button')
  .add('Button default', () => (
    <Button text="FakeText"/>
  ))
  .add('Button with class button-primary', () => (
    <Button classes={['button-primary']} text="FakeText"/>
  ))
  .add('Button with class button-danger', () => (
    <Button isDanger={true} text="FakeText"/>
  ))
  .add('Button with isDisabled=true', () => (
    <Button isDisabled={true} text="FakeText"/>
  ))