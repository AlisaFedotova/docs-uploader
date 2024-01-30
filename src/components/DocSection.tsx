import DocItem from './DocItem';
import { IDocumentExt } from '../models/IUser';

function DocSection({ document }: { document: IDocumentExt }) {
  return (
    <section className="px-4 pt-7 pb-3 border-b border-gray-200">
      <h2 className="text-xl font-bold">{document.documentName}</h2>

      {document.scanTypes.map((scanType) => (
        <DocItem
          pageName={scanType.pageName}
          required={scanType.required}
          id={scanType.id}
          key={scanType.id}
        />
      ))}
    </section>
  );
}

export default DocSection;
