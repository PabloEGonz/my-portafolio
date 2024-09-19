import { NextPage } from 'next';
import React, { ReactNode, useEffect } from 'react';
import ReactPortal from './ReactPortal';
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: NextPage<ModalProps> = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscape);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId='portal-modal-container'>
      <>
        <div className='fixed left-0 top-0 z-40 flex h-screen w-screen justify-center bg-black/50 text-center'>
          <div
            id='my_modal_3'
            className='lg:inset-y-42 fixed inset-y-28 box-border flex h-fit w-11/12 flex-col overflow-hidden rounded-xl border-white bg-white/70 backdrop-blur shadow-xl p-5 lg:w-3/4'
          >
            <form method='dialog'>
              <button
                className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-2xl'
                onClick={handleClose}
              >
                ✕
              </button>
            </form>
            <div className='grid pt-5 lg:grid-cols-5'>{children}</div>
          </div>
        </div>
      </>
    </ReactPortal>
  );
};

export default Modal;
