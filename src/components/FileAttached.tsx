function FileAttached({ fileName }: { fileName: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="h-12">
        <img src="./img/icons/file.svg" alt="Иконка файла" />
      </div>
      <div className="flex justify-center flex-col text-gray-500">
        <div>{fileName}</div>
        <div>Вы загрузили</div>
      </div>
      <div className="flex gap-4 items-center sm:ml-auto">
        <button className="btn-outline btn-add"></button>
        <button className="btn-outline btn-remove"></button>
      </div>
    </div>
  );
}

export default FileAttached;
