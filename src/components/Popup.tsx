import { ReactNode, useEffect, useRef } from 'react';

function Popup(props: { isOpen: boolean; title: string; docName:string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    console.log('popup');

    if (!props.isOpen) {
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
  }, [props.isOpen]);

  return (
    <dialog ref={ref} className="p-5 rounded-lg m-auto max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center">{props.docName} ({props.title})</h2>
      <img className='mb-3 rounded-lg' src="./img/blank-image.jpg"></img>
      {props.children}
    </dialog>
  );
}

export default Popup;
