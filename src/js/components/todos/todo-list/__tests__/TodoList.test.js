import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';
import todos from '../../actions/data'


test('renders the todo list', () => {
  const { container } = render(
    <TodoList todos={todos} />
  );
  expect(container.querySelector('.todo-list')).toBeInTheDocument()
  const items = screen.getAllByRole('listitem')
  expect(items.length).toEqual(todos.length)
});
