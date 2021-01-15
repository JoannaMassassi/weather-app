
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../app/index';
import fetch from 'isomorphic-fetch';


it('renders correctly', () => {
  renderer.create(<Index />);
});