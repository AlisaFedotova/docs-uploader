import FileAttached from './FileAttached';
import { IScanTypeExt } from '../models/IUser';
import { useDispatch } from 'react-redux';
import { updateDocument } from '../store/docsUploadSlice';
import Popup from './Popup';
import { ChangeEvent, useState } from 'react';

function DocItem({ pageName, required, id, docName }: IScanTypeExt) {
  const [show, setShow] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [fileSrc, setFileSrc] = useState<string>('');

  // const { fields } = useForm();

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    console.log('Eeeeevent: ', event);
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e: ProgressEvent<FileReader>) {
        if (e.target) {
          const result = e.target.result as string;
          setFileSrc(result);
        }
      };
      reader.readAsDataURL(file);
    }
    setFileName(file.name);

    const params = {
      id,
      required,
      fileName: file.name,
    };
    dispatch(updateDocument(params));
  };

  return (
    <div className="mt-3 py-3 border-b border-gray-200 last:border-0">
      <p className="mb-3">
        {pageName}
        {required && ' (обязательно)'}
      </p>
      {fileName && (
        <FileAttached
          fileName={fileName}
          fileSrc={fileSrc}
          docName={docName ? docName : ''}
          title={pageName}
        />
      )}
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
        <Popup
          isOpen={show}
          title={pageName}
          docName={docName ? docName : ''}
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
