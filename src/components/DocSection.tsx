import { IDocumentExt } from '../models/IUser';

import DocItem from './DocItem';

function DocSection(props: { document: IDocumentExt }) {
  return (
    <section className="px-4 pt-7 pb-3 border-b border-gray-200">
      <h2 className="text-xl font-bold">{props.document.documentName}</h2>

      {props.document.scanTypes.map((scanType) => (
        <DocItem
          pageName={scanType.pageName}
          required={scanType.required}
          id={scanType.id}
          docName={props.document.documentName}
          key={scanType.id}
        />
      ))}
    </section>
  );
}

export default DocSection;
