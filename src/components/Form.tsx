import { IUserExt } from '../models/IUser';
import DocSection from './DocSection';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

function Form(props: { user: IUserExt }) {
  const formRef = useRef<HTMLFormElement>(null);

  // const isValid = () => {
  //   if (formRef) {
  //     console.log("formRef.current", formRef.current);
  //     if (formRef.current) console.log("isFormValid", isFormValid(formRef.current));
  //   }
  //   return formRef.current ? !isFormValid(formRef.current) : false;
  // };

  // const value = useSelector((state: any) => state.docsUpload.value);
  const value = useSelector((state: any) => state.docsUpload);

  React.useEffect(() => {
    console.log('Value changed:', value);
    // Здесь можно вызвать другие функции, если это необходимо
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
        <button className="btn-primary w-full" type="submit" disabled>
          Отправить
        </button>
      </div>
    </form>
  );
}

export default Form;
