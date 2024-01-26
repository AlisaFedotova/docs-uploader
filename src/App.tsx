import './App.css';
import DocSection from './components/DocSection';

function App() {
  return (
    <main className="p-5 mt-4 max-w-md m-auto bg-zinc-100 rounded-lg border border-gray-200">
      <header className="py-5">
        <h1 className="text-3xl font-bold leading-10">Тестов Тест Тестович</h1>
        <dl>
          <dt className="mt-5">Дата рождения:</dt>
          <dd className="text-gray-500">
            <time>2000-09-11</time>
          </dd>
        </dl>
      </header>
      <div className="rounded-lg bg-white border border-gray-200">
        <DocSection />
        <DocSection />
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
