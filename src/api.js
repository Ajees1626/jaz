/**
 * Backend API base URL.
 * In production, leave empty so requests go through same domain (Nginx proxy).
 * In local development, set VITE_API_URL in .env if needed.
 */
const API_BASE = import.meta.env.VITE_API_URL || ''

function buildUrl(path) {
  return `${API_BASE}${path}`
}

async function handleResponse(res, defaultMessage) {
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data.error || defaultMessage)
  }
  return data
}

export async function submitEnquiry({ name, email, phone, message }) {
  const res = await fetch(buildUrl('/api/enquiry'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, message }),
  })

  return handleResponse(res, 'Failed to submit enquiry')
}

export async function submitContact(payload) {
  const res = await fetch(buildUrl('/api/contact'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  return handleResponse(res, 'Failed to send message')
}

export async function submitCareerApplication(payload) {
  const res = await fetch(buildUrl('/api/careers'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  return handleResponse(res, 'Failed to submit application')
}
