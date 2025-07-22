'use client'

import {useSubscribe} from '@/app/hook/useSubscribe'
import React, {useState} from 'react'
import {toast} from 'react-hot-toast'

function ContactForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const {loading, error, data, subscribe} = useSubscribe()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await subscribe({email, name, message})

    if (result.success) {
      toast.success('Send successful!', {style: {fontSize: '2rem'}})
      setEmail('')
      setName('')
      setMessage('')
    } else {
      toast.error('Send failed. Please try again.', {style: {fontSize: '2rem'}})
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <textarea
        placeholder="Type your message"
        defaultValue={''}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default ContactForm
