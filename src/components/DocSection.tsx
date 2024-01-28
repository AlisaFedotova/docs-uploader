import DocItem from './DocItem';
import { IDocumentExt } from '../models/IUser';

function DocSection({ document }: { document: IDocumentExt }) {
  return (
    <section className="px-4 pt-7 pb-3 border-b border-gray-200">
      <h2 className="text-xl font-bold">{document.documentName}</h2>
      {document.scanTypes.map((scanType, index) => (
        <DocItem
          pageName={scanType.pageName}
          required={scanType.required}
          id={document.id}
          key={index}
        />
      ))}
    </section>
  );
}

export default DocSection;
