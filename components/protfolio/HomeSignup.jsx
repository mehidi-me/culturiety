'use client'

import {useSubscribe} from '@/app/hook/useSubscribe'
import React, {useEffect, useRef, useState} from 'react'
import {toast} from 'react-hot-toast'

function HomeSignup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const {loading, error, data, subscribe} = useSubscribe()

  const emailInputRef = useRef(null)

  useEffect(() => {
    emailInputRef.current?.focus()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await subscribe({email, name, message})

    if (result.success) {
      toast.success('Subscription successful!', {style: {fontSize: '2rem'}})
      setEmail('')
      setName('')
      setMessage('')
    } else {
      toast.error('Subscription failed. Please try again.', {style: {fontSize: '2rem'}})
    }
  }
  return (
    <form onSubmit={handleSubmit} className="signup">
      <input
        type="email"
        ref={emailInputRef}
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Signup'}
      </button>
    </form>
  )
}

export default HomeSignup
