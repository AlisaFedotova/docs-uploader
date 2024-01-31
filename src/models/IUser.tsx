interface IBaseScanType {
  pageName: string;
  required: boolean;
}

interface IScanType extends IBaseScanType {}

interface IScanTypeExt extends IBaseScanType {
  id: string;
  docName?: string;
}

interface IBaseDocument {
  documentName: string;
}

interface IDocument extends IBaseDocument {
  scanTypes: Array<IScanType>;
}

interface IDocumentExt extends IBaseDocument {
  id: string;
  scanTypes: Array<IScanTypeExt>;
}

interface IBaseUser {
  firstName: string;
  lastName: string;
  patronymic: string;
  dateOfBirth: string;
}

interface IUser extends IBaseUser {
  documents: Array<IDocument>;
}

interface IUserExt extends IBaseUser {
  documents: Array<IDocumentExt>;
}

export type {
  IUser,
  IDocument,
  IScanType,
  IUserExt,
  IDocumentExt,
  IScanTypeExt,
};
