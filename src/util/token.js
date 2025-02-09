export default function getCSRFToken() {
  return fetch(`${process.env.GATSBY_EZAC_API_URL}/session/token`).then((response) => {
    if (response.ok) {
      return response.text();
    }

    return false;
  });
}
