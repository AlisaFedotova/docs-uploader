import { useState } from 'react';

import { IScanTypeExt } from '../models/IUser';

import FileAttached from './FileAttached';
import FileUploader from './FileUploader';
import Popup from './Popup';

function DocItem(props: IScanTypeExt) {
  const [show, setShow] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [fileSrc, setFileSrc] = useState<string>('');

  const handleFileLoad = (fileName: string, fileSrc: string) => {
    setFileName(fileName);
    setFileSrc(fileSrc);
  };

  return (
    <div className="mt-3 py-3 border-b border-gray-200 last:border-0">
      <p className="mb-3">
        {props.pageName}
        {props.required && ' (обязательно)'}
      </p>
      {fileName && (
        <FileAttached
          fileName={fileName}
          fileSrc={fileSrc}
          docName={props.docName ? props.docName : ''}
          title={props.pageName}
        />
      )}
      <div className="flex">
        <FileUploader
          id={props.id}
          required={props.required}
          onFileLoad={handleFileLoad}
        />
        <button
          className="btn-transparent ml-auto"
          type="button"
          onClick={() => setShow(true)}>
          Пример
        </button>
        <Popup
          isOpen={show}
          title={props.pageName}
          docName={props.docName ? props.docName : ''}
          imgSrc="./img/blank-image.jpg">
          <button
            type="button"
            className="btn-primary w-full"
            onClick={() => setShow(false)}>
            Продолжить
          </button>
        </Popup>
      </div>
    </div>
  );
}

export default DocItem;
