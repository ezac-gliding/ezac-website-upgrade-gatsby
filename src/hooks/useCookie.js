import { useState } from 'react';
import dayjs from 'dayjs';

/**
 * @author Rafaël Mindreau
 * Exposes cookies in JS
 */
export default (cookieName) => {
  const getAllCookies = () => document.cookie.split('; ');

  const getCookie = () => {
    const cookies = getAllCookies();
    const cookie = cookies.find((c) => c.indexOf(cookieName) !== -1);

    if (cookie) {
      return cookie.split('=')[1];
    }

    console.error(`Could not find cookie with name: ${cookieName}`);
    return null;
  };

  const setCookie = (value, expires = 7) => {
    const expiresAt = dayjs();
    expiresAt.add(expires, 'days');
    const cookieValue = `${encodeURIComponent(value)}; expires=${expiresAt.toDate().toUTCString()}; path=/`;
    document.cookie = `${cookieName}=${cookieValue}`;
  };

  const clearCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  return {
    getAllCookies,
    getCookie,
    setCookie,
    clearCookie,
  };
};
