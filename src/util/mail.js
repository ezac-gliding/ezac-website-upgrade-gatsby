export default function sendMail(subject, message, CSRFToken) {
  return fetch(`${process.env.GATSBY_EZAC_API_URL}/api/v2/mailer?message=${encodeURIComponent(message)}&subject=${encodeURIComponent(subject)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.GATSBY_BASIC_AUTH_KEY}`,
      'X-CSRF-Token': CSRFToken,
    },
  });
}
