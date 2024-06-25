import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import store from '../store';

describe('Given the page Register', () => {
  describe('When it is rendered', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ErrorPage></ErrorPage>
        </Provider>
      </MemoryRouter>
    );
    test('Then,', () => {
      const errorMesage = screen.getByText('Unfortunately, not found.');
      expect(errorMesage).toBeInTheDocument();
    });
  });
});
