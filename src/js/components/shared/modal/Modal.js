import React from 'react'

//====== INTERNAL ======
import './modal.scss'

class Modal extends React.Component {
  render() {
    const { onConfirm, onClose } = this.props

    return (
      <div className="modal-wrapper">
        <div className="modal">
          <p>
            {this.props.text}
          </p>
          <div className="modal-btn-wrapper">
            <button className="btn-modal btn-modal-delete"
              onClick={() => {
                onConfirm(true);
                onClose() }
              }>
              Delete
            </button>
            <button className="btn-modal"
              onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal