import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from './app.tsx';
import store from '../../store/index.ts';

test('should render the banner', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const banner = screen.getByRole('banner');
  expect(banner).toBeInTheDocument();
});
