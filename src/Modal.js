import React from 'react'

const Modal = props => (
  <div className='ModalWrapper'>
    <div className='modal'>
      <span className='close' onClick={props.closeModal}>X</span>
      <div className='modal-body'>
        {props.children}
      </div>
    </div>
  </div>
)

export default Modal