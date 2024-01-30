import { ReactNode, useEffect, useRef } from 'react';

function Popup({ isOpen, children }: { isOpen: boolean; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    console.log('popup');

    if (!isOpen) {
      return;
    }

    const dialog = ref.current;

    if (!dialog) {
      console.error('Popup not found');
      return;
    }

    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}

export default Popup;
