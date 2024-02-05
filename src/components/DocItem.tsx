import { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import { IScanTypeExt } from '../models/IUser';
import { updateDocument } from '../store/docsUploadSlice';

import FileAttached from './FileAttached';
import Popup from './Popup';

function DocItem(props: IScanTypeExt) {
  const [show, setShow] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [fileSrc, setFileSrc] = useState<string>('');

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const [file] = event.target.files;
      const reader = new FileReader();

      reader.onload = function (e: ProgressEvent<FileReader>) {
        if (e.target) {
          const result = e.target.result as string;
          setFileSrc(result);
        }
      };

      reader.readAsDataURL(file);

      setFileName(file.name);
      dispatch(updateDocument(props.id));
    }
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
        <div className="">
          <div className="relative cursor-pointer inline-block py-2">
            <input
              type="file"
              id={props.id}
              name={props.id}
              form="docs-form"
              accept="image/png, image/jpeg, image/heic, image/heif"
              className="absolute inset-0 opacity-0"
              onChange={handleChange}
              required={props.required}
            />
            <span className="btn-primary">Прикрепить</span>
          </div>
        </div>
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
