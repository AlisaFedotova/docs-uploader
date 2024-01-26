import DocItem from './DocItem';

function DocSection() {
  return (
    <section className="px-4 pt-7 pb-3 border-b border-gray-200">
      <h2 className="text-xl font-bold">Паспорт</h2>
      <DocItem text="2-3 страница" required={true} />
      <DocItem text="Регистрация" required={true} />
      <DocItem text="Предыдущая регистрация" />
    </section>
  );
}

export default DocSection;
