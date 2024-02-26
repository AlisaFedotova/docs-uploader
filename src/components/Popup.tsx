import { useEffect, useRef } from 'react';

function Popup(props: {
  isOpen: boolean;
  title: string;
  docName: string;
  imgSrc: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;

    if (!props.isOpen || !dialog) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dialog === event.target) {
        props.onClose();
      }
    };

    const showModal = () => {
      dialog.showModal();
      document.addEventListener('mousedown', handleClickOutside);
    };

    const closeModal = () => {
      dialog.close();
      document.removeEventListener('mousedown', handleClickOutside);
    };

    showModal();

    return () => {
      closeModal();
    };
  }, [props.isOpen, props.onClose]);

  return (
    <dialog ref={ref} className="p-0 border-0 rounded-lg">
      <div className="p-5 m-auto max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          {props.docName} ({props.title})
        </h2>
        <img
          className="mb-3 rounded-lg"
          src={props.imgSrc}
          alt="Превью документа"
        />
        <button
          type="button"
          className="btn-primary w-full"
          onClick={() => props.onClose()}>
          Продолжить
        </button>
      </div>
    </dialog>
  );
}

export default Popup;
