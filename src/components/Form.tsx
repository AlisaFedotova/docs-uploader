import { IDocumentExt, IScanTypeExt, IUserExt } from '../models/IUser';
import DocSection from './DocSection';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function defineRequiredOptions(userData: IUserExt): Array<string> {
  const arr = new Array<string>();
  userData.documents.forEach((document: IDocumentExt) => {
    let requiredScanTypes = document.scanTypes
      .map((scanType: IScanTypeExt) => (scanType.required ? scanType.id : ''))
      .filter((index: string) => index !== '');

    arr.push(...requiredScanTypes);
  });

  return arr;
}

const isFormValid = (
  fields: { [key: string]: boolean },
  requiredFields: Array<string>,
): boolean => {
  if (Object.keys(fields).length === 0) {
    return false;
  }

  for (const requiredField of requiredFields) {
    if (!fields[requiredField]) {
      return false;
    }
  }

  console.log('form is valid');

  return true;
};

function Form(props: { user: IUserExt }) {
  const formRef = useRef<HTMLFormElement>(null);
  const value: { [key: string]: boolean } = useSelector(
    (state: any) => state.docsUpload.fields,
  );
  const [isDisabled, setDisabled] = useState(true);

  const requiredFields: Array<string> = defineRequiredOptions(props.user);

  console.log('requiredFields', requiredFields);

  React.useEffect(() => {
    console.log('Value changed:', value);

    setDisabled(!isFormValid(value, requiredFields));
  }, [value]);

  return (
    <form
      className="rounded-lg bg-white border border-gray-200"
      name="docs-form"
      ref={formRef}>
      {props.user.documents.map((document) => (
        <DocSection document={document} key={document.id} />
      ))}
      <div className="m-5 mt-8">
        <button
          className="btn-primary w-full"
          type="submit"
          disabled={isDisabled}>
          Отправить
        </button>
      </div>
    </form>
  );
}

export default Form;
