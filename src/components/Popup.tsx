import { ReactNode, useEffect, useRef } from 'react';

function Popup(props: {
  isOpen: boolean;
  title: string;
  docName: string;
  imgSrc: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!props.isOpen) {
      return;
    }

    const dialog = ref.current;

    if (!dialog) {
      throw new Error('Popup not found');
    }

    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [props.isOpen]);

  return (
    <dialog ref={ref} className="p-5 rounded-lg m-auto max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center">
        {props.docName} ({props.title})
      </h2>
      <img
        className="mb-3 rounded-lg"
        src={props.imgSrc}
        alt="Превью документа"
      />
      {props.children}
    </dialog>
  );
}

export default Popup;
