export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const matchOption = (option, value) => {
  const findData = option.find((el) => el.value === value);

  return findData?.label;
};
