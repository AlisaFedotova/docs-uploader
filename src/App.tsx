import { Provider } from 'react-redux';

import DocsUpload from './components/DocsUpload';
import { store } from './store/store';

function App() {
  return (
    <main className="p-5 sm:mt-4 max-w-md m-auto bg-zinc-100 sm:rounded-lg border border-gray-200">
      <Provider store={store}>
        <DocsUpload />
      </Provider>
    </main>
  );
}

export default App;
