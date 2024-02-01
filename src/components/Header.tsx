import { IUserExt } from '../models/IUser';
import convertDateFormat from '../utils/convertDateFormat';

function Header({ user }: { user: IUserExt }) {
  const convertDate = convertDateFormat(user.dateOfBirth);

  return (
    <header className="py-5">
      <h1 className="text-3xl font-bold leading-10 mb-2">
        {user.lastName} {user.firstName} {user.patronymic}
      </h1>
      <div>
        <span className="mt-5">Дата рождения: </span>
        <span className="text-gray-500">
          <time>{convertDate}</time>
        </span>
      </div>
    </header>
  );
}

export default Header;
