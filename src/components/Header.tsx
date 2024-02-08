import convertDateFormat from '../utils/convertDateFormat';

function Header(props: {
  dateOfBirth: string;
  lastName: string;
  firstName: string;
  patronymic: string;
}) {
  const convertDate = convertDateFormat(props.dateOfBirth);

  return (
    <header className="py-5">
      <h1 className="text-3xl font-bold leading-10 mb-2">
        {props.lastName} {props.firstName} {props.patronymic}
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
