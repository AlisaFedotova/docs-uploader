import FileAttached from './FileAttached';
import { IScanTypeExt } from '../models/IUser';
import { useDispatch } from "react-redux";
import { updateFirstDocument } from "../store/slice";
import Popup from './Popup';
import { useState } from 'react';

function DocItem({ pageName, required, id }: IScanTypeExt) {
  const [show, setShow] = useState(false);

  // const { fields } = useForm();
  
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    console.log('Eeeeevent: ', event);

    dispatch(updateFirstDocument(event.target.value));
  };

  return (
    <div className="mt-3 py-3 border-b border-gray-200 last:border-0">
      <p className="mb-3">
        {pageName}
        {required && ' (обязательно)'}
      </p>
      {/* {fields[id] && <FileAttached fileName={fields[id]} />} */}
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
          onClick={() => setShow(true)}>
          Пример
        </button>
        <Popup isOpen={show}>
          Hello there!
          <br />
          <button
            onClick={() => {
              setShow(false);
            }}>
            Продолжить
          </button>
        </Popup>
      </div>
    </div>
  );
}

export default DocItem;
