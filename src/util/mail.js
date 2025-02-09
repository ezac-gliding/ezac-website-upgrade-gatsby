export default function sendMail({
  subject,
  message,
  type,
  CSRFToken,
}) {
  return fetch(`${process.env.GATSBY_EZAC_API_URL}/api/v2/mailer?subject=${encodeURIComponent(subject)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.GATSBY_BASIC_AUTH_KEY}`,
      'X-CSRF-Token': CSRFToken,
    },
    body: JSON.stringify({
      message,
      type,
    }),
  });
}

export function getMailTypes(CSRFToken) {
  return fetch(`${process.env.GATSBY_EZAC_API_URL}/api/v2/mailer/types`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.GATSBY_BASIC_AUTH_KEY}`,
      'X-CSRF-Token': CSRFToken,
    },
  });
}
