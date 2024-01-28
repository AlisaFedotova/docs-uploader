import FileAttached from '../components/FileAttached';
import { IScanType } from '../models/IUser';

function DocItem({ pageName, required }: IScanType) {
  return (
    <div className="mt-3 py-3 border-b border-gray-200 last:border-0">
      <p>
        {pageName}
        {required && ' (обязательно)'}
      </p>
      <div className="flex mt-2">
        <div className="mt-3">
          <div className="relative cursor-pointer inline-block py-2">
            <input
              type="file"
              accept="image/png, image/jpeg, image/heic, image/heif"
              className="absolute inset-0 opacity-0"
            />
            <span className="btn-primary">Прикрепить</span>
          </div>
        </div>
        <button className="btn-transparent ml-auto">Пример</button>
      </div>
    </div>
  );
}

export default DocItem;
