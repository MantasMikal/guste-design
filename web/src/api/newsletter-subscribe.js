import fetch from 'node-fetch'

export default async function handler(req, res) {
  if (req.method !== 'POST') res.status(404)
  const { email } = req.body || {}
  const API_URL = 'https://clientapi.benchmarkemail.com/Contact/19494872/ContactDetails/CSV'

  if (!email) {
    return res.status(400).json({
      error: 'Email is required'
    })
  }

  const data = JSON.stringify({
    EmailIDs: email
  })

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      AuthToken: process.env.BENCHMARK_KEY,
      'Content-Type': 'application/json'
    },
    body: data
  })

  const resJson = await response.json()
  const isError = resJson.Response.Status === '-1'
  if (!isError) {
    res.status(200).json({
      message: 'Success'
    })
  } else {
    res.status(500).json({
      message: 'Error'
    })
  }
}
