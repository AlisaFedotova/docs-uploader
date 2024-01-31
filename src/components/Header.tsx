import { IUserExt } from '../models/IUser';
import convertDateFormat from '../utils/convertDateFormat';

function Header({ user }: { user: IUserExt }) {
  const convertDate = convertDateFormat(user.dateOfBirth);

  return (
    <header className="py-5">
      <h1 className="text-3xl font-bold leading-10">
        {user.lastName} {user.firstName} {user.patronymic}
      </h1>
      <dl>
        <dt className="mt-5">Дата рождения:</dt>
        <dd className="text-gray-500">
          <time>{convertDate}</time>
        </dd>
      </dl>
    </header>
  );
}

export default Header;
