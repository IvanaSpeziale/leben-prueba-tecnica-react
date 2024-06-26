import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import React from 'react';
import App from './app';

test('should render the banner', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const banner = screen.getByRole('banner');
  expect(banner).toBeInTheDocument();
});
