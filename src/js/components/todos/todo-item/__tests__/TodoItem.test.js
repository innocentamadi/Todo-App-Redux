import { render, screen } from '@testing-library/react';
import TodoItem from '../TodoItem';
import todos from '../../actions/data'


test('renders the todo item', () => {
  const { container } = render(
    <TodoItem todo={todos[0]} />
  );
  expect(container.querySelector('.todo-item')).toBeInTheDocument()
  expect(screen.getByText(todos[0].title)).toBeInTheDocument()
});
