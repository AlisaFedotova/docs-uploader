import { useMemo, useRef } from 'react';

import { useSelector } from 'react-redux';

import { IDocumentExt, IScanTypeExt, IUserExt } from '../models/IUser';
import { RootState } from '../store/store';

import DocSection from './DocSection';

function defineRequiredOptions(userData: IUserExt): Array<string> {
  return userData.documents.reduce((acc: string[], document: IDocumentExt) => {
    const requiredScanTypes = document.scanTypes
      .filter((scanType: IScanTypeExt) => scanType.required)
      .map((scanType: IScanTypeExt) => scanType.id);

    return acc.concat(requiredScanTypes);
  }, []);
}

const isFormValid = (
  fields: Array<string>,
  requiredFields: Array<string>,
): boolean => {
  if (fields.length === 0) {
    return false;
  }

  for (const requiredField of requiredFields) {
    if (!fields.includes(requiredField)) {
      return false;
    }
  }

  return true;
};

function Form(props: { user: IUserExt }) {
  const formRef = useRef<HTMLFormElement>(null);
  const values: Array<string> = useSelector(
    (state: RootState) => state.docsUpload.fields,
  );
  const requiredFields: Array<string> = useMemo(() => {
    return defineRequiredOptions(props.user);
  }, []);

  const isDisabled = useMemo(() => {
    return !isFormValid(values, requiredFields);
  }, [values]);

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
