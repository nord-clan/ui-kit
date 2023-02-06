import * as React from 'react';
import renderer from 'react-test-renderer';

const App = () => <h1>Test App</h1>;

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
