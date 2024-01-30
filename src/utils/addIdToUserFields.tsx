import {
  IDocument,
  IDocumentExt,
  IScanType,
  IScanTypeExt,
  IUser,
  IUserExt,
} from '../models/IUser';
import { v4 as uuidv4 } from 'uuid';

function addIdToUserFields(user: IUser): IUserExt {
  function addIdToScanTypes(scanTypes: IScanType[]): IScanTypeExt[] {
    return scanTypes.map((scanType) => ({
      ...scanType,
      id: uuidv4(),
    }));
  }

  function processDocuments(documents: IDocument[]): IDocumentExt[] {
    return documents.map((document) => ({
      ...document,
      scanTypes: addIdToScanTypes(document.scanTypes),
      id: uuidv4(),
    }));
  }

  const extendedUser: IUserExt = {
    firstName: user.firstName,
    lastName: user.lastName,
    patronymic: user.patronymic,
    dateOfBirth: user.dateOfBirth,
    documents: processDocuments(user.documents),
  };

  return extendedUser;
}

export default addIdToUserFields;
