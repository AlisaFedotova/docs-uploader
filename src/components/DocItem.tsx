import FileAttached from './FileAttached';
import { IScanTypeExt } from '../models/IUser';
import { useDispatch } from 'react-redux';
import { updateFirstDocument, validateForm } from '../store/docsUploadSlice';
import Popup from './Popup';
import { useState } from 'react';

function DocItem({ pageName, required, id, docName }: IScanTypeExt) {
  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState(null);

  // const { fields } = useForm();

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    console.log('Eeeeevent: ', event);

    setFileName(event.target.value);
    dispatch(updateFirstDocument(event.target.value));
    dispatch(validateForm());
  };

  return (
    <div className="mt-3 py-3 border-b border-gray-200 last:border-0">
      <p className="mb-3">
        {pageName}
        {required && ' (обязательно)'}
      </p>
      {fileName && <FileAttached fileName={fileName} />}
      <div className="flex">
        <div className="">
          <div className="relative cursor-pointer inline-block py-2">
            <input
              type="file"
              id={id}
              name={id}
              form="docs-form"
              accept="image/png, image/jpeg, image/heic, image/heif"
              className="absolute inset-0 opacity-0"
              onChange={handleChange}
              required={required}
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
        <Popup isOpen={show} title={pageName} docName={docName ? docName : ''}>
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
