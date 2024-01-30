import { IUser } from '../models/IUser';

export const userData: IUser = {
  firstName: 'Тест',
  lastName: 'Тестов',
  patronymic: 'Тестович',
  dateOfBirth: '2000-09-11',
  documents: [
    {
      documentName: 'Паспорт',
      scanTypes: [
        {
          pageName: '2-3 страница',
          required: true,
        },
        {
          pageName: 'Регистрация',
          required: true,
        },
        {
          pageName: 'Предыдущая регистрация',
          required: false,
        },
      ],
    },
    {
      documentName: 'Второй документ',
      scanTypes: [
        {
          pageName: 'Водительское удостоверение 1 страница',
          required: false,
        },
        {
          pageName: 'Водительское удостоверение 2 страница',
          required: false,
        },
      ],
    },
  ],
};
