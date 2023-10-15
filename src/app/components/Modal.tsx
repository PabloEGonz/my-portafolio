import { NextPage } from 'next';
import React, { ReactNode } from 'react';
import ReactPortal from './ReactPortal';
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: NextPage<ModalProps> = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId='portal-modal-container'>
      <>
        <div className='fixed left-0 top-0 z-40 h-screen w-screen bg-neutral-800 opacity-50'>
          <div
            id='my_modal_3'
            className='bg-zinc-800 fixed inset-x-96 inset-y-32 box-border flex min-w-fit flex-col overflow-hidden rounded p-5'
          >
            <div className='modal-box'>
              <form method='dialog'>
                <button
                  className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
                  onClick={handleClose}
                >
                  ✕
                </button>
              </form>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </>
    </ReactPortal>
  );
};

export default Modal;
