import React from 'react';

import { userData } from '../data/user-data';
import { IUserExt } from '../models/IUser';
import addIdToUserFields from '../utils/addIdToUserFields';

import Form from './Form';
import Header from './Header';

const userExt: IUserExt = addIdToUserFields(userData);

function DocsUpload(): React.JSX.Element {
  return (
    <>
      <Header
        dateOfBirth={userExt.dateOfBirth}
        lastName={userExt.lastName}
        firstName={userExt.firstName}
        patronymic={userExt.patronymic}
      />
      <Form user={userExt} />
    </>
  );
}

export default DocsUpload;
