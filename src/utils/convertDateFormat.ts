function convertDateFormat(dateString: string): string {
  const parts = dateString.split('-');

  if (parts.length !== 3) {
    throw new Error('Invalid date format');
  }

  const [year, month, day] = parts;
  return `${day}.${month}.${year}`;
}

export default convertDateFormat;
