import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'js/store/configureStore'

const store = configureStore()

test('renders the todo app', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const header = screen.getByText(/Todos/i);
  expect(header).toBeInTheDocument();
});
