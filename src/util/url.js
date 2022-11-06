export const getURL = (path) => {
  if (!window) {
    return path;
  }

  return `${window.location.protocol}//${window.location.host}/${path}`
};
