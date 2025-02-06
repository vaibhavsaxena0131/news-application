export const convertFileToBase64URL = async (file) => {
  const reader = new FileReader();
  // Wrap FileReader in a Promise to handle asynchronous reading
  const base64Url = await new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result); // Resolve with Base64 string
    };
    reader.onerror = (error) => reject(error); // Handle read error
    reader.readAsDataURL(file);
  });
  return base64Url;
};
