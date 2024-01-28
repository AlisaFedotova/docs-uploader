interface IScanType {
  pageName: string;
  required: boolean;
}

interface IDocument {
  documentName: string;
  scanTypes: IScanType[];
}

interface IUser {
  firstName: string;
  lastName: string;
  patronymic: string;
  dateOfBirth: string;
  documents: IDocument[];
}

export type { IUser, IDocument, IScanType };
