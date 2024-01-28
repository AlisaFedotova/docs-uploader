function FileAttached({ fileName }: { fileName: string }) {
  return (
    <div className="flex">
      <div>
        <img
          className="h-16 w-16 p-2"
          src="./img/icons/file.svg"
          alt="Иконка файла"
        />
      </div>
      <div className="flex justify-center flex-col text-gray-500">
        <div>{fileName}</div>
        <div>Вы загрузили</div>
      </div>
      <div className="ml-auto flex gap-4 items-center">
        <button className="btn-outline btn-add"></button>
        <button className="btn-outline btn-remove"></button>
      </div>
    </div>
  );
}

export default FileAttached;
