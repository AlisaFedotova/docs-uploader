import './App.css';
import DocSection from './components/DocSection';
import { IUser } from './models/IUser';

const user: IUser = {
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

function App() {
  return (
    <main className="p-5 mt-4 max-w-md m-auto bg-zinc-100 rounded-lg border border-gray-200">
      <header className="py-5">
        <h1 className="text-3xl font-bold leading-10">
          {user.lastName} {user.firstName} {user.patronymic}
        </h1>
        <dl>
          <dt className="mt-5">Дата рождения:</dt>
          <dd className="text-gray-500">
            <time>{user.dateOfBirth}</time>
          </dd>
        </dl>
      </header>
      <div className="rounded-lg bg-white border border-gray-200">
        {user.documents.map((document, index) => (
          <DocSection document={document} key={index} />
        ))}
        <div className="m-5 mt-8">
          <button className="btn-primary w-full opacity-50" disabled>
            Отправить
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
