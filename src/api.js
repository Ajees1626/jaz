/**
 * Backend API base URL. Set VITE_API_URL in .env (e.g. http://localhost:5000).
 */
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function submitEnquiry({ name, email, phone, message }) {
  const res = await fetch(`${API_BASE}/api/enquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, message }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Failed to submit enquiry')
  return data
}

export async function submitContact(payload) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Failed to send message')
  return data
}

export async function submitCareerApplication(payload) {
  const res = await fetch(`${API_BASE}/api/careers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Failed to submit application')
  return data
}
