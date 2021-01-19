import { render, fireEvent } from '@testing-library/react';
import Modal from '../Modal';
import todos from 'js/components/todos/actions/data'

const onConfirm = jest.fn();
const onClose = jest.fn();

describe('Modal', () => {
  it('renders the modal', () => {
    const { container } = render(
      <Modal  todo={todos[0]} />
    );
    expect(container.querySelector('.modal')).toBeInTheDocument()
  });

  it('fires the onConfirm event and close event on clicking delete', () => {
    const { container } = render(
      <Modal {...{onConfirm, onClose}} todo={todos[0]} />
    );
    const deleteButton = container.querySelector('.btn-modal-delete')
    fireEvent(
      deleteButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    expect(onConfirm).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)
  });

  it('fires only the close event on clicking delete', () => {
    const { container } = render(
      <Modal {...{onConfirm, onClose}} todo={todos[0]} />
    );
    const cancelButton = container.querySelector('.btn-cancel')
    fireEvent.click(cancelButton)

    expect(onConfirm).toHaveBeenCalledTimes(0)
    expect(onClose).toHaveBeenCalledTimes(1)
  });
})
