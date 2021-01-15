
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../app/index';
import fetch from 'isomorphic-fetch';
import { receivedWeathers } from "../app/redux/appStore/actions"
 
it('renders correctly', () => {
  renderer.create(<Index />);
});

test('There are weathers', () => {
  expect(receivedWeathers()).toBeDefined();
});
