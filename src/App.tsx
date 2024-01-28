import './App.css';
import DocSection from './components/DocSection';
import { IDocumentExt, IUser, IUserExt } from './models/IUser';
import addIdToUserFields from './utils/addIdToUserFields';

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

const userExt: IUserExt = addIdToUserFields(user);

function App() {
  return (
    <main className="p-5 mt-4 max-w-md m-auto bg-zinc-100 rounded-lg border border-gray-200">
      <header className="py-5">
        <h1 className="text-3xl font-bold leading-10">
          {userExt.lastName} {userExt.firstName} {userExt.patronymic}
        </h1>
        <dl>
          <dt className="mt-5">Дата рождения:</dt>
          <dd className="text-gray-500">
            <time>{userExt.dateOfBirth}</time>
          </dd>
        </dl>
      </header>
      <div className="rounded-lg bg-white border border-gray-200">
        {userExt.documents.map((document) => (
          <DocSection document={document} key={document.id} />
        ))}
        <div className="m-5 mt-8">
          <button className="btn-primary w-full opacity-50" disabled>
            Отправить
          </button>
        </div>
      </div>
      <form method="post" encType="multipart/form-data">
        <div>
          <label htmlFor="image_uploads">
            Choose images to upload (PNG, JPG)
          </label>
          <input
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
            multiple
          />
        </div>
        <div className="preview">
          <p>No files currently selected for upload</p>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </main>
  );
}

export default App;
