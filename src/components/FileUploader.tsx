import { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { updateDocument } from '../store/docsUploadSlice';

function FileUploader(props: {
  id: string;
  required?: boolean;
  onFileLoad: (fileName: string, fileSrc: string) => void;
}) {
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const [file] = event.target.files;
      const reader = new FileReader();

      reader.onload = function (e: ProgressEvent<FileReader>) {
        if (e.target) {
          const result = e.target.result as string;
          props.onFileLoad(file.name, result);
        }
      };

      reader.readAsDataURL(file);

      dispatch(updateDocument(props.id));
    }
  };

  return (
    <div className="inline-block btn-primary p-0 cursor-pointer">
      <input
        type="file"
        id={props.id}
        name={props.id}
        form="docs-form"
        accept="image/png, image/jpeg, image/heic, image/heif"
        className="hidden"
        onChange={handleChange}
        required={props.required}
      />
      <label htmlFor={props.id} className="block py-2 px-4 cursor-pointer">
        Прикрепить
      </label>
    </div>
  );
}

export default FileUploader;
