import Header from './Header';
import React from 'react';
import { IUserExt } from '../models/IUser';
import addIdToUserFields from '../utils/addIdToUserFields';
import { userData } from '../data/user-data';
import Form from './Form';

const userExt: IUserExt = addIdToUserFields(userData);

function DocsUpload(): React.JSX.Element {
  return (
    <>
      <Header user={userExt} />
      <Form user={userExt} />
    </>
  );
}

export default DocsUpload;
