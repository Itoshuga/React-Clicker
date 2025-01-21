import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  isClosing: boolean;
  onCloseStart: () => void;
}

export const Modal: React.FC<ModalProps> = ({ 
  title, 
  onClose, 
  children, 
  isClosing,
  onCloseStart 
}) => {
  const [show, setShow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setShow(true);
    });

    return () => {
      cancelAnimationFrame(timer);
    };
  }, []);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current && !isClosing) {
      onCloseStart();
    }
  };

  const handleModalClose = () => {
    if (!isClosing) {
      onCloseStart();
    }
  };

  return (
    <div 
      ref={overlayRef}
      onClick={handleClickOutside}
      className={`fixed inset-0 z-50 flex items-end justify-center modal-overlay ${show ? 'show' : ''} ${isClosing ? 'closing' : ''}`}
    >
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
      <div 
        className={`relative w-full bg-white neo-border rounded-t-2xl modal-content ${show ? 'show' : ''} ${isClosing ? 'closing' : ''} overflow-hidden`}
        style={{ maxWidth: '42rem', marginBottom: 0 }}
      >
        <div className="sticky top-0 flex items-center justify-between p-4 border-b-3 border-black bg-white">
          <h2 className="text-xl font-bold uppercase">{title}</h2>
          <button 
            onClick={handleModalClose}
            className="p-2 hover:bg-yellow-300 rounded-lg transition-colors neo-border-sm"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};