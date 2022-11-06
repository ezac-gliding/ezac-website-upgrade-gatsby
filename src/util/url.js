import { isBrowser } from './browser';

export const getURL = (path) => {
  if (isBrowser()) {
    return `${window.location.protocol}//${window.location.host}/${path}`;
  }

  return path;
};
