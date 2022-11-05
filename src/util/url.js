export const getURL = (path) => {
  if (process.env.URL) {
    const baseURL = process.env.URL;
    return `${baseURL}/${path}`;
  }

  return path;
};
