import { useState } from 'react';

import Popup from './Popup';

function FileAttached(props: {
  fileName: string;
  fileSrc: string;
  docName: string;
  title: string;
}) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-wrap gap-3 mb-3">
      <div className="h-12">
        <button type="button" onClick={() => setShow(true)}>
          <img src="./img/icons/file.svg" alt="Иконка файла" />
        </button>
      </div>
      <div className="flex justify-center flex-col text-gray-500">
        <div>{props.fileName}</div>
        <div>Вы загрузили</div>
      </div>
      <div className="flex gap-4 items-center sm:ml-auto">
        <button type="button" className="btn-outline btn-add"></button>
        <button type="button" className="btn-outline btn-remove"></button>
      </div>
      <Popup
        isOpen={show}
        docName={props.docName}
        imgSrc={props.fileSrc}
        title={props.title}>
        <button
          type="button"
          className="btn-primary w-full"
          onClick={() => setShow(false)}>
          Продолжить
        </button>
      </Popup>
    </div>
  );
}

export default FileAttached;
