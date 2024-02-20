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
      console.log(event.target.files);

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
  );
}

export default FileUploader;
