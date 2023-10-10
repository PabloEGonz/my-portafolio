import { NextPage } from 'next';
import React, { ReactNode }  from 'react';
import ReactPortal from './ReactPortal';
interface ModalProps {
  children: ReactNode
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: NextPage<ModalProps> = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId='portal-modal-container'>
      <div id='my_modal_3' className='modal z-40 bg-black'>
        <div className='modal-box'>
          <form method='dialog'>
            <button
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={handleClose}
            >
              ✕
            </button>
          </form>
          <div>{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
