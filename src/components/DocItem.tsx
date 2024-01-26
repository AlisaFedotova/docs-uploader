function DocItem({
  text,
  required = false,
}: {
  text: string;
  required?: boolean;
}) {
  return (
    <div className="mt-3 py-3 border-b border-gray-200 last:border-0">
      <p>
        {text}
        {required && ' (обязательно)'}
      </p>
      <div className="flex mt-2">
        <button className="btn-primary">Прикрепить</button>
        <button className="btn-transparent ml-auto">Пример</button>
      </div>
    </div>
  );
}

export default DocItem;
